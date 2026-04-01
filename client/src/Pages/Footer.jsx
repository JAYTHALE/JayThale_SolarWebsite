import React from "react";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Dribbble } from "lucide-react";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer className="bg-black text-white px-8 md:px-16 py-15 relative z-[9000]">
            {/* Footer Main Section */}
<<<<<<< HEAD
            <div className="grid md:grid-cols-3 gap-12 border-b border-gray-700 pb-10 mb-8">
=======
            <div className="grid md:grid-cols-4 gap-12 border-b border-gray-700 pb-10 mb-8">
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                {/* About */}
                <div>
                    <h3 className="font-medium  text-2xl mb-4 font-[Prompt]">About Solshine</h3>
                    <p className="text-sm text-gray-400 mb-4 font-[Prompt]">
<<<<<<< HEAD
                        <span className="text-[#00C2FF]">Maheeta Enterprises</span> is a leading company in the solar energy sector, dedicated to providing efficient and sustainable power solutions.
                    </p>
                    <div className="flex space-x-8 text-gray-400 ">
                        <Facebook size={18} className="hover:text-[#00C2FF] cursor-pointer" />
                        <Twitter size={18} className="hover:text-[#00C2FF] cursor-pointer" />
                        <Linkedin size={18} className="hover:text-[#00C2FF] cursor-pointer" />
                        <Instagram size={18} className="hover:text-[#00C2FF] cursor-pointer" />
                        <Dribbble size={18} className="hover:text-[#00C2FF] cursor-pointer" />
=======
                        <span className="text-[#C9F31D]">NewRa Grids</span> is a leading company in the solar energy sector, dedicated to providing efficient and sustainable power solutions.
                    </p>
                    <div className="flex space-x-8 text-gray-400 ">
                        <Facebook size={18} className="hover:text-[#C9F31D] cursor-pointer" />
                        <Twitter size={18} className="hover:text-[#C9F31D] cursor-pointer" />
                        <Linkedin size={18} className="hover:text-[#C9F31D] cursor-pointer" />
                        <Instagram size={18} className="hover:text-[#C9F31D] cursor-pointer" />
                        <Dribbble size={18} className="hover:text-[#C9F31D] cursor-pointer" />
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                    </div>
                </div>

                {/* Useful Links */}
                <div>
                    <h3 className="font-medium text-2xl mb-4 font-[Prompt]">Useful Links</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>
                            <Link
                                to="/AboutUs"
<<<<<<< HEAD
                                className="hover:text-[#00C2FF] transition-colors duration-200"
=======
                                className="hover:text-[#C9F31D] transition-colors duration-200"
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services"
<<<<<<< HEAD
                                className="hover:text-[#00C2FF] transition-colors duration-200"
=======
                                className="hover:text-[#C9F31D] transition-colors duration-200"
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/ContactPage"
<<<<<<< HEAD
                                className="hover:text-[#00C2FF] transition-colors duration-200"
=======
                                className="hover:text-[#C9F31D] transition-colors duration-200"
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div>
                    <h3 className="font-medium text-2xl mb-4 font-[Prompt]">Contact Information</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex items-center space-x-2"><MapPin size={16} /> <span>Chhatrapati Sambhaji Nagar</span></li>
                        <li className="flex items-center space-x-2"><Mail size={16} /> <span>jaythale02@Gmail.com</span></li>
                        <li className="flex items-center space-x-2"><Phone size={16} /> <span>+91-7218143845</span></li>
                        <li className="flex items-center space-x-2"><Phone size={16} /> <span>+91-7218143845</span></li>
                    </ul>
                </div>

<<<<<<< HEAD
=======
                {/* Newsletter */}
                <div>
                    <h3 className="font-medium text-2xl mb-4 font-[Prompt]">Our Newsletter</h3>
                    <p className="text-sm text-gray-400 mb-4">
                        Sign up to our newsletter to get the latest news and offers.
                    </p>
                    <div className="flex items-center">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full px-3 py-2 rounded-l-md text-white focus:outline-none"
                        />
                        <button className="bg-[#C9F31D] text-black font-medium font-[Prompt] px-4 py-2 rounded-r-md hover:[#C9F31D]">
                            SUBSCRIBE
                        </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">Enter Your Email Address*</p>
                </div>
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
            </div>

            {/* Footer Bottom */}
            <div className="flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
                <p>Copyright © 2023 website All Rights Reserved.</p>
                <div className="flex space-x-6 mt-3 md:mt-0 ">
<<<<<<< HEAD
                    <Facebook size={16} className="hover:text-[#00C2FF]" />
                    <Twitter size={16} className="hover:text-[#00C2FF]" />
                    <Instagram size={16} className="hover:text-[#00C2FF]" />
                    <Linkedin size={16} className="hover:text-[#00C2FF]" />
                    <Dribbble size={16} className="hover:text-[#00C2FF]" />
=======
                    <Facebook size={16} className="hover:text-[#C9F31D]" />
                    <Twitter size={16} className="hover:text-[#C9F31D]" />
                    <Instagram size={16} className="hover:text-[#C9F31D]" />
                    <Linkedin size={16} className="hover:text-[#C9F31D]" />
                    <Dribbble size={16} className="hover:text-[#C9F31D]" />
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                </div>
            </div>

            {/* Back to Top Button */}
            <div
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
<<<<<<< HEAD
                className="fixed bottom-6 right-6  bg-[#00C2FF] text-black p-3 rounded-full cursor-pointer transition-all duration-300 z-[9999]"
=======
                className="fixed bottom-6 right-6 bg-[#C9F31D] text-black p-3 rounded-full cursor-pointer transition-all duration-300 z-[9999]"
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
            </div>
        </footer>
    );
}
