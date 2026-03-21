import React from 'react';
import Card from '../../Components/Card/Card';
import { useLoaderData } from 'react-router';

const AllProperties = () => {
    const properties = useLoaderData();
    console.log(properties)
    
    return (
        <div className='mt-22 container mx-auto'>
            <div>
                <h1 className='text-4xl text-secondary text-center'>All Properties Are Here....</h1>
            </div>
            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    properties.map(property=><Card 
                        key={property._id}
                        property={property}></Card>)
                }
            </div>
        </div>
    );
};

export default AllProperties;