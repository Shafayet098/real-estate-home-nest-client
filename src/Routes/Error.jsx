import React from 'react';
import err from './../../src/assets/error.jpg'
const Error = () => {
    return (
        <div className='flex justify-center items-center'>
            <img className='w-[65%]' src={err} alt="" />
        </div>
    );
};

export default Error;