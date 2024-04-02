import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Group 1.svg';

const Nav = () => {
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>About</Link></li>
        <li><Link to='/'>Appointment</Link></li>
        <li><Link to='/login'>Login</Link></li>
    </>
    return (
        <div className="navbar h-[80px] p-0">
            <div className="navbar-start">
                <Link to='/' className="btn-ghost text-xl">
                    <span className='flex items-center gap-3 text-white'>
                        <img className='' src={logo} alt="" />
                        <span className='Source flex gap-1 font-semibold'>
                            <span>Doc</span>
                            <span className='text-color'> House</span>
                        </span>
                    </span>
                </Link>
            </div>
            <div className="navbar-end">
                <div className="dropdown text-white relative">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 absolute right-0 z-40 text-black">
                        {navItems}
                    </ul>
                </div>
                <ul className="hidden lg:flex menu menu-horizontal px-1 text-white font-semibold">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Nav;