import React from 'react';
import { GrLocation } from 'react-icons/gr';
import { LiaBathSolid } from 'react-icons/lia';
import { LuSquareMenu } from 'react-icons/lu';
import { RiHotelBedLine } from 'react-icons/ri';
import { Link } from 'react-router';

const Card = () => {
    return (
        <div className='flex'>
            <Link className="group  max-w-sm mx-auto transition border-2 p-2 hover:scale-105 border-opacity-30 border-primary hover:border-secondary">
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80"
                        alt="Modern Chateau"
                        className="w-full object-cover"
                    />

                    {/* Badge */}
                    <div className="absolute bottom-3 left-3">
                        <span className="bg-secondary px-3 py-1 text-[12px] font-medium text-white">
                            Featured
                        </span>
                    </div>
                </div>
                <div className="px-5 py-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="pr-4 border-r ">
                            <h3 className="text-xl font-bold leading-8 text-secondary">
                                Modern
                                <br />
                                Chateau
                            </h3>

                            <div className="mt-2 inline-block bg-[#f3e69b] px-1.5 py-0.5 text-sm font-bold leading-none text-accent">
                                $ 63120
                            </div>
                        </div>

                        <div className=" space-y-3 text-md text-accent">
                            <div className="flex items-start gap-2">
                                <span className="mt-0.5 text-secondary">
                                    <LuSquareMenu size={15}></LuSquareMenu>
                                </span>
                                <div>
                                    <span className="font-semibold text-gray-700">Sq Ft:</span>
                                    <span className="ml-2">3500</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="mt-0.5 text-accent">
                                    <RiHotelBedLine size={15}></RiHotelBedLine>
                                </span>
                                <div>
                                    <span className="font-semibold text-gray-700">Beds:</span>
                                    <span className="ml-2">3</span>
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
                            Chennai, Tamil Nadu, India, IN 641001
                        </p>
                    </div>

                    {/* Description */}
                    <div className="mt-6 text-[14px] leading-8 text-secondary">
                        <span className="font-semibold text-secondary">Description:</span>{" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dui
                        felis, molestie id varius...
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;