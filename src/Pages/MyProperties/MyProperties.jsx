import React from 'react';
import Card from '../../Components/Card/Card';
import { useLoaderData } from 'react-router';

const MyProperties = () => {
    const properties = useLoaderData();
    console.log(properties)
    return (
        <div className='mt-22 container mx-auto'>
            <div className='text-4xl text-secondary text-center'>
                You Can Make Any Change : Updata/Delete
            </div>
            <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 '>
                <Card></Card>
            </div>
        </div>
    );
};

export default MyProperties;