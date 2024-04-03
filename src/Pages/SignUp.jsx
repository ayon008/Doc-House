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
    const { signUp, updateUser, logOut, googleLogin, removeUser, user, loading } = useAuth();

    const [loader, setLoader] = useState(false);

    const navigate = useNavigate();

    const [error, setError] = useState(false)

    const [errorMessage, setErrorMessage] = useState(false);

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
                    })
                navigate('/')
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
                        axios.post('http://localhost:5000/users', { name, userName, email })
                            .then(data => {
                                console.log(data.data.message);
                                if (data.data.message === 'username not available') {
                                    return (
                                        removeUser()
                                            .then(() => {
                                                setErrorMessage(true)
                                            })
                                            .catch(error => console.log(error))
                                    )
                                }
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Successfully signed up",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                reset();

                                setError(false)
                                logOut()
                                    .then(() => {
                                        navigate('/login', { state: { message: 'successfully signed up, Please Login' } });
                                    })
                            }
                            )
                    })

                console.log(result.user);
            })
            .catch(error => {
                setLoader(false)
                setError(true)
                console.log(error)
            })
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
                                    {
                                        errorMessage && <p className='text-xs mt-2 text-red-400'>User name is not available</p>
                                    }
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Email</span>
                                        </label>
                                        <input type="email" name='email' {...register("email", { required: true })} placeholder="Enter your email address" className="input input-bordered" required />
                                    </div>
                                    {
                                        error && <div role="alert" className="alert alert-warning mt-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                            <span className='text-xs'>Warning: email-already-in-use</span>
                                        </div>
                                    }
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