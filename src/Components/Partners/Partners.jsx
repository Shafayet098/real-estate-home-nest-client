import React, { useEffect, useMemo, useState } from 'react';
import logo1 from './../../assets/logo1.jfif'
import logo2 from './../../assets/logo2.png'
import logo3 from './../../assets/logo3.jfif'
import logo5 from './../../assets/logo5.jfif'
import logo6 from './../../assets/logo6.jfif'
import logo7 from './../../assets/logo7.jfif'
import logo8 from './../../assets/logo8.png'
import logo9 from './../../assets/logo9.jfif'
import logo10 from './../../assets/logo10.png'
import logo11 from './../../assets/logo11.png'
// import logo12 from './../../assets/logo12.png'

const Partners = () => {

    const logos = [
        {
            id: 1,
            title: "REAL ESTATE",
            subtitle: "OPEN HOUSE GROUP",
            image: logo1,
        },
        {
            id: 2,
            title: "Insignia Builders",
            subtitle: "SLOGAN",
            image: logo2,
        },
        {
            id: 3,
            title: "LETTY HOME",
            subtitle: "REAL ESTATE",
            image: logo3,
        },
        {
            id: 4,
            title: "COUNTRY HOUSE",
            subtitle: "REAL ESTATE",
            image: logo5,
        },
        {
            id: 5,
            title: "LUXURY HOUSE",
            subtitle: "REAL ESTATE",
            image: logo6,
        },
        {
            id: 6,
            title: "URBAN SPACE",
            subtitle: "PROPERTY",
            image: logo7,
        },
        {
            id: 7,
            title: "DREAM VILLA",
            subtitle: "REAL ESTATE",
            image: logo8,
        },
        {
            id: 8,
            title: "CHOWDHURY VILLA",
            subtitle: "REAL ESTATE",
            image: logo9,
        },
        {
            id: 9,
            title: "HITECH VILLA",
            subtitle: "REAL ESTATE",
            image: logo10,
        },
        {
            id: 10,
            title: "NABILA VILLA",
            subtitle: "REAL ESTATE",
            image: logo11,
        },
        // {
        //     id: 11,
        //     title: "DREAM VILLA",
        //     subtitle: "REAL ESTATE",
        //     image: logo12,
        // },
    ];

    const itemsPerSlide = 5;
    const [current, setCurrent] = useState(0);

    const pages = useMemo(() => {
        const result = [];
        for (let i = 0; i < logos.length; i += itemsPerSlide) {
            result.push(logos.slice(i, i + itemsPerSlide));
        }
        return result;
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % pages.length);
        }, 2000);
        return () => clearInterval(timer);
    }, [pages.length]);

    return (
        <div>
            <div className='text-center space-y-2 mb-4'>
                <h1 className='text-4xl md:text-5xl text-secondary font-semibold'>Our Partners</h1>
                <p className='text-secondary text-md md:text-lg'>Get the Best from the Best Builders</p>
            </div>
            <section className="w-full bg-white py-5 md:py-6">
                <div className=" px-4">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-1000 ease-in-out"
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                            {pages.map((page, pageIndex) => (
                                <div
                                    key={pageIndex}
                                    className="grid min-w-full grid-cols-2 md:grid-cols-5"
                                >
                                    {page.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex h-[145px] md:h-[146px] items-center justify-center border-r border-white px-4"
                                        >
                                            <div className="flex flex-col items-center justify-center text-center">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="mb-3 h-16 w-16 object-contain md:h-20 md:w-20"
                                                />
                                                <h3 className="text-[14px] font-bold uppercase tracking-[0.3px] text-black md:text-[15px]">
                                                    {item.title}
                                                </h3>
                                                <p className="mt-1 text-[9px] uppercase tracking-[2px] text-gray-500">
                                                    {item.subtitle}
                                                </p>
                                            </div>
                                        </div>
                                    ))}

                                    {page.length < itemsPerSlide &&
                                        Array.from({ length: itemsPerSlide - page.length }).map((_, i) => (
                                            <div
                                                key={`empty-${i}`}
                                                className="hidden md:block h-[146px] "
                                            />
                                        ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 flex items-center justify-center gap-3">
                        {pages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                className={`h-3 rounded-full transition-all duration-600 ${current === index
                                    ? "w-7 bg-[#2f4b92]"
                                    : "w-3 bg-[#b9d9ef]"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Partners;