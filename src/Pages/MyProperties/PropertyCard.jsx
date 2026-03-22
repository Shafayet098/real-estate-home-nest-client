import React from 'react';
import { GrLocation } from 'react-icons/gr';
import { LiaBathSolid } from 'react-icons/lia';
import { LuSquareMenu } from 'react-icons/lu';
import { RiHotelBedLine } from 'react-icons/ri';
import { Link } from 'react-router';
import defaultImage from './../../assets/image_default.jpg'
import Swal from 'sweetalert2';

const PropertyCard = ({ property, setProperties, properties }) => {
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/properties/${property._id}`, {
                    method: 'DELETE'
                }).then(res => res.json()).then(data => {
                    if (data.deletedCount) {
                        const remainingProperties = properties.filter(item => item._id !== property._id)
                        setProperties(remainingProperties)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Card has been deleted.",
                            icon: "success"
                        });
                    }
                })
            }
        });


    }
    
    return (
        <div className='flex'>
            <div className="group  max-w-sm mx-auto transition border-2 p-2 hover:scale-105 border-opacity-30 border-primary hover:border-secondary">
                <div className="relative ">
                    <div className='h-[40vh] object-cover overflow-hidden'>
                        <img
                            src={property?.imageLink || defaultImage}
                            alt="Modern Chateau"
                            className="w-full object-cover"
                        />
                    </div>

                    <div className="absolute bottom-3 left-3">
                        <span className="bg-secondary px-3 py-1 text-[12px] font-medium text-white">
                            {property?.category}
                        </span>
                    </div>
                </div>
                <div className="px-5 py-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="pr-4 border-r ">
                            <h3 className="text-xl font-bold leading-8 text-secondary">
                                {
                                    property?.propertyName.slice(" ")
                                }
                            </h3>

                            <div className="mt-2 inline-block bg-[#f3e69b] px-1.5 py-0.5 text-sm font-bold leading-none text-accent">
                                $ <span>{property?.price}</span>
                            </div>
                        </div>

                        <div className=" space-y-3 text-md text-accent">
                            <div className="flex items-start gap-2">
                                <span className="mt-0.5 text-secondary">
                                    <LuSquareMenu size={15}></LuSquareMenu>
                                </span>
                                <div>
                                    <span className="font-semibold text-gray-700">Sq Ft: </span>
                                    <span className="ml-2">{property?.squareFeet}</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="mt-0.5 text-accent">
                                    <RiHotelBedLine size={15}></RiHotelBedLine>
                                </span>
                                <div>
                                    <span className="font-semibold text-gray-700">Beds:</span>
                                    <span className="ml-2">{property?.beds}</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="mt-0.5 text-secondary">
                                    <LiaBathSolid size={15}></LiaBathSolid>
                                </span>
                                <div>
                                    <span className="font-semibold text-gray-700">Baths:</span>
                                    <span className="ml-2">3</span>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Location */}
                    <div className="mt-6 flex items-start gap-2 text-[13px] text-gray-600">
                        <span className="mt-0.5 text-[#2f3f86]">
                            <GrLocation size={20}></GrLocation>
                        </span>
                        <p className="text-secondary">
                            {property?.location}
                        </p>
                    </div>

                    {/* Description */}
                    <div className="mt-6 text-[14px] leading-8 text-secondary">
                        <span className="font-semibold text-secondary">Description:</span>{" "}
                        {property?.description}
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <Link className=' mx-auto w-full' to={`/properties/${property._id}`}>
                        <button className='btn w-full bg-white hover:bg-primary text-primary hover:text-white border-2 border-primary'>View Details</button>
                    </Link>
                    <div className='gird grid-row-2 items-center   '>
                        <Link to={`/properties/update/${property._id}`}>
                            <button  className='btn w-[50%]  bg-white hover:bg-primary text-primary hover:text-white border-2 border-primary'>Edit</button>
                        </Link>
                        <button onClick={handleDelete} className='btn w-[50%] bg-white hover:bg-red-500 text-red-500 hover:text-white border-2 border-red-500'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;