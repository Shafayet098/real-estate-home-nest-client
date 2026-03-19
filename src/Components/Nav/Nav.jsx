import React from 'react';
import icon from './../../assets/icon.png'
import { Link, NavLink } from 'react-router';
import './Nav.css'
import { IoMdMenu } from 'react-icons/io';

const Nav = () => {
    const links = <>
        <li ><NavLink className={({ isActive }) => isActive ? "text-blue-500 border-b-2 bg-transparent rounded-none  border-b-blue-500" : "bg-transparent"
        } to={'/'}>Home</NavLink>
        </li>
        <li className=''><NavLink className={({ isActive }) => isActive ? "text-primary border-b-2 bg-transparent rounded-none  border-primary" : "bg-transparent"
        } to={'/allproperties'}>All Properties</NavLink>
        </li>
        <li><NavLink className={({ isActive }) => isActive ? "text-primary border-b-2 bg-transparent rounded-none  border-b-primary" : "bg-transparent"
        } to={'/addprperties'}>Add Properties</NavLink>
        </li>
        <li><NavLink className={({ isActive }) => isActive ? "text-primary border-b-2 bg-transparent rounded-none  border-b-primary" : "bg-transparent"
        } to={'/myproperties'}>My Properties</NavLink>
        </li>
        <li><NavLink className={({ isActive }) => isActive ? "text-primary border-b-2 bg-transparent rounded-none  border-b-primary" : "bg-transparent"
        } to={'/myratings'}>My Ratings</NavLink>
        </li>
    </>
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className='flex items-center'>
                        <img className='w-18 h-14' src={icon} alt="" />
                        <h1 className='text-2xl font-bold text-secondary '>HOME <span className='text-primary '>NEST </span></h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold text-lg text-accent bg-transparent">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link class="relative inline-flex items-center justify-center p-2 px-3 md:px-4 py-2 md:py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-primary rounded-full shadow-md group">
                        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="absolute flex items-center justify-center text-primary transition-all duration-300 transform group-hover:translate-x-full ease">Login </span>
                        <span class="relative invisible">Login Text</span>
                    </Link>
                </div>
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="pl-2 md:pl-4 cursor-pointer m-1 lg:hidden"><IoMdMenu className='text-secondary' size={35}></IoMdMenu> </div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm space-y-2">
                        <li ><Link className={"text-blue-500  bg-transparent hover:bg-primary hover:text-white shadow-md "} to={'/'}>Home</Link>
                        </li>
                        <li className=''><Link className={"text-blue-500  bg-transparent hover:bg-primary hover:text-white shadow-md "}>All Properties</Link>
                        </li>
                        <li><Link className={"text-blue-500  bg-transparent hover:bg-primary hover:text-white shadow-md "} to={'/addprperties'}>Add Properties</Link>
                        </li>
                        <li><Link className={"text-blue-500  bg-transparent hover:bg-primary hover:text-white shadow-md "} to={'/myproperties'}>My Properties</Link>
                        </li>
                        <li><Link className={"text-blue-500  bg-transparent hover:bg-primary hover:text-white shadow-md "} to={'/myratings'}>My Ratings</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;