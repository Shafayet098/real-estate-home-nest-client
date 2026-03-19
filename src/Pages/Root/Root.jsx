import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <nav className='shadow-sm'>
                <Nav></Nav>
            </nav>
            <div>
                <Outlet></Outlet>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;