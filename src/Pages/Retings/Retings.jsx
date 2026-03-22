import React from 'react';
import RatingCard from './RatingCard';
import { useLoaderData } from 'react-router';

const Retings = () => {
    const reviews = useLoaderData();
    return (
        <div className='mt-20 grid grid-cols-1 md:grid-cols-2 container gap-6 mx-auto px-4 sm:px-6 justify-center'>
            {
                reviews.map(review=><RatingCard
                review={review}
                key={review._id}></RatingCard>)
            }
        </div>
    );
};

export default Retings;