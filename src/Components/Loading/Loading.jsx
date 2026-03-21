import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='w-screen text-primary h-screen flex justify-center items-center'>
            <ScaleLoader></ScaleLoader> 
        </div>
    );
};

export default Loading;