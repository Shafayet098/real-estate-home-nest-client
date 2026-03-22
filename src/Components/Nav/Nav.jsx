import React, { use } from 'react';
import icon from './../../assets/icon.png'
import { Link, NavLink, useNavigate } from 'react-router';
import './Nav.css'
import { IoMdMenu } from 'react-icons/io';
import { AuthContext } from '../Context/AuthContext';

const Nav = () => {
    const { user, logOut } = use(AuthContext)
    const navigate = useNavigate();
    const handleLogout = () => {
        logOut().then(() => {
            navigate('/')
        })
    }
    const links = <>
        <li ><NavLink className={({ isActive }) => isActive ? "text-blue-500 border-b-2 bg-transparent rounded-none  border-b-blue-500" : "bg-transparent"
        } to={'/'}>Home</NavLink>
        </li>
        <li className=''><NavLink className={({ isActive }) => isActive ? "text-primary border-b-2 bg-transparent rounded-none  border-primary" : "bg-transparent"
        } to={'/allproperties'}>All Properties</NavLink>
        </li>
        <li><NavLink className={({ isActive }) => isActive ? "text-primary border-b-2 bg-transparent rounded-none  border-b-primary" : "bg-transparent"
        } to={'/addproperties'}>Add Properties</NavLink>
        </li>
        <li><NavLink className={({ isActive }) => isActive ? "text-primary border-b-2 bg-transparent rounded-none  border-b-primary" : "bg-transparent"
        } to={`/myproperties/${user?.email}`}>My Properties</NavLink>
        </li>
        <li><NavLink className={({ isActive }) => isActive ? "text-primary border-b-2 bg-transparent rounded-none  border-b-primary" : "bg-transparent"
        } to={'/properties/ratings'}>Ratings</NavLink>
        </li>
    </>
    return (
        <div className='container mx-auto'>
            <div className="navbar ">
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
                <div className="navbar-end flex items-center gap-4">
                    <div>
                        {
                            user ?
                                <div>
                                    <div className="dropdown dropdown-bottom dropdown-end">
                                        
                                        <div tabIndex={0} role="button" className="avatar cursor-pointer">
                                            <div className="ring-primary ring-offset-base-100 w-10 sm:w-14 rounded-full ring-1 ring-offset-1">
                                                <img src={user.photoURL || 'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp'} />
                                            </div>
                                        </div>
                                        <div tabIndex={0}className="dropdown-content flex flex-col justify-center rounded-xl  dropdown-content menu bg-base-100 rounded-box z-50 mt-3 shadow-sm">
                                            <img src={user.photoURL || 'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp'} alt="" className="w-18  mx-auto bg-white outline-1 outline-primary rounded-full aspect-square" />
                                            <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                                                <div className="my-2 space-y-1">
                                                    <h2 className="text-xl font-semibold">{user?.displayName || "No Name"}</h2>
                                                    <p className="px-5 text-xs sm:text-base dark:text-gray-600">{user?.email}</p>
                                                </div>
                                                <Link onClick={handleLogout} className="relative inline-flex items-center justify-center p-2 px-6 md:px-8 py-2 md:py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-primary rounded-full shadow-md group">
                                                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
                                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                                    </span>
                                                    <span className="absolute flex items-center justify-center text-primary transition-all duration-300 transform group-hover:translate-x-full ease">Logout </span>
                                                    <span class="relative invisible">Logout</span>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className='flex gap-2'>
                                    <Link to={'/login'} className="relative inline-flex items-center justify-center p-2 px-4 md:px-6 py-2 md:py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-primary rounded-full shadow-md group">
                                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="absolute flex items-center justify-center text-primary transition-all duration-300 transform group-hover:translate-x-full ease">Login </span>
                                        <span className="relative invisible">Login</span>
                                    </Link>
                                    <Link to={'/register'} className="relative inline-flex items-center justify-center p-2 px-4 md:px-6 py-2 md:py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-primary rounded-full shadow-md group">
                                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="absolute flex items-center justify-center text-primary transition-all duration-300 transform group-hover:translate-x-full ease">SignUp </span>
                                        <span className="relative invisible">SignUp</span>
                                    </Link>
                                </div>
                        }
                    </div>
                </div>

                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="pl-2 md:pl-4 cursor-pointer m-1 lg:hidden"><IoMdMenu className='text-secondary' size={35}></IoMdMenu> </div>
                    <ul tabIndex={0} className="dropdown-content menu mt-3 bg-base-100 rounded-box z-50 w-52 p-2 shadow-sm space-y-2">
                        <li ><Link className={"text-blue-500  bg-transparent hover:bg-primary hover:text-white shadow-md "} to={'/'}>Home</Link>
                        </li>
                        <li className=''><Link to={'/allproperties'}  className={"text-blue-500  bg-transparent hover:bg-primary hover:text-white shadow-md "}>All Properties</Link>
                        </li>
                        <li><Link className={"text-blue-500  bg-transparent hover:bg-primary hover:text-white shadow-md "} to={'/addproperties'}>Add Properties</Link>
                        </li>
                        <li><Link className={"text-blue-500  bg-transparent hover:bg-primary hover:text-white shadow-md "} to={`/myproperties/${user?.email}`}>My Properties</Link>
                        </li>
                        <li><Link className={"text-blue-500  bg-transparent hover:bg-primary hover:text-white shadow-md "} to={'/properties/ratings'}>Ratings</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;