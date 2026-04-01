
<<<<<<< HEAD
// import React, { useEffect, useState } from "react";
// import { Menu, Search, ArrowRight, X } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import SearchPage from "../../Pages/SearchPage";
// import LoadingScreen from "./LoadingScreen";

// const Navbar = () => {
//     const [isSearchOpen, setIsSearchOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrolled(window.scrollY > 50);
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//     };

//     const navItems = [
//         { label: "Home", href: "/" },
//         { label: "Services", href: "/services" },
//         { label: "Calculator", href: "/SolarSavingsCalculator" },
//         { label: "About", href: "/AboutUs" },
//         { label: "Contact Us", href: "/ContactPage" },
//         { label: "Map", href: "/LocationSelector" },
//     ];

//     const handleNavClick = (path) => {
//         setLoading(true);
//         setTimeout(() => {
//             setLoading(false);
//             navigate(path);
//         }, 2500);
//     };

//     if (loading) return <LoadingScreen />;

//     return (
//         <>
//             <header
//                 className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 bg-white `}
//             >
//                 <nav className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto lg:px-6">
//                     {/* Logo */}
//                     <div className="flex items-center space-x-2">
//                         <img
//                             src="https://solshine.powersquall.com/wp-content/uploads/2025/02/site-logo.svg"
//                             alt="Solshine"
//                             className="h-8 sm:h-10 md:h-12"
//                         />
//                     </div>

//                     {/* Desktop Menu */}
//                     <ul
//                         className={`hidden md:flex items-center space-x-6 text-[14px] font-[Prompt] rounded-full border-[0.5px] p-4 px-2 ${scrolled
//                             ? "border-black/12 text-black"
//                             : "border-white/12 text-white"
//                             }`}
//                     >
//                         {navItems.map((item, index) => (
//                             <li key={index}>
//                                 <button
//                                     onClick={() => handleNavClick(item.href)}
//                                     className={`px-3 py-2 rounded-full transition ${scrolled
//                                         ? "hover:bg-[#C9F31D] hover:text-black"
//                                         : "hover:bg-[#C9F31D] hover:text-black"
//                                         }`}
//                                 >
//                                     {item.label}
//                                 </button>
//                             </li>
//                         ))}
//                     </ul>

//                     {/* Right Icons */}
//                     <div className="flex items-center space-x-4">
//                         <Search
//                             onClick={() => setIsSearchOpen(true)}
//                             className={`w-8 h-6 cursor-pointer transition hover:scale-110 hidden sm:block ${scrolled
//                                 ? "text-black hover:text-gray-800"
//                                 : "text-white hover:text-gray-300"
//                                 }`}
//                         />

//                         {/* ✅ Login Button Added */}
//                         <button
//                             onClick={() => handleNavClick("/admin")}
//                             className={`hidden sm:flex items-center font-[Prompt] border border-[#C9F31D]/60 px-4 py-2 rounded-full transition hover:scale-105 ${scrolled
//                                 ? "text-black hover:bg-[#C9F31D]"
//                                 : "text-white hover:bg-[#C9F31D] hover:text-black"
//                                 }`}
//                         >
//                             Login
//                         </button>

//                         {/* Mobile Menu Button */}
//                         <button
//                             className={`lg:hidden p-2 rounded-md transition ${scrolled
//                                 ? "text-black hover:bg-gray-100"
//                                 : "text-white hover:bg-white/10"
//                                 }`}
//                             onClick={toggleMobileMenu}
//                         >
//                             {isMobileMenuOpen ? (
//                                 <X className="w-6 h-6" />
//                             ) : (
//                                 <Menu className="w-6 h-6" />
//                             )}
//                         </button>

//                         {/* Get in Touch */}
//                         <button
//                             onClick={() => handleNavClick("/ContactPage")}
//                             className={`hidden sm:flex items-center font-[Prompt] bg-[#C9F31D] text-black px-4 py-2 rounded-full hover:scale-105 transition ${scrolled ? "bg-[#C9F31D]" : "bg-[#C9F31D]"
//                                 }`}
//                         >
//                             Get in Touch
//                             <ArrowRight className="ml-2 w-6 h-6 sm:w-7 sm:h-7 bg-black text-white rounded-full p-1" />
//                         </button>
//                     </div>
//                 </nav>

