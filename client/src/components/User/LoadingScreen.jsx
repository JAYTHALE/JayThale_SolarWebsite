import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const letters = ["L", "O", "A", "D", "I", "N", "G"];

const LoadingScreen = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(false), 3500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{
                        y: "-100%",
                        transition: {
                            duration: 1.5,
                            ease: "easeInOut"
                        }
                    }}
<<<<<<< HEAD
                    className="fixed inset-0 flex items-center justify-center bg-[#00C2FF] z-[9999] overflow-hidden"
                >
                    {/* Wave Shape at Exit */}
                    <motion.div
                        className="absolute bottom-0 left-0 w-full h-32 bg-[#00C2FF] z-30"
=======
                    className="fixed inset-0 flex items-center justify-center bg-[#C9F31D] z-[9999] overflow-hidden"
                >
                    {/* Wave Shape at Exit */}
                    <motion.div
                        className="absolute bottom-0 left-0 w-full h-32 bg-[#C9F31D] z-30"
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                        initial={{ y: 100, opacity: 0 }}
                        exit={{
                            y: -100,
                            opacity: 1,
                            transition: {
                                duration: 1.2,
                                ease: "easeOut",
                                delay: 0.3
                            }
                        }}
                        style={{
                            clipPath: 'path("M0,96 C150,96 200,32 350,32 C500,32 550,96 700,96 C850,96 900,32 1050,32 C1200,32 1250,96 1400,96 L1400,200 L0,200 Z")'
                        }}
                    />

                    {/* Multiple Wave Layers */}
                    <motion.div
<<<<<<< HEAD
                        className="absolute bottom-0 left-0 w-full h-40 bg-[#00C2FF] z-25"
=======
                        className="absolute bottom-0 left-0 w-full h-40 bg-[#C9F31D] z-25"
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                        initial={{ y: 120, opacity: 0 }}
                        exit={{
                            y: -120,
                            opacity: 0.7,
                            transition: {
                                duration: 1.4,
                                ease: "easeOut",
                                delay: 0.2
                            }
                        }}
                        style={{
                            clipPath: 'path("M0,128 C180,128 240,64 420,64 C600,64 660,128 840,128 C1020,128 1080,64 1260,64 C1440,64 1500,128 1680,128 L1680,200 L0,200 Z")'
                        }}
                    />

                    <motion.div
<<<<<<< HEAD
                        className="absolute bottom-0 left-0 w-full h-48 bg-[#00C2FF] z-20"
=======
                        className="absolute bottom-0 left-0 w-full h-48 bg-[#C9F31D] z-20"
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                        initial={{ y: 150, opacity: 0 }}
                        exit={{
                            y: -150,
                            opacity: 0.4,
                            transition: {
                                duration: 1.6,
                                ease: "easeOut",
                                delay: 0.1
                            }
                        }}
                        style={{
                            clipPath: 'path("M0,160 C200,160 280,96 480,96 C680,96 760,160 960,160 C1160,160 1240,96 1440,96 C1640,96 1720,160 1920,160 L1920,200 L0,200 Z")'
                        }}
                    />

                    {/* Main Content */}
                    <div className="relative z-10">
                        <div className="flex space-x-3 sm:space-x-4 text-7xl sm:text-8xl md:text-9xl font-bold text-black">
                            {letters.map((letter, i) => (
                                <motion.div
                                    key={i}
                                    className="relative"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3, delay: i * 0.1 }}
                                    exit={{
                                        opacity: 0,
                                        y: -50,
                                        scale: 1.1,
                                        transition: {
                                            duration: 0.5,
                                            delay: i * 0.06,
                                            ease: "backIn"
                                        }
                                    }}
                                >
                                    {/* Shape Container with Curtain Effect */}
                                    <motion.div
                                        className="relative overflow-hidden"
                                        initial={{ scale: 0.8, rotate: -10 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: i * 0.15,
                                            type: "spring",
                                            stiffness: 120
                                        }}
                                        exit={{
                                            scale: 1.3,
                                            rotate: 8,
                                            transition: {
                                                duration: 0.6,
                                                delay: i * 0.04
                                            }
                                        }}
                                    >
                                        {/* Curtain Effect - Slides down from top */}
                                        <motion.div
<<<<<<< HEAD
                                            className="absolute inset-0 bg-[#00C2FF] z-20"
=======
                                            className="absolute inset-0 bg-[#C9F31D] z-20"
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                                            initial={{ y: "-100%" }}
                                            animate={{ y: "100%" }}
                                            transition={{
                                                duration: 0.8,
                                                delay: i * 0.2,
                                                ease: "easeInOut"
                                            }}
                                        />

                                        {/* Letter */}
                                        <motion.span
                                            className="relative block"
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: i * 0.25,
                                                ease: "backOut"
                                            }}
                                            exit={{
                                                y: -40,
                                                opacity: 0,
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4,
                                                    delay: i * 0.05,
                                                    ease: "circOut"
                                                }
                                            }}
                                        >
                                            {letter}
                                        </motion.span>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Background Shapes with Wave Exit */}
                    <div className="absolute inset-0 pointer-events-none">
                        <motion.div
                            className="absolute top-1/4 left-1/4 w-24 h-24 border-4 border-black/10 rounded-full"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            exit={{
                                scale: 0,
                                opacity: 0,
                                y: -20,
                                transition: {
                                    duration: 0.5,
                                    delay: 0.1
                                }
                            }}
                        />
                        <motion.div
                            className="absolute bottom-1/3 right-1/4 w-20 h-20 border-4 border-black/10 rotate-45"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.7 }}
                            exit={{
                                scale: 0,
                                opacity: 0,
                                y: -30,
                                transition: {
                                    duration: 0.5,
                                    delay: 0.2
                                }
                            }}
                        />
                        <motion.div
                            className="absolute top-1/3 right-1/3 w-16 h-16 border-4 border-black/10 rounded-lg"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.9 }}
                            exit={{
                                scale: 0,
                                opacity: 0,
                                y: -25,
                                transition: {
                                    duration: 0.5,
                                    delay: 0.15
                                }
                            }}
                        />
                    </div>

                    {/* Additional Floating Elements with Wave Motion */}
                    <motion.div
                        className="absolute bottom-10 left-10 text-lg font-semibold text-black/60"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        exit={{
                            opacity: 0,
                            y: -10,
                            transition: {
                                duration: 0.4,
                                delay: 0.1
                            }
                        }}
                    >
                        Welcome to Solshine
                    </motion.div>
                    <motion.div
                        className="absolute bottom-10 right-10 text-lg font-semibold text-black/60"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                        exit={{
                            opacity: 0,
                            y: -10,
                            transition: {
                                duration: 0.4,
                                delay: 0.15
                            }
                        }}
                    >
                        Clean Energy
                    </motion.div>

                    {/* Floating Particles that follow wave */}
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-black/20 rounded-full"
                            initial={{
                                x: Math.random() * window.innerWidth,
                                y: window.innerHeight + 50,
                                opacity: 0
                            }}
                            animate={{
                                y: Math.random() * window.innerHeight,
                                opacity: 0.6
                            }}
                            exit={{
                                y: -100,
                                opacity: 0,
                                transition: {
                                    duration: 0.8,
                                    delay: i * 0.02,
                                    ease: "easeOut"
                                }
                            }}
                            transition={{
                                duration: 2,
                                delay: i * 0.1,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        />
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;