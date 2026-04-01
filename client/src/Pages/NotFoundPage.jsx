import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-[#C9F31D] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating circles */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-20 h-20 bg-black/10 rounded-full"
                    animate={{
                        y: [0, -30, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute top-3/4 right-1/4 w-16 h-16 bg-black/10 rounded-full"
                    animate={{
                        y: [0, 20, 0],
                        scale: [1, 0.9, 1],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-black/10 rounded-full"
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            {/* Main Content */}
            <div className="text-center relative z-10">
                {/* Animated 404 Number */}
                <motion.div
                    className="mb-8"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        duration: 1
                    }}
                >
                    <h1 className="text-9xl sm:text-[12rem] md:text-[15rem] font-black text-black leading-none">
                        404
                    </h1>
                </motion.div>

                {/* Animated Title */}
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    Page Not Found
                </motion.h2>

                {/* Animated Description */}
                <motion.p
                    className="text-lg sm:text-xl text-black/80 mb-12 max-w-md mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    Oops! The page you're looking for seems to have vanished into the digital void.
                </motion.p>

                {/* Animated Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                >
                    <motion.button
                        className="bg-black text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:bg-gray-900 transition-colors shadow-lg"
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Home size={20} />
                        Back to Home
                    </motion.button>

                    <motion.button
                        className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:bg-black hover:text-white transition-colors"
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Search size={20} />
                        Search Site
                    </motion.button>
                </motion.div>

                {/* Animated Decorative Elements */}
                <motion.div
                    className="mt-16 flex justify-center space-x-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 1 }}
                >
                    {[1, 2, 3].map((item) => (
                        <motion.div
                            key={item}
                            className="w-3 h-3 bg-black rounded-full"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: item * 0.3,
                            }}
                        />
                    ))}
                </motion.div>
            </div>

            {/* Corner Decorations */}
            <motion.div
                className="absolute top-8 left-8 text-black text-sm font-medium opacity-60"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 0.6, x: 0 }}
                transition={{ delay: 1.6 }}
            >
                ERROR 404
            </motion.div>

            <motion.div
                className="absolute bottom-8 right-8 text-black text-sm font-medium opacity-60"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 0.6, x: 0 }}
                transition={{ delay: 1.6 }}
            >
                NOT FOUND
            </motion.div>
        </div>
    );
};

export default NotFoundPage;

