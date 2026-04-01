import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sun, BatteryCharging, Zap, ArrowRight } from "lucide-react";
import solarIcon from "../assets/solar-icon-01.png";
import batteryIcon from "../assets/solar-icon-02.png";
import energyIcon from "../assets/solar-icon-03.png";
import SolarGallery from "./SolarGallery";
import AboutCompany from "./AboutCompany";

const Services = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return <>
        <section
            ref={ref}
<<<<<<< HEAD
            className="bg-white text-black py-20 px-6 md:px-16 lg:px-24 relative z-10"
=======
            className="bg-[#C9F31D] text-black py-20 px-6 md:px-16 lg:px-24 relative z-10"
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
        >
            <div className="grid md:grid-cols-2 gap-12 items-center ">
                {/* Left Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <p className="flex items-center text-sm font-semibold tracking-wide uppercase mb-4">
                        <span className="flex items-center mr-2 font-[Prompt] font-semibold tracking-widest">
                            <span className="text-lg"> <Zap className="w-8 h-8 p-1" /></span> Excellent  SERVICES
                        </span>
                    </p>

                    <h1 className="text-4xl md:text-5xl font-medium font-[Prompt] leading-snug mb-8 text-gray-900">
                        <span className="block text-black">Innovations in</span>
                        <span className="block text-black">Green Technology</span>
                        <span className="block text-black">and Environmental Solutions</span>
                    </h1>

<<<<<<< HEAD
                    {/* <motion.button
=======
                    <motion.button
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                        className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center space-x-2 hover:bg-black hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <span>Get Started Now</span>
                        <span className="bg-black text-white rounded-full p-1.5 hover:bg-white hover:text-black transition">
                            <ArrowRight />
                        </span>
<<<<<<< HEAD
                    </motion.button> */}
=======
                    </motion.button>
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                </motion.div>

                {/* Right Section */}
                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                >
                    {/* ---- Item 1 ---- */}
                    <motion.div
                        className="flex items-start space-x-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <img
                            src={solarIcon}
                            alt="Five Year Warranty"
                            className="w-15 h-15 object-contain"
                        />
                        <div>
                            <h3 className="font-medium text-xl font-[Prompt] text-black">
                                Five Year Warranty
                            </h3>
                            <p className="text-lg text-gray-700 mt-2 leading-relaxed">
                                The officia deserunt mollit anim id est laborum. Suspe ndisse
                                suscipit sagittis leo sitea Consectetur elit. Nulla vitae elit
                                libero, a pharetra.
                            </p>
                        </div>
                    </motion.div>

                    <motion.hr
                        className="border-black/10"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    />

                    {/* ---- Item 2 ---- */}
                    <motion.div
                        className="flex items-start space-x-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <img
                            src={batteryIcon}
                            alt="Parts and Maintenance"
                            className="w-15 h-15 object-contain"
                        />
                        <div>
                            <h3 className="font-medium text-xl font-[Prompt] text-black">
                                Parts and Maintenance
                            </h3>
                            <p className="text-lg text-gray-700 mt-2 leading-relaxed">
                                The officia deserunt mollit anim id est laborum. Suspe ndisse
                                suscipit sagittis leo sitea Consectetur elit. Nulla vitae elit
                                libero, a pharetra.
                            </p>
                        </div>
                    </motion.div>

                    <motion.hr
                        className="border-black/10"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    />

                    {/* ---- Item 3 ---- */}
                    <motion.div
                        className="flex items-start space-x-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <img
                            src={energyIcon}
                            alt="Sustainable Energy"
                            className="w-15 h-15 object-contain"
                        />
                        <div>
                            <h3 className="font-medium text-xl font-[Prompt] text-black">
                                Sustainable Energy
                            </h3>
                            <p className="text-lg text-gray-700 mt-2 leading-relaxed">
                                The officia deserunt mollit anim id est laborum. Suspe ndisse
                                suscipit sagittis leo sitea Consectetur elit. Nulla vitae elit
                                libero, a pharetra.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
        <SolarGallery />
        <AboutCompany />
    </>
}

export default Services;