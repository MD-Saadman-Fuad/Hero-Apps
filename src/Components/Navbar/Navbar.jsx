import React from 'react';
import { VscGithub } from "react-icons/vsc";
import logo from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm font-bold">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <NavLink to='/' className={({ isActive }) => isActive ? 'bg-purple-600 text-white' : undefined}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/apps' className={({ isActive }) => isActive ? 'bg-purple-600 text-white' : undefined}>
                                Apps
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/installation' className={({ isActive }) => isActive ? 'bg-purple-600 text-white' : undefined}>
                                Installation
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Link to={'/'}><button className="btn btn-ghost text-xl text-purple-600 font-bold"><img src={logo} className='w-[30px]' alt="" />HERO.IO</button></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'bg-purple-600 text-white' : undefined}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/apps' className={({ isActive }) => isActive ? 'bg-purple-600 text-white' : undefined}>
                            Apps
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/installation' className={({ isActive }) => isActive ? 'bg-purple-600 text-white' : undefined}>
                            Installation
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end " >
                <a href='https://github.com/MD-Saadman-Fuad' className="btn text-white" style={{
                    borderRadius: '4px',
                    background: 'linear-gradient(125.07deg, rgba(99,46,227,1), rgba(159,98,242,1) 100%)'
                }}><VscGithub /> Contribute</a>
            </div>
        </div>
    );
};

export default Navbar;