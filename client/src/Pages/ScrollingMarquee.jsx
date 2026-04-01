import React from 'react';

const ScrollingMarquee = () => {
    return (
        <div className="w-full bg-white py-6 overflow-hidden relative z-10">
            {/* Green Text Scrolling Left */}
<<<<<<< HEAD
            <div className="relative bg-[#00C2FF]/30 py-4">
=======
            <div className="relative bg-[#C9F31D] py-4">
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                <div className="flex overflow-hidden">
                    <div className="animate-marquee-left whitespace-nowrap flex">
                        {[...Array(6)].map((_, i) => (
                            <span
                                key={i}
                                className="text-black text-lg md:text-xl font-medium font-[Prompt] mx-8 flex-shrink-0"
                            >
                                Far Innovation • Renewable Energy • Eco-Friendly Power •
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Black Text Scrolling Right */}
            <div className="relative mt-2 bg-black py-4">
                <div className="flex overflow-hidden">
                    <div className="animate-marquee-right whitespace-nowrap flex">
                        {[...Array(6)].map((_, i) => (
                            <span
                                key={i}
                                className="text-white text-lg md:text-xl font-medium font-[Prompt] mx-8 flex-shrink-0"
                            >
                                Clean Energy • Solar Solutions • Sun Energy • Bright Tomorrow • Sun-Powered Savings •
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Add CSS styles */}
            <style jsx>{`
                @keyframes marquee-left {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }

                @keyframes marquee-right {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(0%);
                    }
                }

                .animate-marquee-left {
                    animation: marquee-left 90s linear infinite;
                }

                .animate-marquee-right {
                    animation: marquee-right 90s linear infinite;
                }

                /* Optional: Pause on hover */
                .animate-marquee-left:hover,
                .animate-marquee-right:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};

export default ScrollingMarquee;