//                 {/* Search Popup */}
//                 <SearchPage isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

//                 {/* Mobile Menu */}
//                 {isMobileMenuOpen && (
//                     <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
//                         <div className="px-4 py-6">
//                             <ul className="space-y-2">
//                                 {navItems.map((item, index) => (
//                                     <li key={index}>
//                                         <button
//                                             onClick={() => {
//                                                 setIsMobileMenuOpen(false);
//                                                 setTimeout(() => handleNavClick(item.href), 200);
//                                             }}
//                                             className="block w-full text-left px-4 py-3 rounded-lg text-gray-800 font-[Prompt] text-base hover:bg-[#C9F31D] hover:text-black transition-colors"
//                                         >
//                                             {item.label}
//                                         </button>
//                                     </li>
//                                 ))}

//                                 {/* ✅ Mobile Login Button */}
//                                 <li>
//                                     <button
//                                         onClick={() => {
//                                             setIsMobileMenuOpen(false);
//                                             setTimeout(() => handleNavClick("/admin"), 200);
//                                         }}
//                                         className="block w-full text-left px-4 py-3 rounded-lg text-gray-800 font-[Prompt] text-base hover:bg-[#C9F31D] hover:text-black transition-colors"
//                                     >
//                                         Login
//                                     </button>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 )}
//             </header>

//             {/* Mobile overlay */}
//             {isMobileMenuOpen && (
//                 <div
//                     className="fixed inset-0 bg-white/50 z-[9000] lg:hidden transition-all duration-300"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                 />
//             )}

//         </>
//     );
// };

// export default Navbar;






