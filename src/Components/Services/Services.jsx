import React, { useState } from 'react';
import { BsFillCalculatorFill, BsKey } from 'react-icons/bs';
import { HiArrowCircleRight } from 'react-icons/hi';
import { IoSearch } from 'react-icons/io5';
import { MdOutlineSecurity } from 'react-icons/md';
import { RiArrowRightUpLongFill } from 'react-icons/ri';
const Services = () => {
    const [active, setActive] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)
    return (
        <section>
            <div className='flex flex-col items-center '>
                <h1 className='text-4xl md:text-5xl text-secondary text-center font-semibold mb-3'>Featured Services</h1>
                <div className='w-12 h-1 bg-secondary mb-2'></div>
                <p className='px-6 text-center md:px-12 text-secondary text-md md:text-xl'>His needs result from something escape him indeed are consectetur will</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 px-12'>
                <div onMouseEnter={() => setActive(!active)}
                    onMouseLeave={() => setActive(!active)} class={`${active ? 'border-l-primary border-l-4 bg-gray-100 rounded-xl p-6  md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition  scale-105 border-opacity-30 border-primary group duration-1000 shadow-lg' : 'bg-gray-100 rounded-2xl p-6  md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg'}`}>
                    <div class="flex-1">
                        <div class="flex items-start gap-4">
                            <div class={`${active ? 'p-4 rounded-xl bg-primary text-white hidden sm:flex' : 'bg-green-100 p-4 rounded-xl text-primary hidden sm:flex'}`}>
                                <IoSearch size={40}></IoSearch>
                            </div>

                            <div>
                                <h2 class="text-xl md:text-2xl font-semibold text-secondary">
                                    Property Search
                                </h2>
                                <p class="mt-2 text-secondary max-w-md">
                                    Except they are blinded by desire, they do not prosper, they are at fault who abandon their duties, they soften the soul, that is, they are burdened by labor.
                                </p>
                                <div>
                                    <ul class="mt-5 space-y-3 text-secondary">
                                        <li class="flex items-center gap-2">
                                            <span class="text-primary">
                                                <HiArrowCircleRight size={25}></HiArrowCircleRight> </span> Comprehensive Listings
                                        </li>

                                        <li class="flex items-center gap-2">
                                            <span class="text-primary">
                                                <HiArrowCircleRight size={25}></HiArrowCircleRight></span> Advanced Filtering
                                        </li>
                                        <li class="flex items-center gap-2">
                                            <span class="text-primary">
                                                <HiArrowCircleRight size={25}></HiArrowCircleRight></span> Virtual Tours
                                        </li>
                                    </ul>

                                </div>
                                <div>
                                    <a href="#" class="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:border-b-2 border-b-primary ">
                                        Explore Now
                                        <span><RiArrowRightUpLongFill></RiArrowRightUpLongFill> </span>
                                    </a>
                                </div>
                            </div>
                            <div class="w-full md:w-[180px] h-[140px] rounded-xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&q=80"
                                    alt="Property"
                                    class="w-full h-full object-cover"
                                />
                            </div>

                        </div>
                    </div>


                </div>
                <div onMouseEnter={() => setActive2(!active2)}
                    onMouseLeave={() => setActive2(!active2)} class={`${active2 ? 'border-l-primary border-l-4 bg-gray-100 rounded-xl p-6  md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition  scale-105 border-opacity-30 border-primary group duration-1000 shadow-lg' : 'bg-gray-100 rounded-2xl p-6  md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg'}`}>
                    <div class="flex-1">
                        <div class="flex items-start gap-4">
                            <div class={`${active2 ? 'p-4 rounded-xl bg-primary text-white hidden sm:flex' : 'bg-green-100 p-4 rounded-xl text-primary hidden sm:flex'}`}>
                                <BsFillCalculatorFill size={40}></BsFillCalculatorFill>
                            </div>

                            <div>
                                <h2 class="text-xl md:text-2xl font-semibold text-accent">
                                    Property Valuation
                                </h2>
                                <p class="mt-2 text-secondary max-w-md">
                                    But so that you may see where all this error comes from, I will explain
                                    the whole matter, accusing pleasure and praising pain.
                                </p>
                                <div>
                                    <ul class="mt-5 space-y-3 text-secondary">
                                        <li class="flex items-center gap-2">
                                            <span class="text-primary">
                                                <HiArrowCircleRight size={25}></HiArrowCircleRight> </span> Market Analysis
                                        </li>

                                        <li class="flex items-center gap-2">
                                            <span class="text-primary">
                                                <HiArrowCircleRight size={25}></HiArrowCircleRight></span> Comparative Reports
                                        </li>
                                        <li class="flex items-center gap-2">
                                            <span class="text-primary">
                                                <HiArrowCircleRight size={25}></HiArrowCircleRight></span> Investment Insights
                                        </li>
                                    </ul>

                                </div>
                                <div>
                                    <a href="#" class="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:border-b-2 border-b-primary ">
                                        Get Valuation
                                        <span><RiArrowRightUpLongFill></RiArrowRightUpLongFill> </span>
                                    </a>
                                </div>
                            </div>
                            <div class="w-full md:w-[180px] h-[140px] rounded-xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Property"
                                    class="w-full h-full object-cover"
                                />
                            </div>

                        </div>
                    </div>


                </div>
                <div onMouseEnter={() => setActive3(!active3)}
                    onMouseLeave={() => setActive3(!active3)} class={`${active3 ? 'border-l-primary border-l-4 shadow-lg bg-gray-100 rounded-xl p-6  md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition  scale-105 border-opacity-30 border-primary group duration-1000' : 'bg-gray-100 rounded-2xl p-6  md:p-8 flex flex-col shadow-lg md:flex-row items-center justify-between gap-6'}`}>
                    <div class="flex-1">
                        <div class="flex items-start gap-4">
                            <div class={`${active3 ? 'p-4 rounded-xl bg-primary text-white hidden sm:flex' : 'bg-green-100 p-4 rounded-xl text-primary hidden sm:flex'}`}>
                                <BsKey size={40}></BsKey>
                            </div>

                            <div>
                                <h2 class="text-xl md:text-2xl font-semibold text-secondary">

                                    Property Rental
                                </h2>
                                <p class="mt-2 text-secondary max-w-md">
                                    But truly we both accuse and consider those most deserving of just hatred who, soothed by the flatteries of present pleasures and ...


                                </p>
                                <div>
                                    <ul class="mt-5 space-y-3 text-secondary">
                                        <li class="flex items-center gap-2">
                                            <span class="text-primary">
                                                <HiArrowCircleRight size={25}></HiArrowCircleRight> </span> Tenant Matching
                                        </li>

                                        <li class="flex items-center gap-2">
                                            <span class="text-primary">
                                                <HiArrowCircleRight size={25}></HiArrowCircleRight></span> Lease Managements
                                        </li>
                                        <li class="flex items-center gap-2">
                                            <span class="text-primary">
                                                <HiArrowCircleRight size={25}></HiArrowCircleRight></span> Property Maintenance
                                        </li>
                                    </ul>

                                </div>
                                <div>
                                    <a href="#" class="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:border-b-2 border-b-primary ">
                                        Start Renting
                                        <span><RiArrowRightUpLongFill></RiArrowRightUpLongFill> </span>
                                    </a>
                                </div>
                            </div>
                            <div class="w-full md:w-[180px] h-[140px] rounded-xl overflow-hidden">
                                <img
                                    src="https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Property"
                                    class="w-full h-full object-cover"
                                />
                            </div>

                        </div>
                    </div>


                </div>
                <div onMouseEnter={() => setActive4(!active4)}
                    onMouseLeave={() => setActive4(!active4)} class={`${active4 ? 'border-l-primary border-l-4 bg-gray-100 rounded-xl p-6  md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition  scale-105 border-opacity-30 shadow-lg border-primary group duration-1000' : 'bg-gray-100 shadow-lg rounded-2xl p-6  md:p-8 flex flex-col md:flex-row items-center justify-between gap-6'}`}>
                    <div class="flex-1">
                        <div class="flex items-start gap-4">
                            <div class={`${active4 ? ' p-4 rounded-xl bg-primary text-white hidden sm:flex' : 'bg-green-100 p-4 rounded-xl text-primary hidden sm:flex'}`}>
                                <MdOutlineSecurity size={40}></MdOutlineSecurity>
                            </div>

                            <div>
                                <h2 class="text-xl md:text-2xl font-semibold text-secondary">
                                    Investment Advisory
                                </h2>
                                <p class="mt-2 text-secondary max-w-md">
                                    For no one despises or hates or flees pleasure itself because it is pleasure, but because great pains follow them.
                                </p>
                                <div>
                                    <ul class="mt-5 space-y-3 text-secondary">
                                        <li class="flex items-center gap-2">
                                            <span class="text-primary">
                                                <HiArrowCircleRight size={25}></HiArrowCircleRight> </span> Portfolio Planning
                                        </li>

                                        <li class="flex items-center gap-2">
                                            <span class="text-primary">
                                                <HiArrowCircleRight size={25}></HiArrowCircleRight></span> Risk Assessment
                                        </li>
                                        <li class="flex items-center gap-2">
                                            <span class="text-primary">
                                                <HiArrowCircleRight size={25}></HiArrowCircleRight></span> Market Forecasting
                                        </li>
                                    </ul>

                                </div>
                                <div>
                                    <a href="#" class="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:border-b-2 border-b-primary ">
                                        Learn More
                                        <span><RiArrowRightUpLongFill></RiArrowRightUpLongFill> </span>
                                    </a>
                                </div>
                            </div>
                            <div class="w-full md:w-[180px] h-[140px] rounded-xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Property"
                                    class="w-full h-full object-cover"
                                />
                            </div>

                        </div>
                    </div>


                </div>

            </div>
        </section>
    );
};

export default Services;