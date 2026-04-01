import { ArrowRight, Zap } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import solarIcon1 from "../assets/solar-icon-01.png";
import solarIcon3 from "../assets/solar-icon-03.png";
import solarIcon5 from "../assets/solar-icon-05.png";
import solarIcon6 from "../assets/solar-icon-06.png";
import solarIcon7 from "../assets/solar-icon-07.png";
import solarIcon8 from "../assets/solar-icon-08.png";

const services = [
    {
        icon: solarIcon1,
        title: "Solar Panel Cleaning Services",
        desc: "Ultricies gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Aliquet porttitor lacus luctus accumsan tortor.",
    },
    {
        icon: solarIcon3,
        title: "Off-Grid Solar Panel Installation",
        desc: "Ultricies gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Aliquet porttitor lacus luctus accumsan tortor.",
    },
    {
        icon: solarIcon5,
        title: "Solar Inverter Repair Services",
        desc: "Ultricies gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Aliquet porttitor lacus luctus accumsan tortor.",
    },
    {
        icon: solarIcon6,
        title: "Solar System Maintenance",
        desc: "Ultricies gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Aliquet porttitor lacus luctus accumsan tortor.",
    },
    {
        icon: solarIcon7,
        title: "Wind Turbine Repair Services",
        desc: "Ultricies gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Aliquet porttitor lacus luctus accumsan tortor.",
    },
    {
        icon: solarIcon8,
        title: "Rooftop Solar Panel Installation",
        desc: "Ultricies gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Aliquet porttitor lacus luctus accumsan tortor.",
    },
];

const ServicesSection = () => {
    return (
        <section className="w-full bg-white py-8 sm:py-16 md:py-20 px-4 sm:px-6 md:px-20 text-center relative z-10">
            {/* Header */}
            <div className="mb-4">
                <p className="font-[Prompt] flex items-center justify-center text-sm font-semibold uppercase tracking-wider text-black">
                    <span className="text-lg">
                        <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 p-1 sm:p-2" />
                    </span>
                    Excellent Services
                </p>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-8 sm:mb-10 md:mb-12 font-medium font-[Prompt] leading-tight">
                10+ years of experience in the <br className="hidden sm:block" /> solar industry
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="border border-gray-200 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl transition-all bg-white p-4 sm:p-6 md:p-8 flex flex-col items-start text-left h-full cursor-pointer relative overflow-hidden"
                        whileHover={{
                            scale: 1.05,
                            y: -12,
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                                duration: 0.4
                            }
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {/* Optional hover background effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-[#C9F31D]/5 to-transparent opacity-0"
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />

                        <img
                            src={service.icon}
                            alt={service.title}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 mb-4 sm:mb-5 md:mb-6 relative z-10"
                        />
                        <h3 className="text-lg sm:text-xl md:text-2xl text-gray-900 mb-2 sm:mb-3 font-medium font-[Prompt] leading-tight relative z-10">
                            {service.title}
                        </h3>
                        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 md:mb-6 flex-grow relative z-10">
                            {service.desc}
                        </p>
                        <motion.button
                            className="mt-auto text-gray-900 relative z-10"
                            whileHover={{
                                x: 8,
                                scale: 1.1,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <ArrowRight className="w-8 h-8 sm:w-8 sm:h-8 md:w-8 md:h-8 bg-gray-100 hover:bg-[#C9F31D] text-black rounded-full p-1 transition-colors" />
                        </motion.button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;