=======
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
import React, { useEffect, useState } from "react";
import { Menu, Search, ArrowRight, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import SearchPage from "../../Pages/SearchPage";
<<<<<<< HEAD
import solarlogo from "../../assets/solarlogo.png";
=======
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
import LoadingScreen from "./LoadingScreen";

const Navbar = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
<<<<<<< HEAD
=======
    const [scrolled, setScrolled] = useState(false);
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

<<<<<<< HEAD
=======
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navItems = [
        { label: "Home", href: "/" },
<<<<<<< HEAD
        { label: "About Us", href: "/AboutUs" },
        { label: "Services", href: "/services" },
        { label: "Calculator", href: "/SolarSavingsCalculator" },
        { label: "Contact Us", href: "/ContactPage" },
        // { label: "Map", href: "/LocationSelector" },
=======
        { label: "Services", href: "/services" },
        { label: "Calculator", href: "/SolarSavingsCalculator" },
        { label: "About", href: "/AboutUs" },
        { label: "Contact Us", href: "/ContactPage" },
        { label: "Map", href: "/SolarIrradianceMap" },
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
    ];

    const handleNavClick = (path) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate(path);
        }, 2500);
    };

    if (loading) return <LoadingScreen />;

    return (
        <>
<<<<<<< HEAD
            <header className="fixed top-0 left-0 w-full z-20 transition-all duration-300 bg-white">
                <nav className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto lg:px-6">

                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img
                            src={solarlogo}
                            alt="Solshine"
                            className="h-10 sm:h-12 md:h-21"
=======
            <header
                className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${scrolled ? "bg-white" : "bg-transparent"
                    }`}
            >
                <nav className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto lg:px-6">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img
                            src="https://solshine.powersquall.com/wp-content/uploads/2025/02/site-logo.svg"
                            alt="Solshine"
                            className="h-8 sm:h-10 md:h-12"
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                        />
                    </div>

                    {/* Desktop Menu */}
<<<<<<< HEAD
                    <ul className="hidden md:flex items-center space-x-6 text-[14px] font-[Prompt] rounded-full border-[0.5px] p-4 px-2 border-black/12 text-black">
=======
                    <ul
                        className={`hidden md:flex items-center space-x-6 text-[14px] font-[Prompt] rounded-full border-[0.5px] p-4 px-2 ${scrolled
                            ? "border-black/12 text-black"
                            : "border-white/12 text-white"
                            }`}
                    >
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => handleNavClick(item.href)}
<<<<<<< HEAD
                                    className="px-3 py-2 rounded-full transition hover:bg-[#00C2FF]/30 hover:text-black"
=======
                                    className={`px-3 py-2 rounded-full transition ${scrolled
                                        ? "hover:bg-[#C9F31D] hover:text-black"
                                        : "hover:bg-[#C9F31D] hover:text-black"
                                        }`}
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Right Icons */}
                    <div className="flex items-center space-x-4">
<<<<<<< HEAD

                        {/* <Search
                            onClick={() => setIsSearchOpen(true)}
                            className="w-8 h-6 cursor-pointer transition hover:scale-110 hidden sm:block text-black hover:text-gray-800"
                        /> */}

                        {/* Login Button */}
                        <button
                            onClick={() => handleNavClick("/admin")}
                            className="hidden sm:flex items-center font-[Prompt] border border-[#00C2FF]/30 px-4 py-2 rounded-full transition hover:scale-105 text-black hover:bg-[#00C2FF]/30"
=======
                        <Search
                            onClick={() => setIsSearchOpen(true)}
                            className={`w-8 h-6 cursor-pointer transition hover:scale-110 hidden sm:block ${scrolled
                                ? "text-black hover:text-gray-800"
                                : "text-white hover:text-gray-300"
                                }`}
                        />

                        {/* ✅ Login Button Added */}
                        <button
                            onClick={() => handleNavClick("/admin")}
                            className={`hidden sm:flex items-center font-[Prompt] border border-[#C9F31D]/60 px-4 py-2 rounded-full transition hover:scale-105 ${scrolled
                                ? "text-black hover:bg-[#C9F31D]"
                                : "text-white hover:bg-[#C9F31D] hover:text-black"
                                }`}
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                        >
                            Login
                        </button>

                        {/* Mobile Menu Button */}
                        <button
<<<<<<< HEAD
                            className="lg:hidden p-2 rounded-md transition text-black hover:bg-gray-100"
=======
                            className={`lg:hidden p-2 rounded-md transition ${scrolled
                                ? "text-black hover:bg-gray-100"
                                : "text-white hover:bg-white/10"
                                }`}
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>

                        {/* Get in Touch */}
                        <button
                            onClick={() => handleNavClick("/ContactPage")}
<<<<<<< HEAD
                            className="hidden sm:flex items-center font-[Prompt] bg-[#00C2FF]/30 text-black px-4 py-2 rounded-full hover:scale-105 transition"
=======
                            className={`hidden sm:flex items-center font-[Prompt] bg-[#C9F31D] text-black px-4 py-2 rounded-full hover:scale-105 transition ${scrolled ? "bg-[#C9F31D]" : "bg-[#C9F31D]"
                                }`}
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                        >
                            Get in Touch
                            <ArrowRight className="ml-2 w-6 h-6 sm:w-7 sm:h-7 bg-black text-white rounded-full p-1" />
                        </button>
                    </div>
                </nav>

                {/* Search Popup */}
                <SearchPage isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
                        <div className="px-4 py-6">
                            <ul className="space-y-2">
                                {navItems.map((item, index) => (
                                    <li key={index}>
                                        <button
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setTimeout(() => handleNavClick(item.href), 200);
                                            }}
                                            className="block w-full text-left px-4 py-3 rounded-lg text-gray-800 font-[Prompt] text-base hover:bg-[#C9F31D] hover:text-black transition-colors"
                                        >
                                            {item.label}
                                        </button>
                                    </li>
                                ))}

<<<<<<< HEAD
                                {/* Mobile Login */}
=======
                                {/* ✅ Mobile Login Button */}
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                                <li>
                                    <button
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            setTimeout(() => handleNavClick("/admin"), 200);
                                        }}
                                        className="block w-full text-left px-4 py-3 rounded-lg text-gray-800 font-[Prompt] text-base hover:bg-[#C9F31D] hover:text-black transition-colors"
                                    >
                                        Login
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </header>

            {/* Mobile overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-white/50 z-[9000] lg:hidden transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
<<<<<<< HEAD
=======

>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
        </>
    );
};

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;

>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
