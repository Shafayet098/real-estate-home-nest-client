import { AiOutlineHome } from "react-icons/ai";
import { BsShieldFillCheck } from "react-icons/bs";
import { FaRegCircleCheck } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";
import { LiaAwardSolid } from "react-icons/lia";
import { PiCheckCircleFill, PiClockCountdownLight, PiHeadsetBold } from "react-icons/pi";
import { RxPeople } from "react-icons/rx";


const ChooseUs = () => {

    return (
        <div>
            <div className='flex flex-col items-center mb-8'>
                <h1 className='text-4xl md:text-5xl text-secondary text-center font-semibold mb-3'>Why Us</h1>
                <div className='w-12 h-1 bg-secondary mb-2'></div>
                <p className='px-8 text-secondary text-md md:text-xl text-center'>His needs result from something escape him indeed are consectetur will</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 px-12 mt-6 gap-4">
                <div className="p-2">
                    <div>
                        <h1 className="text-3xl md:text-4xl text-secondary">Why Choose Premier Real Estate Partners?</h1>
                        <p className="text-md md:text-lg mt-4 text-secondary">With over two decades of experience in the real estate market, we've built our reputation on trust, expertise, and exceptional results. Our dedicated team of local experts understands the nuances of every neighborhood and market trend.</p>
                    </div>
                    <div className="flex flex-col gap-4 ">
                        <div className="flex gap-6 mt-6 border-b-2 pb-2 border-slate-200">
                            <div className="bg-primary rounded-full w-20 md:w-18 h-13  text-white flex items-center justify-center">
                                <PiCheckCircleFill size={30}></PiCheckCircleFill>
                            </div>
                            <div>
                                <h1 className="text-secondary  text-2xl">Local Market Expertise</h1>
                                <p className="text-md md:text-lg text-accent ">Deep knowledge of neighborhoods, pricing trends, and market conditions in your area.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 mt-6 pb-2 border-slate-200 border-b-2">
                            <div className="bg-primary rounded-full w-20 md:w-18 h-13 text-white flex items-center justify-center">
                                <BsShieldFillCheck size={30}></BsShieldFillCheck >
                            </div>
                            <div>
                                <h1 className="text-secondary text-2xl">Verified Listings Only</h1>
                                <p className="text-md md:text-lg text-accent">Every property is thoroughly vetted and verified before listing to ensure accuracy and quality.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 mt-6 pb-2 border-slate-200 border-b-2">
                            <div className="bg-primary rounded-full w-20 md:w-18 h-13 text-white flex items-center justify-center">
                                <PiHeadsetBold size={30}></PiHeadsetBold >
                            </div>
                            <div>
                                <h1 className="text-secondary text-2xl">24/7 Client Support</h1>
                                <p className="text-md md:text-lg text-accent">Our dedicated support team is available around the clock to assist with your real estate needs.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 mt-6 pb-2 border-slate-200 border-b-2">
                            <div className="bg-primary rounded-full w-20 h-13 text-white flex items-center justify-center">
                                <GiProgression size={36}>
                                </GiProgression >
                            </div>
                            <div>
                                <h1 className="text-secondary text-2xl">Proven Track Record</h1>
                                <p className="text-md md:text-lg text-accent">Consistently delivering results with over 2,500 successful transactions and 98% client satisfaction.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card Section */}
                <div className="grid grid-cols-2 gap-6">
                    <div className="card bg-white shadow-md hover:shadow-xl transition duration-300
                       hover:-translate-y-2  h-fit p-0 md:p-6 ">
                        <div className="card-body items-center text-center space-y-3">
                            <div className="text-secondary">
                                <AiOutlineHome size={54}></AiOutlineHome>
                            </div>
                            <h2 className="text-4xl font-bold text-secondary">2500+</h2>

                            <h3 className="text-lg font-semibold text-secondary">
                                Homes Sold
                            </h3>
                            <p className="text-sm text-accent ">
                                Successfully closed transactions across all property types and price ranges.
                            </p>
                        </div>
                    </div>
                    <div className="card bg-white shadow-md hover:shadow-xl transition duration-300
                       hover:-translate-y-2  h-fit p-4 md:p-6 ">
                        <div className="card-body items-center text-center space-y-3">
                            <div className="text-secondary">
                               <RxPeople size={54}></RxPeople> 
                            </div>
                            <h2 className="text-4xl font-bold text-secondary">98%</h2>

                            <h3 className="text-lg font-semibold text-secondary">
                                Client Satisfaction
                            </h3>
                            <p className="text-sm text-accent ">
                                Exceptional services and  quality rated by our satisfied homeowners, shareholders and investors.
                            </p>
                        </div>
                    </div>
                    <div className="card bg-white shadow-md hover:shadow-xl transition duration-300
                       hover:-translate-y-2  h-fit p-4 md:p-6 ">
                        <div className="card-body items-center text-center space-y-3">
                            <div className="text-secondary">
                               <PiClockCountdownLight size={54}></PiClockCountdownLight>
                            </div>
                            <h2 className="text-4xl font-bold text-secondary">25+</h2>

                            <h3 className="text-lg font-semibold text-secondary">
                                Years Experience
                            </h3>
                            <p className="text-sm text-accent ">
                                Two decades of expertise in multiple areas and navigating changing market conditions successfully.
                            </p>
                        </div>
                    </div>
                    <div className="card bg-white shadow-md hover:shadow-xl transition duration-300
                       hover:-translate-y-2  h-fit p-4 md:p-6 ">
                        <div className="card-body items-center text-center space-y-3">
                            <div className="text-secondary">
                                <LiaAwardSolid size={54}></LiaAwardSolid>
                            </div>
                            <h2 className="text-4xl font-bold text-secondary">45+</h2>

                            <h3 className="text-lg font-semibold text-secondary">
                                Industry Awards
                            </h3>
                            <p className="text-sm text-accent ">
                                Recognition in multiple times for excellence in real estate continuous services and client satisfaction.
                            </p>
                        </div>
                    </div>
                    

                </div>

            </div>
        </div>
    );
};

export default ChooseUs;