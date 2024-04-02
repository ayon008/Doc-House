import React from 'react';
import { Helmet } from 'react-helmet';
import frame from '../assets/Frame.png'
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
import Animate from '../Components/Animate';
import { useForm } from "react-hook-form";

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        reset()
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
                        <h4 className='text-center text-xl uppercase font-bold mb-4'>Sign Up to Doc House</h4>
                        <div className="card shrink-0 w-full lg:w-3/4 mx-auto shadow-2xl bg-base-100">
                            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
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
                                <div className="form-control mt-6">
                                    <button className="bg-[#F7A582] btn text-white">Login</button>
                                </div>
                                <label className="label w-fit mx-auto">
                                    <span className="label-text text-gray-400">Please register at first. Go to <Link to="/signUp" className='text-[#F7A582]'>SIGN UP</Link></span>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;