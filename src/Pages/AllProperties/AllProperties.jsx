import React from 'react';
import Card from '../../Components/Card/Card';
import { useLoaderData } from 'react-router';

const AllProperties = () => {
    const allProperties = useLoaderData();
    console.log(allProperties)
    
    return (
        <div className='mt-22'>
            <div>
                <h1 className='text-4xl text-secondary text-center'>All Properties Are Here....</h1>
            </div>
            <div className='mt-8'>
                <Card></Card>
            </div>
        </div>
    );
};

export default AllProperties;