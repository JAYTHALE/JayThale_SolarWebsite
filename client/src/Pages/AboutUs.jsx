import React from 'react';
import { Zap, Handshake, ArrowRight, Info, Box, RefreshCcw, Clock } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ value, duration = 2 }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <motion.span
            ref={ref}
            className="text-4xl md:text-5xl font-medium font-[Prompt]"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
            {inView && (
                <motion.span
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <CountUp value={value} duration={duration} />
                </motion.span>
            )}
        </motion.span>
    );
};

const CountUp = ({ value, duration }) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        let start = 0;
        const end = value;
        const incrementTime = (duration * 1000) / end;
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, incrementTime);
        return () => clearInterval(timer);
    }, [value, duration]);

    return <span>{count.toLocaleString()}+</span>;
};

const GreenTechSection = () => {
    return (
        <div className='relative z-10'>
            {/* About Us Header */}
<<<<<<< HEAD
            <section className="w-full  bg-[#00C2FF]/30 py-10">
                <div className="max-w-6xl mx-auto  sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 font-[Prompt]">
                            About Us
                        </h1>
                        {/* <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                            <span className='font-[Prompt]'>Home</span>
                            <span className="text-gray-400">|</span>
                            <span className="text-gray-900 font-medium font-[Prompt]">About Us</span>
                        </div> */}
=======
            <section className="w-full bg-[#C9F31D] py-6">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 font-[Prompt]">
                            About Us
                        </h1>
                        <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                            <span className='font-[Prompt]'>Home</span>
                            <span className="text-gray-400">|</span>
                            <span className="text-gray-900 font-medium font-[Prompt]">About Us</span>
                        </div>
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                    </div>
                </div>
            </section>

            {/* About Company Section */}
            <div className="flex flex-col md:flex-row items-center justify-between bg-white px-6 md:px-16 py-12 space-y-8 md:space-y-0 md:space-x-8">
                {/* Left Image */}
                <div className="w-full md:w-1/2 lg:w-1/3">
                    <img
                        src="https://solshine.powersquall.com/wp-content/uploads/elementor/thumbs/about-page-img-r6ytia7d0q3ad0k71ulwd1kjnq5mqioyqbjxhhcdz4.jpg"
                        alt="Green Technology"
                        className="rounded-2xl shadow-md w-full h-auto object-cover"
                    />
                </div>

                {/* Right Content */}
                <div className="w-full md:w-1/2 lg:w-2/3">
                    <div className="flex items-center mb-3">
                        <Zap className="w-8 h-8 p-1" />
                        <span className="uppercase text-black text-sm tracking-wider font-[Prompt] font-semibold">
                            About Our Company
                        </span>
                    </div>

                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-[Prompt] font-semibold text-gray-900 leading-tight mb-5">
                        Innovations Technology <br />
                        and Environmental Solutions
                    </h2>

                    <p className="text-gray-500 leading-relaxed mb-6 text-sm md:text-base">
                        Our mission is to harness the power of the sun to reduce carbon emissions and promote clean energy for all.
                        With cutting-edge technology and expert engineering, we help homes and businesses move toward a greener future.
                    </p>

                    <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3">
<<<<<<< HEAD
                            <FaCheckCircle className="text-[#00C2FF]" />
=======
                            <FaCheckCircle className="text-[#94C11F]" />
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                            <span className="text-gray-800 text-sm md:text-base">
                                Protects sensitive data during online
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
<<<<<<< HEAD
                            <FaCheckCircle className=" text-[#00C2FF]" />
=======
                            <FaCheckCircle className="text-[#94C11F]" />
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                            <span className="text-gray-800 text-sm md:text-base">
                                Securely store manage payment cards
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6">
<<<<<<< HEAD
                        {/* <button className="flex items-center bg-[#C9F31D] text-black px-6 py-3 sm:px-4 sm:py-2 rounded-full hover:scale-105 transition font-[Prompt] w-full sm:w-auto justify-center">
                            Explore Now
                            <ArrowRight className="ml-2 w-6 h-6 sm:w-8 sm:h-8 bg-white text-black rounded-full p-1" />
                        </button> */}
=======
                        <button className="flex items-center bg-[#C9F31D] text-black px-6 py-3 sm:px-4 sm:py-2 rounded-full hover:scale-105 transition font-[Prompt] w-full sm:w-auto justify-center">
                            Explore Now
                            <ArrowRight className="ml-2 w-6 h-6 sm:w-8 sm:h-8 bg-white text-black rounded-full p-1" />
                        </button>
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567

                        <div className="flex items-center gap-3 text-left">
                            <Handshake className="w-9 h-9 p-1" />
                            <div>
                                <p className="font-medium text-gray-800 text-sm md:text-base">2025 The world's best</p>
                                <p className="text-xs md:text-sm text-gray-500">business consulting</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Experience Stats Section */}
            <section className="mx-auto py-16 relative z-10 bg-white px-6 md:px-24">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                    <div className="flex-1">
                        <p className="text-sm font-semibold text-black flex items-center">
                            <Zap className="w-8 h-8 p-1" />
                            ABOUT OUR COMPANY
                        </p>
                        <h1 className="mt-6 text-3xl md:text-5xl font-medium font-[Prompt] tracking-tight leading-tight">
                            10+ years of experience
                            <br />
                            in the solar industry
                        </h1>
                    </div>

                    <p className="text-gray-500 max-w-lg text-sm md:text-base mt-10">
                        The company has over 10 years of rich experience in the solar energy sector.
                        During this period, it has successfully executed numerous large-scale projects.
                        The company is committed to driving sustainable growth through innovative renewable energy solutions.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
                    <div>
                        <div className="border-b border-gray-200 pb-4">
                            <p className="text-xs font-medium font-[Prompt] text-gray-500 uppercase">Commercial Projects</p>
                        </div>
                        <div className="mt-6">
                            <AnimatedCounter value={1000} duration={3} />
                            <p className="mt-5 text-sm text-gray-400">High-quality commercial solar projects executed with excellence.</p>
                        </div>
                    </div>

                    <div>
                        <div className="border-b border-gray-200 pb-4">
                            <p className="text-xs font-medium font-[Prompt] text-gray-500 uppercase">Residential Projects</p>
                        </div>
                        <div className="mt-6">
                            <AnimatedCounter value={445} duration={2} />
                            <p className="mt-5 text-sm text-gray-400">Efficient and reliable solar solutions for homes.</p>
                        </div>
                    </div>

                    <div>
                        <div className="border-b border-gray-200 pb-4">
                            <p className="text-xs font-medium font-[Prompt] text-gray-500 uppercase">Industry Experience</p>
                        </div>
                        <div className="mt-6">
                            <AnimatedCounter value={10} duration={1.5} />
                            <p className="mt-5 text-sm text-gray-400">Over a decade of trusted solar industry experience.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
<<<<<<< HEAD
            <section className="bg-[#00C2FF]/30 flex flex-col items-center justify-center text-center px-6 md:px-24 py-12">
=======
            <section className="bg-[#C9F31D] flex flex-col items-center justify-center text-center px-6 md:px-24 py-12">
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                <h3 className="text-sm uppercase tracking-widest text-black mb-2 font-[Prompt] font-semibold">Why Choose</h3>
                <h1 className="text-2xl md:text-4xl font-[Prompt] font-semibold text-black mb-10">
                    We’re Your First Choice for <br className="hidden md:block" /> Solar Energy Services
                </h1>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="grid sm:grid-cols-2 gap-10 max-w-3xl">
                        {/* Left Column */}
                        <div className="space-y-12">
                            <div className="flex flex-col items-start text-left">
                                <div className="bg-black text-white rounded-full p-3 mb-4">
                                    <RefreshCcw size={28} />
                                </div>
                                <h2 className="font-[Prompt] font-semibold text-lg mb-2">Trusted & Friendly</h2>
                                <p className="text-sm text-black/80 font-[Prompt]">
                                    Soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
                                </p>
                            </div>

                            <div className="flex flex-col items-start text-left">
                                <div className="bg-black text-white rounded-full p-3 mb-4">
                                    <Box size={28} />
                                </div>
                                <h2 className="font-[Prompt] font-semibold text-lg mb-2">Availability</h2>
                                <p className="text-sm text-black/80 font-[Prompt]">
                                    Soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
                                </p>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-12">
                            <div className="flex flex-col items-start text-left">
                                <div className="bg-black text-white rounded-full p-3 mb-4">
                                    <Info size={28} />
                                </div>
                                <h2 className="font-[Prompt] font-semibold text-lg mb-2">Veteran Owned</h2>
                                <p className="text-sm text-black/80 font-[Prompt]">
                                    Soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
                                </p>
                            </div>

                            <div className="flex flex-col items-start text-left">
                                <div className="bg-black text-white rounded-full p-3 mb-4">
                                    <Clock size={28} />
                                </div>
                                <h2 className="font-[Prompt] font-semibold text-lg mb-2">24/7 Support</h2>
                                <p className="text-sm text-black/80 font-[Prompt]">
                                    Soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src="https://solshine.powersquall.com/wp-content/uploads/2025/06/panel-with-man.png"
                            alt="Solar Panel"
                            className="w-72 md:w-96 rounded-xl object-contain"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GreenTechSection;
