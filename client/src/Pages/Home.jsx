import React from "react";
import { ArrowRight } from "lucide-react";
import Services from "./Services";
import SolarGallery from "./SolarGallery";
import AboutCompany from "./AboutCompany";
import ServicesSection from "./ServicesSection";
import ScrollingMarquee from "./ScrollingMarquee";
import ContactPage from './ContactPage'
import { Link } from "react-router-dom";

const Home = () => {
    return <>
<<<<<<< HEAD
        <section className="min-h-screen bg-[#00C2FF]/30 text-white flex items-center">
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 py-12">

                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    {/* LEFT SIDE */}
                    <div>
                        <h1 className="font-[Prompt] font-semibold text-4xl sm:text-5xl leading-tight text-[#000000]">
                            <span className="text-[#000000]">Switch to solar</span> in{" "}
                            <span className="text-[#FF8C00]">Maharashtra</span>,
                            <br />
                            at Zero Investment!
                        </h1>

                        <p className="mt-4 text-sm sm:text-base text-black max-w-lg">
                            Government subsidy covers your down payment, and monthly solar savings cover your EMIs.
                        </p>

                        {/* IMAGE CARD */}
                        <div className="mt-6 rounded-xl overflow-hidden relative">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1663091595941-65815fcfeb32?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=435" // 👉 put your image here
                                alt="solar"
                                className="w-full h-[400px] object-cover"
                            />

                            {/* <div className="absolute bottom-0 w-full bg-[#00AEEF] text-white text-center py-3 font-semibold text-lg">
                                Bharat ki #1 home solar company*
                            </div> */}
                        </div>
                    </div>


                    {/* RIGHT SIDE FORM */}
                    <div className="bg-white text-black rounded-2xl p-10 shadow-xl w-full max-w-lg mx-auto lg:mx-0">

                        <h2 className="font-[Prompt] font-semibold text-xl">
                            Book a FREE Solar Consultation
                        </h2>
                        <p className="text-sm text-gray-500 mb-6">
                            And save up to ₹78,000 with subsidy
                        </p>

                        <form className="space-y-5">

                            {/* INPUT */}
                            <div>
                                <label className="text-sm font-medium">Full name *</label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-1 outline-none focus:ring-2 focus:ring-[#00C2FF]/40 focus:border-[#00C2FF] transition"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">WhatsApp number *</label>
                                <input
                                    type="text"
                                    placeholder="Enter your number"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-1 outline-none focus:ring-2 focus:ring-[#00C2FF]/40 focus:border-[#00C2FF] transition"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Pin code *</label>
                                <input
                                    type="text"
                                    placeholder="Enter pin code"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-1 outline-none focus:ring-2 focus:ring-[#00C2FF]/40 focus:border-[#00C2FF] transition"
                                />
                            </div>

                            {/* BILL OPTIONS */}
                            <div>
                                <p className="text-sm font-medium mb-2">
                                    What is your average monthly bill? *
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Less than ₹1500",
                                        "₹1500 – ₹2500",
                                        "₹2500 – ₹4000",
                                        "₹4000 – ₹8000",
                                        "More than ₹8000",
                                    ].map((item, i) => (
                                        <button
                                            key={i}
                                            type="button"
                                            className="border border-gray-300 px-4 py-2 rounded-full text-sm hover:bg-[#00C2FF]/10 hover:border-[#00C2FF] transition"
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* CHECKBOX */}
                            <div className="flex items-start gap-2 text-xs text-gray-600">
                                <input type="checkbox" className="mt-1 accent-[#00C2FF]" />
                                <p>
                                    I agree to MaheetaSolar's{" "}
                                    <span className="underline cursor-pointer">terms of service</span> &{" "}
                                    <span className="underline cursor-pointer">privacy policy</span>
                                </p>
                            </div>

                            {/* BUTTON */}
                            <button className="w-full bg-[#0D1B5E] text-white py-3 rounded-full font-medium hover:scale-[1.02] transition">
                                Get a FREE Quote
                            </button>

                        </form>
                    </div>

=======
        <section className="relative min-h-screen bg-cover bg-center bg-fixed text-white flex items-center">
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-20 lg:mt-[290px]">
                    {/* Left Section */}
                    <div className="text-center lg:text-left">
                        <h1 className="font-[Prompt] font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight lg:leading-tight">
                            Solarva believes in <br />
                            <span className="text-[#C9F31D] font-[Prompt] text-4xl sm:text-5xl md:text-6xl font-semibold">
                                sustainable energy
                            </span>{" "}
                            <br />
                            practices
                        </h1>
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col space-y-6 text-white mt-4 lg:mt-0 lg:ms-[60px] xl:ms-[100px]">
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed font-[Prompt] font-light text-center lg:text-left">
                            Solar energy is the future of sustainable living. By harnessing the unlimited power of the sun, you can reduce electricity costs, increase property value, and contribute to a cleaner planet. Investing in solar is not just about saving money — it's about securing long-term energy independence.
                        </p>

                        {/* Button + Reviews */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                            <Link
                                to="/AboutUs"
                                className="flex items-center bg-white text-black px-6 py-3 sm:px-4 sm:py-2 rounded-full hover:scale-105 transition font-[Prompt] w-full sm:w-auto justify-center"
                            >
                                Explore Now
                                <ArrowRight className="ml-2 w-6 h-6 sm:w-8 sm:h-8 bg-[#C9F31D] text-black rounded-full p-1" />
                            </Link>

                            {/* Reviews */}
                            <div className="flex items-center space-x-3 w-full sm:w-auto justify-center lg:justify-start">
                                <div className="flex -space-x-2 sm:-space-x-3">
                                    <img
                                        src="https://randomuser.me/api/portraits/women/1.jpg"
                                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white"
                                        alt="user"
                                    />
                                    <img
                                        src="https://randomuser.me/api/portraits/men/2.jpg"
                                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white"
                                        alt="user"
                                    />
                                    <img
                                        src="https://randomuser.me/api/portraits/women/3.jpg"
                                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white"
                                        alt="user"
                                    />
                                    <img
                                        src="https://randomuser.me/api/portraits/men/4.jpg"
                                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white"
                                        alt="user"
                                    />
                                </div>
                                <div className="text-center sm:text-left">
                                    <p className="text-white text-xs sm:text-sm font-medium">
                                        100+ reviews
                                    </p>
                                    <p className="text-[#C9F31D] text-xs sm:text-sm font-semibold">4.96 of 5</p>
                                </div>
                            </div>
                        </div>
                    </div>
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                </div>
            </div>
        </section>
        <Services />
        <ScrollingMarquee />
<<<<<<< HEAD
        {/* <ServicesSection /> */}
=======
        <ServicesSection />
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
        <ContactPage />
    </>
};

<<<<<<< HEAD
export default Home;



=======
export default Home;
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
