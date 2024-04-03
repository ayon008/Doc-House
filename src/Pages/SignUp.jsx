import { Helmet } from 'react-helmet';
import frame from '../assets/Frame.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Animate from '../Components/Animate';
import { useForm } from "react-hook-form"
import useAuth from '../Components/Hooks/useAuth';
import { useState } from 'react';
import Loader from '../Components/Loader';
import Swal from 'sweetalert2'
import axios from 'axios';
import { FaGoogle } from 'react-icons/fa';
import { generateRandomCharacters } from '../Components/Utilities/userName';


const SignUp = () => {

    // auth
    const { signUp, updateUser, logOut, googleLogin } = useAuth();

    const [loader, setLoader] = useState(false);

    const navigate = useNavigate();

    const location = useLocation();

    // Form
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    if (loader) {
        return <Loader />
    }

    const handleOnClick = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                axios.post('http://localhost:5000/users', { name: result?.user?.displayName, email: result?.user?.email, userName: generateRandomCharacters(10) })
                    .then(response => {
                        console.log(response.data);
                        navigate('/')
                    })
            })
    }

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        const name = data.name;
        const userName = data.userName;
        setLoader(true);
        signUp(email, password)
            .then(result => {
                updateUser(data.name, '')
                    .then(result => {
                        setLoader(false)
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Successfully signed up",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        reset();
                        axios.post('http://localhost:5000/users', { name, userName, email })
                        logOut()
                            .then(() => {
                                navigate('/login', { state: { message: 'successfully signed up, Please Login' } });
                            })
                    })

                console.log(result.user);
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <Helmet>
                <title>Doc House | SignUp</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row w-full h-full p-0">
                    <div className="text-center lg:text-left lg:w-1/2 w-full relative bg-[#07332F] h-full">
                        <img src={frame} className='w-[450px] absolute right-0 top-0 h-auto' alt="" />
                        <Animate></Animate>
                    </div>
                    <div className="lg:w-1/2 w-full p-10">
                        <h4 className='text-center text-xl uppercase font-bold mb-4'>Sign Up to Doc House</h4>
                        <div className="card shrink-0 w-full lg:w-3/4 mx-auto shadow-2xl bg-base-100">
                            <div className='card-body'>
                                <form className="" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Name</span>
                                        </label>
                                        <input type="text"  {...register("name", { required: true })} name='name' placeholder="Enter your name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Username</span>
                                        </label>
                                        <input type="text" name='userName' {...register("userName", { required: true })} placeholder="Enter your username" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Email</span>
                                        </label>
                                        <input type="email" name='email' {...register("email", { required: true })} placeholder="Enter your email address" className="input input-bordered" required />

                                    </div>
                                    <div className="form-control">
                                        <div className='flex justify-between items-center'>
                                            <label className="label">
                                                <span className="label-text font-bold">Password</span>
                                            </label>
                                        </div>
                                        <input type="password" {...register("password", { required: true, minLength: 6 })} name='password' placeholder="Enter your password" className="input input-bordered" required />
                                        {errors.password?.type === "minLength" && <p className='text-red-600 text-xs'>Password must be six character long</p>}
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="bg-[#F7A582] btn text-white">Create account</button>
                                    </div>
                                    <label className="label w-fit mx-auto">
                                        <span className="label-text text-gray-400">Already registered? Go to <Link to="/login" className='text-[#F7A582]'>SIGN IN</Link></span>
                                    </label>
                                </form>
                                <div className="divider">OR</div>
                                <div className="form-control">
                                    <button className="text-[#F7A582] btn bg-white" onClick={handleOnClick}>Login with <FaGoogle /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;