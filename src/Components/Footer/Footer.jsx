import { FaFacebook, FaGithub, FaXTwitter } from "react-icons/fa6";
import icon from './../../assets/icon.png'
import { Link } from "react-router";
const Footer = () => {


    return (
        <footer className="py-6  text-accent">
            <div className="container px-6 mx-auto">
                <div className="grid grid-cols-12">
                    <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                        <div className="navbar-start">
                            <div className='flex items-center'>
                                <img className='w-26 h-20' src={icon} alt="" />
                                <h1 className='text-4xl font-bold text-secondary '>HOME <span className='text-primary '>NEST </span></h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-medium">Useful Links</p>
                        <ul>
                            <li ><Link className="text-secondary  bg-transparent rounded-none hover:text-primary"
                            >Home</Link>
                            </li>
                            <li className=''><Link className="text-secondary  bg-transparent rounded-none hover:text-primary" to={'/allproperties'}>All Properties</Link>
                            </li>
                            <li><Link className="text-secondary  bg-transparent rounded-none hover:text-primary" to={'/addprperties'}>Add Properties</Link>
                            </li>
                            <li><Link className="text-secondary  bg-transparent rounded-none hover:text-primary" to={'/myproperties'}>My Properties</Link>
                            </li>
                            <li><Link className="text-secondary  bg-transparent rounded-none hover:text-primary" to={'/myratings'}>My Ratings</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-medium">Other LInks</p>
                        <ul>
                            <li ><Link className="text-secondary  bg-transparent rounded-none hover:text-primary" to={'/'}>Web Development</Link>
                            </li>
                            <li className=''><Link className="text-secondary  bg-transparent rounded-none hover:text-primary" to={'/allproperties'}>Web Design</Link>
                            </li>
                            <li><Link className="text-secondary  bg-transparent rounded-none hover:text-primary" to={'/addprperties'}>App Development</Link>
                            </li>
                            <li><Link className="text-secondary  bg-transparent rounded-none hover:text-primary" to={'/myproperties'}>Digital Marketing</Link>
                            </li>
                            <li><Link className="text-secondary  bg-transparent rounded-none hover:text-primary" to={'/myratings'}>Online Shops</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid justify-center pt-6 lg:justify-between">
                    <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                        <span>©2026 All rights reserved</span>
                        <a rel="noopener noreferrer" href="#">
                            <span>Privacy policy</span>
                        </a>
                        <a rel="noopener noreferrer" href="#">
                            <span>Terms of service</span>
                        </a>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                        <a rel="noopener noreferrer" href="#" title="GitHub" className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white hover:bg-secondary" >
                            <FaFacebook size={25}></FaFacebook >
                        </a>
                        <a rel="noopener noreferrer" href="#" title="GitHub" className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white hover:bg-secondary" >
                            <FaXTwitter size={25}></FaXTwitter>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="GitHub" className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white hover:bg-secondary" >
                            <FaGithub size={25}></FaGithub>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;