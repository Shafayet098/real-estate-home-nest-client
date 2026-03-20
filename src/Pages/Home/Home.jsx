import React from 'react';
import Hero from '../../Components/Hero/Hero';
import ChooseUs from '../../Components/ChooseUs/ChooseUs';
import Services from '../../Components/Services/Services';

const Home = () => {
    return (
        <div>
            <div className='mt-20'>
                <Hero></Hero>
            </div>
            <div className='mt-20  container mx-auto'>
                <ChooseUs></ChooseUs>
            </div>
            <div className='mt-20 mb-20 container mx-auto'>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;