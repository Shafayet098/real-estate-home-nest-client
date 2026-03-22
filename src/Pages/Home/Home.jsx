import React from 'react';
import Hero from '../../Components/Hero/Hero';
import ChooseUs from '../../Components/ChooseUs/ChooseUs';
import Services from '../../Components/Services/Services';
import Partners from '../../Components/Partners/Partners';
import Cards from '../../Components/Cards/Cards';
import { useLoaderData, useNavigation } from 'react-router';

const Home = () => {
    const properties = useLoaderData();
    // console.log(properties)
    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='mt-20'>
                <Hero></Hero>
            </div>
            <div className='container mx-auto mt-20'>
                <Cards properties={properties}></Cards>
            </div>
            <div className='mt-20  container mx-auto'>
                <ChooseUs></ChooseUs>
            </div>
            <div className='mt-20  container mx-auto'>
                <Services></Services>
            </div>
            <div className='mt-20 container mx-auto'>
                <Partners></Partners>
            </div>
        </div>
    );
};

export default Home;