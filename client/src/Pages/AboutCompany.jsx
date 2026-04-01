import { ArrowRight, Zap, BadgeCheck } from "lucide-react";
import React from "react";
import { motion } from 'framer-motion';

const AboutCompany = () => {
    return (
        <section className="relative z-10 w-full bg-white py-16 px-4 sm:px-6 md:px-20 flex flex-col lg:flex-row justify-between items-center">

            {/* Left Content */}
            <div className="lg:w-1/2 space-y-4 lg:ms-[70px] w-full">
                <p className="text-sm font-semibold tracking-widest uppercase text-gray-800">
                    <span className="flex items-center mr-2 font-[Prompt] font-semibold tracking-widest">
                        <span className="text-lg"> <Zap className="w-6 h-6 sm:w-8 sm:h-8 p-1" /></span>About Company
                    </span>
                </p>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 leading-tight font-[Prompt]">
                    Innovative Solar Energy Solutions for Sustainable Living
                </h1>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
                    <div className="w-full lg:w-auto">
                        <div className="w-full lg:w-[250px]">
                            <p className="text-gray-500 leading-relaxed font-[Prompt] text-sm sm:text-[13px]">
                                Nulla vitae elit libero, a pharetra augue id elit non mi porta gravida at eget metus justo.
                                We craft tailored software solutions and strategic frameworks.
                            </p>
                        </div>
                        <div className="flex items-end space-x-4 pt-3">
                            <h2 className="text-6xl sm:text-8xl md:text-[220px] leading-none font-medium text-black font-[Prompt]">15</h2>
                        </div>
                        <p className="text-black text-sm max-w-xs font-[Prompt]">
                            We helped to get companies with <br /> <span className="font-semibold font-[Prompt]">$15M+</span> funding
                        </p>
                    </div>
                    <div className="lg:w-1/2 lg:mt-0 relative flex flex-col items-center w-full mt-8">
                        <motion.img
                            src="https://plus.unsplash.com/premium_photo-1663091595941-65815fcfeb32?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=435"
                            alt="Solar panel workers"
                            className="rounded-2xl shadow-lg h-64 sm:h-80 md:h-90 w-full sm:w-64 md:w-70 object-cover cursor-pointer"
                            whileHover={{
                                scale: 1.09,
                                transition: {
                                    duration: 0.3,
                                    ease: "easeOut"
                                }
                            }}
                            whileTap={{ scale: 0.95 }}
                        />
                        <motion.div
<<<<<<< HEAD
                            className="absolute -bottom-6 -right-6 sm:bottom-[50px] sm:right-[200px] bg-[#00C2FF] text-black font-semibold text-xs sm:text-sm uppercase rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center text-center"
=======
                            className="absolute -bottom-6 -right-6 sm:bottom-[50px] sm:right-[200px] bg-[#C9F31D] text-black font-semibold text-xs sm:text-sm uppercase rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center text-center"
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            whileHover={{
                                scale: 1.1,
                                rotate: 0,
                                transition: { duration: 0.3 }
                            }}
                        >
                            {/* Circular Text */}
                            <div className="relative w-full h-full">
                                <svg
                                    className="absolute inset-0 w-full h-full"
                                    viewBox="0 0 100 100"
                                >
                                    {/* Circular path for text */}
                                    <path
                                        id="circlePath"
                                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                        fill="none"
                                    />

                                    {/* Animated text along the path */}
                                    <text className="fill-black text-xs font-bold">
                                        <textPath
                                            href="#circlePath"
                                            startOffset="0%"
                                            className="text-[6px] sm:text-[8px] md:text-[9px] font-bold uppercase tracking-wider"
                                        >
                                            • About Us • About Us • About Us • About Us
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Right Content */}
            <div className="mt-12 lg:mt-0 relative lg:me-[200px] w-full lg:w-auto">
                {/* Right Info Card */}
                <div className="lg:translate-x-24 rounded-2xl p-6 w-full sm:w-80 lg:w-64 bg-white ">
                    <h3 className="font-medium text-lg mb-4 text-gray-900 font-[Prompt]">
                        Comprehensive Solar Energy Solutions
                    </h3>
                    <ul className="space-y-2 text-sm sm:text-[12px] text-black">
                        <li className="flex gap-2 items-center"><BadgeCheck className="h-4 w-4 sm:h-5 sm:w-5 text-[#07fc07]" />Solar Inverter Setup</li>
                        <li className="flex gap-2 items-center"><BadgeCheck className="h-4 w-4 sm:h-5 sm:w-5 text-[#07fc07]" />Battery Storage Solutions</li>
                        <li className="flex gap-2 items-center"><BadgeCheck className="h-4 w-4 sm:h-5 sm:w-5 text-[#07fc07]" />Solar Material Financing</li>
                        <li className="flex gap-2 items-center"><BadgeCheck className="h-4 w-4 sm:h-5 sm:w-5 text-[#07fc07]" />Proven Track Record</li>
                        <li className="flex gap-2 items-center"><BadgeCheck className="h-4 w-4 sm:h-5 sm:w-5 text-[#07fc07]" />Customer-Centric Approach</li>
                        <li className="flex gap-2 items-center"><BadgeCheck className="h-4 w-4 sm:h-5 sm:w-5 text-[#07fc07]" />24 X 7 Call & Chat Support</li>
                    </ul>
<<<<<<< HEAD
                    {/* <button className="flex items-center bg-[#C9F31D] text-black px-7 py-2 mt-7 rounded-full hover:scale-105 transition font-[Prompt] w-full sm:w-auto justify-center">
                        About More
                        <ArrowRight className="ml-2 w-5 h-5 sm:w-7 sm:h-7 bg-white text-black rounded-full p-1" />
                    </button> */}
=======
                    <button className="flex items-center bg-[#C9F31D] text-black px-7 py-2 mt-7 rounded-full hover:scale-105 transition font-[Prompt] w-full sm:w-auto justify-center">
                        About More
                        <ArrowRight className="ml-2 w-5 h-5 sm:w-7 sm:h-7 bg-white text-black rounded-full p-1" />
                    </button>
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                </div>
            </div>

        </section>
    );
};

export default AboutCompany;
