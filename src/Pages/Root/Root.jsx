import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import Loading from '../../Components/Loading/Loading';

const Root = () => {
    const navigation = useNavigation();
    if(navigation.state === 'loading'){
        return <Loading></Loading>
    }
    return (
        <div>
            <nav className='fixed top-0 left-0 w-full shadow-md z-50 bg-base-100'>
                <Nav></Nav>
            </nav>
            <div>
                <Outlet></Outlet>
            </div>
            <footer className='mt-26'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;