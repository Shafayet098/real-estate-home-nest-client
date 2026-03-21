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
            <div>
                {
                    properties.length ?
                        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {
                                properties.map(property => <Card
                                    key={property._id}
                                    property={property}></Card>)
                            }
                        </div>
                        :
                        <div className='text-4xl flex justify-center items-center mt-20 text-red-300'>
                            No Property Is Added 
                        </div>
                }
            </div>
        </div>
    );
};

export default MyProperties;