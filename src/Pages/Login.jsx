import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import frame from '../assets/Frame.png'
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Animate from '../Components/Animate';
import { useForm } from "react-hook-form";
import useAuth from '../Components/Hooks/useAuth';
import Swal from 'sweetalert2';
import Loader from '../Components/Loader';
import axios from 'axios';
import { FaGoogle } from 'react-icons/fa';
import { generateRandomCharacters } from '../Components/Utilities/userName';

const Login = () => {

    // Form Hook
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    // AuthInfo
    const { signIn, googleLogin } = useAuth();

    // Loader
    const [loader, setLoader] = useState(false);
    // Location hook
    const location = useLocation();

    // navigate
    const navigate = useNavigate();

    // Error

    const [error, setError] = useState('');


    if (loader) {
        return <Loader></Loader>
    }

    const message = location?.state?.message || '';

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        setLoader(true)
        signIn(email, password)
            .then(result => {
                setLoader(false)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Successfully logged in",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
                setError('');
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
                setLoader(false)
            })
        reset()
    }

    const handleOnClick = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                axios.post('http://localhost:5000/users', { name: result?.user?.displayName, email: result?.user?.email, userName: generateRandomCharacters(10) })
                    .then(response => {
                        console.log(response.data);
                    })
                    .catch(error => console.log(error))
                navigate('/')
            })
    }


    return (
        <div>
            <Helmet>
                <title>Doc House | Login</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row w-full h-full p-0">
                    <div className="text-center lg:text-left lg:w-1/2 w-full relative bg-[#07332F] h-full">
                        <img src={frame} className='w-[450px] absolute right-0 top-0 h-auto' alt="" />
                        <Animate></Animate>
                    </div>
                    <div className="lg:w-1/2 w-full p-10">
                        <p className='text-green-600 mb-4 text-center'>{message}</p>
                        <h4 className='text-center text-xl uppercase font-bold mb-4'>Sign Up to Doc House</h4>
                        <div className="card shrink-0 w-full lg:w-3/4 mx-auto shadow-2xl bg-base-100">
                            <div className="card-body"><form className="" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control" >
                                    <label className="label">
                                        <span className="label-text font-bold">Username or Email Address</span>
                                    </label>
                                    <input type="email" {...register("email")} placeholder="Enter your username or address" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <div className='flex justify-between items-center'>
                                        <label className="label">
                                            <span className="label-text font-bold">Password</span>
                                        </label>
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover text-[#F7A582]">Forgot password?</a>
                                        </label>
                                    </div>
                                    <input type="password" {...register("password")} placeholder="Enter your password" className="input input-bordered" required />
                                </div>
                                {
                                    error && <div role="alert" className="alert alert-warning mt-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                        <span className='text-xs'>Warning: Invalid email address & Password!</span>
                                    </div>
                                }
                                <div className="form-control mt-6">
                                    <button className="bg-[#F7A582] btn text-white">Login</button>
                                </div>
                                <label className="label w-fit mx-auto">
                                    <span className="label-text text-gray-400">Please register at first. Go to <Link to="/signUp" className='text-[#F7A582]'>SIGN UP</Link></span>
                                </label>
                            </form>
                                <div className="divider">OR</div>
                                <div className="form-control">
                                    <button className="text-[#F7A582] btn bg-white" onClick={handleOnClick}>Login with <FaGoogle /></button>
                                </div></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;