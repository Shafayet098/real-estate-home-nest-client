import React from 'react';
import { Link, useLoaderData } from 'react-router';
import defaultImage from './../../assets/image_default.jpg'
import { GrLocation } from 'react-icons/gr';
import { LiaBathSolid } from 'react-icons/lia';
import { LuSquareMenu } from 'react-icons/lu';
import { RiHotelBedLine } from 'react-icons/ri';
import RatingsReviewsSection from '../../Components/RatingsReviewsSection/RatingsReviewsSection';

const Property = () => {
    const property = useLoaderData();
    // console.log(property)
    return (
        <div className='flex max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto border-2 border-slate-200 mt-20'>
            <div className="group p-2 ">
                <div className="">
                    <div className='h-[70vh] object-cover overflow-hidden'>
                        <img
                            src={property?.imageLink || defaultImage}
                            alt="Modern Chateau"
                            className="w-full object-cover"
                        />
                    </div>
                </div>
                <div className='p-4 mt-4 border-b-2 border-slate-200'>
                    <h3 className="text-4xl font-bold  leading-8 text-secondary">
                        {
                            property?.propertyName.slice(" ")
                        }
                    </h3>
                    <p className='text-secondary mt-6 text-lg'>Posted By: <span className='font-semibold'>{property?.userName}</span></p>

                    <p className='text-secondary mt-4 text-md'>Posted Time:  {property?.postedTime}</p>
                    <div className="mt-4">
                        <span className="text-secondary text-lg font-semibold">
                            Property Category: {property?.category}
                        </span>
                    </div>
                    <div className="mt-4 inline-block bg-[#f3e69b] px-2 py-1.5 text-lg font-semibold leading-none text-accent">
                        $ <span>Property Price: {property?.price}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-6">
                        <span className="mt-0.5 text-secondary">
                            <LuSquareMenu size={30}></LuSquareMenu>
                        </span>
                        <div className='flex items-center gap-2'>
                            <div className="font-semibold text-secondary text-lg">Total Area :  </div>
                            <div className="font-semibold text-secondary text-lg">{property?.squareFeet} Square Feet</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mt-6">
                        <span className="mt-0.5 text-secondary">
                            <RiHotelBedLine size={30}></RiHotelBedLine>
                        </span>
                        <div className='flex items-center gap-2'>
                            <div className="font-semibold text-secondary text-lg">Total Bed Rooms :  </div>
                            <div className="font-semibold text-secondary text-lg">{property?.beds}</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mt-6">
                        <span className="mt-0.5 text-secondary">
                            <LiaBathSolid size={30}></LiaBathSolid>
                        </span>
                        <div className='flex items-center gap-2'>
                            <div className="font-semibold text-secondary text-lg">Total Wash Rooms :  </div>
                            <div className="font-semibold text-secondary text-lg">3</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 mt-6">
                        <span className="mt-0.5 text-secondary">
                            <GrLocation size={30}></GrLocation>
                        </span>
                        <div className='flex items-center gap-2'>
                            <div className="font-semibold text-secondary text-lg">Location :  </div>
                            <div className="font-semibold text-secondary text-lg">{property?.location}</div>
                        </div>

                    </div>
                    <div className="mt-6 text-lg leading-8 text-secondary">
                        <span className="font-semibold text-secondary">Description:</span>{" "}
                        {property?.description}
                    </div>

                    <div className='mt-6 text-secondary'>
                        <span className='text-lg font-semibold'>OverView: </span>
                        <p>Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a large living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows. Despite the interior views, the apartments Southern and Eastern exposures allow for lovely natural light to fill every room. The master suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space. The second bedroom is a corner room with double windows. The kitchen has fabulous space, new appliances, and a laundry area. Other features include rich herringbone floors, crown moldings and coffered ceilings throughout the apartment. 1049 5th Avenue is a classic pre-war building located across from Central Park, the reservoir and The Metropolitan Museum. Elegant lobby and 24 hours doorman. This is a pet-friendly building.</p>
                    </div>
                </div>
                <div>
                    <RatingsReviewsSection property={property}></RatingsReviewsSection>
                </div>
            </div>


        </div>
    );
};

export default Property;