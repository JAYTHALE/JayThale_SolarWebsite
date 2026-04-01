<<<<<<< HEAD
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ChevronLeft, ChevronRight, Zap } from "lucide-react";

// const SolarGallery = () => {
//     const [selectedImage, setSelectedImage] = useState(null);
//     const [currentIndex, setCurrentIndex] = useState(0);

//     // 15 dummy solar energy images from Unsplash
//     const solarImages = [
//         "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&w=800",
//         "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&w=800",
//         "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&w=800",
//         "https://plus.unsplash.com/premium_photo-1661961617519-ce160a561ee4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
//         "https://images.unsplash.com/photo-1463173904305-ba479d2123b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1558",
//         "https://plus.unsplash.com/premium_photo-1663091707200-7e00b70052b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
//         "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&w=800",
//         "https://images.unsplash.com/photo-1655300283247-6b1924b1d152?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1031",
//         "https://images.unsplash.com/photo-1662601311129-a288e9db505c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
//         "https://images.unsplash.com/photo-1660330589827-da8ab7dd3c02?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032",
//         "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&w=800",
//         "https://plus.unsplash.com/premium_photo-1682145603806-13f675deff32?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
//         "https://plus.unsplash.com/premium_photo-1678743133487-d501f3b0696b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=871",
//         "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032",
//         "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&w=800",
//         "https://plus.unsplash.com/premium_photo-1679917152411-353fd633e218?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=10328+"
//     ];

//     const openImage = (image, index) => {
//         setSelectedImage(image);
//         setCurrentIndex(index);
//     };

//     const closeImage = () => {
//         setSelectedImage(null);
//     };

//     const nextImage = () => {
//         setCurrentIndex((prev) => (prev + 1) % solarImages.length);
//         setSelectedImage(solarImages[(currentIndex + 1) % solarImages.length]);
//     };

//     const prevImage = () => {
//         setCurrentIndex((prev) => (prev - 1 + solarImages.length) % solarImages.length);
//         setSelectedImage(solarImages[(currentIndex - 1 + solarImages.length) % solarImages.length]);
//     };

//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.1
//             }
//         }
//     };

//     const itemVariants = {
//         hidden: { y: 20, opacity: 0 },
//         visible: {
//             y: 0,
//             opacity: 1,
//             transition: {
//                 duration: 0.5,
//                 ease: "easeOut"
//             }
//         }
//     };

//     return <>
//         <div className="relative z-10 w-full bg-white">
//             <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 relative z-10">
//                 <div className="max-w-7xl mx-auto">
//                     <div className="text-center pb-20 px-6 md:px-12">
//                         {/* ⚡ OUR SERVICES */}
//                         <div className="mb-4">
//                             <p className="flex items-center justify-center text-sm font-semibold uppercase tracking-wider text-black">
//                                 <span className="text-lg"> <Zap className="w-8 h-8 p-2" /></span> Our Services
//                             </p>
//                         </div>
//                         {/* Heading */}
//                         <h2 className="text-2xl md:text-5xl font-medium font-[Prompt] text-black mb-6 leading-tight">
//                             Customized Solar Energy <br className="hidden md:block" />
//                             Systems That Fit Your Needs
//                         </h2>
//                         {/* Paragraph */}
//                         <p className="text-gray-600 text-ms md:text-base max-w-3xl mx-auto leading-relaxed">
//                             Our team designs and installs tailored solar energy systems based on your unique
//                             energy usage,and budget—ensuring maximum efficiency,
//                             long-term savings, and energy independence.
//                         </p>

//                     </div>


//                     {/* Gallery Grid */}
//                     <motion.div
//                         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
//                         variants={containerVariants}
//                         initial="hidden"
//                         animate="visible"
//                     >
//                         {solarImages.map((image, index) => (
//                             <motion.div
//                                 key={index}
//                                 variants={itemVariants}
//                                 className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
//                                 whileHover={{ y: -5, scale: 1.02 }}
//                                 onClick={() => openImage(image, index)}
//                             >

//                                 <motion.img
//                                     src={image}
//                                     alt={`Solar installation ${index + 1}`}
//                                     className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//                                 />


//                                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
//                                     <motion.div
//                                         className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
//                                         whileHover={{ scale: 1.1 }}
//                                     >
//                                         <div className="bg-[#C9F31D] text-black px-4 py-2 rounded-full font-semibold">
//                                             View
//                                         </div>
//                                     </motion.div>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </motion.div>

//                     {/* Modal */}
//                     <AnimatePresence>
//                         {selectedImage && (
//                             <motion.div
//                                 className="fixed inset-0 bg-black/90 z-30 flex items-center justify-center p-4 "
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 exit={{ opacity: 0 }}
//                                 onClick={closeImage}
//                             >
//                                 {/* Close Button */}
//                                 <motion.button
//                                     className="absolute top-25 right-4 text-white hover:text-[#C9F31D] transition-colors z-10"
//                                     onClick={closeImage}
//                                     whileHover={{ scale: 1.1 }}
//                                     whileTap={{ scale: 0.9 }}
//                                 >
//                                     <X className="w-8 h-8" />
//                                 </motion.button>

//                                 {/* Navigation Buttons */}
//                                 <motion.button
//                                     className="absolute left-4 text-white hover:text-[#C9F31D] transition-colors z-10"
//                                     onClick={(e) => {
//                                         e.stopPropagation();
//                                         prevImage();
//                                     }}
//                                     whileHover={{ scale: 1.1 }}
//                                     whileTap={{ scale: 0.9 }}
//                                 >
//                                     <ChevronLeft className="w-8 h-8" />
//                                 </motion.button>

//                                 <motion.button
//                                     className="absolute right-4 text-white hover:text-[#C9F31D] transition-colors z-10"
//                                     onClick={(e) => {
//                                         e.stopPropagation();
//                                         nextImage();
//                                     }}
//                                     whileHover={{ scale: 1.1 }}
//                                     whileTap={{ scale: 0.9 }}
//                                 >
//                                     <ChevronRight className="w-8 h-8" />
//                                 </motion.button>

//                                 {/* Image */}
//                                 <motion.div
//                                     className="relative max-w-4xl max-h-full"
//                                     initial={{ scale: 0.8, opacity: 0 }}
//                                     animate={{ scale: 1, opacity: 1 }}
//                                     exit={{ scale: 0.8, opacity: 0 }}
//                                     transition={{ type: "spring", damping: 25 }}
//                                     onClick={(e) => e.stopPropagation()}
//                                 >
//                                     <motion.img
//                                         src={selectedImage}
//                                         alt={`Solar installation ${currentIndex + 1}`}
//                                         className="max-w-full max-h-[70vh] object-contain rounded-lg mt-20"
//                                     />

//                                     {/* Image Counter */}
//                                     <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
//                                         {currentIndex + 1} / {solarImages.length}
//                                     </div>
//                                 </motion.div>
//                             </motion.div>
//                         )}
//                     </AnimatePresence>

//                 </div>
//             </section>
//         </div>
//     </>
// };

// export default SolarGallery;



// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ChevronLeft, ChevronRight, Zap } from "lucide-react";

// const SolarGallery = () => {
//     const [selectedImage, setSelectedImage] = useState(null);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [loadedImages, setLoadedImages] = useState({});

//     const solarImages = [
//         "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
//         "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800",
//         "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800",
//         "https://plus.unsplash.com/premium_photo-1661961617519-ce160a561ee4?w=800",
//         "https://images.unsplash.com/photo-1463173904305-ba479d2123b7?w=800",
//         "https://plus.unsplash.com/premium_photo-1663091707200-7e00b70052b6?w=800",
//         "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800",
//         "https://images.unsplash.com/photo-1655300283247-6b1924b1d152?w=800",
//         "https://images.unsplash.com/photo-1662601311129-a288e9db505c?w=800",
//         "https://images.unsplash.com/photo-1660330589827-da8ab7dd3c02?w=800",
//         "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800",
//         "https://plus.unsplash.com/premium_photo-1682145603806-13f675deff32?w=800",
//         "https://plus.unsplash.com/premium_photo-1678743133487-d501f3b0696b?w=800",
//         "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?w=800",
//         "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
//         "https://plus.unsplash.com/premium_photo-1679917152411-353fd633e218?auto=format&fit=crop&w=800"
//     ];

//     const openImage = (image, index) => {
//         setSelectedImage(image);
//         setCurrentIndex(index);
//     };

//     const closeImage = () => setSelectedImage(null);

//     const nextImage = () => {
//         const newIndex = (currentIndex + 1) % solarImages.length;
//         setCurrentIndex(newIndex);
//         setSelectedImage(solarImages[newIndex]);
//     };

//     const prevImage = () => {
//         const newIndex = (currentIndex - 1 + solarImages.length) % solarImages.length;
//         setCurrentIndex(newIndex);
//         setSelectedImage(solarImages[newIndex]);
//     };

//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: { staggerChildren: 0.1 }
//         }
//     };

//     const itemVariants = {
//         hidden: { y: 20, opacity: 0 },
//         visible: {
//             y: 0,
//             opacity: 1,
//             transition: { duration: 0.5, ease: "easeOut" }
//         }
//     };

//     return (
//         <div className="relative z-10 w-full bg-white">
//             <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 relative z-10">
//                 <div className="max-w-7xl mx-auto">

//                     {/* HEADER */}
//                     <div className="text-center pb-20 px-6 md:px-12">
//                         <p className="flex items-center justify-center text-sm font-semibold uppercase tracking-wider text-black">
//                             <Zap className="w-8 h-8 p-2" /> Our Services
//                         </p>

//                         <h2 className="text-2xl md:text-5xl font-medium font-[Prompt] text-black mb-6 leading-tight">
//                             Customized Solar Energy <br className="hidden md:block" />
//                             Systems That Fit Your Needs
//                         </h2>

//                         <p className="text-gray-600 text-ms md:text-base max-w-3xl mx-auto leading-relaxed">
//                             Our team designs and installs tailored solar energy systems based on your unique
//                             energy usage,and budget—ensuring maximum efficiency,
//                             long-term savings, and energy independence.
//                         </p>
//                     </div>

//                     {/* GRID */}
//                     <motion.div
//                         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
//                         variants={containerVariants}
//                         initial="hidden"
//                         animate="visible"
//                     >
//                         {solarImages.map((image, index) => (
//                             <motion.div
//                                 key={index}
//                                 variants={itemVariants}
//                                 className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
//                                 whileHover={{ y: -5, scale: 1.02 }}
//                                 onClick={() => openImage(image, index)}
//                             >

//                                 {/* IMAGE WRAPPER */}
//                                 <div className="relative w-full h-64 overflow-hidden">

//                                     {/* BLUR PLACEHOLDER (only until loaded) */}
//                                     {!loadedImages[index] && (
//                                         <img
//                                             src={image}
//                                             className="absolute w-full h-full object-cover blur-md scale-110"
//                                             alt="blur"
//                                         />
//                                     )}

//                                     {/* MAIN IMAGE */}
//                                     <motion.img
//                                         src={image}
//                                         alt={`Solar installation ${index + 1}`}
//                                         loading="lazy"
//                                         onLoad={() =>
//                                             setLoadedImages((prev) => ({
//                                                 ...prev,
//                                                 [index]: true
//                                             }))
//                                         }
//                                         className={`w-full h-64 object-cover transition-all duration-500 
//         ${loadedImages[index] ? "opacity-100" : "opacity-0"}
//         group-hover:scale-110`}
//                                     />
//                                 </div>

//                                 {/* HOVER OVERLAY */}
//                                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
//                                     <div className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
//                                         <div className="bg-[#C9F31D] text-black px-4 py-2 rounded-full font-semibold">
//                                             View
//                                         </div>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </motion.div>

//                     {/* MODAL */}
//                     <AnimatePresence>
//                         {selectedImage && (
//                             <motion.div
//                                 className="fixed inset-0 bg-black/90 z-30 flex items-center justify-center p-4"
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 exit={{ opacity: 0 }}
//                                 onClick={closeImage}
//                             >
//                                 <button
//                                     className="absolute top-25 right-4 text-white hover:text-[#C9F31D]"
//                                     onClick={closeImage}
//                                 >
//                                     <X className="w-8 h-8" />
//                                 </button>

//                                 <button
//                                     className="absolute left-4 text-white hover:text-[#C9F31D]"
//                                     onClick={(e) => {
//                                         e.stopPropagation();
//                                         prevImage();
//                                     }}
//                                 >
//                                     <ChevronLeft className="w-8 h-8" />
//                                 </button>

//                                 <button
//                                     className="absolute right-4 text-white hover:text-[#C9F31D]"
//                                     onClick={(e) => {
//                                         e.stopPropagation();
//                                         nextImage();
//                                     }}
//                                 >
//                                     <ChevronRight className="w-8 h-8" />
//                                 </button>

//                                 <motion.div
//                                     className="relative max-w-4xl max-h-full"
//                                     onClick={(e) => e.stopPropagation()}
//                                 >
//                                     <img
//                                         src={selectedImage}
//                                         className="max-w-full max-h-[70vh] object-contain rounded-lg mt-20"
//                                         alt="preview"
//                                     />

//                                     <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
//                                         {currentIndex + 1} / {solarImages.length}
//                                     </div>
//                                 </motion.div>
//                             </motion.div>
//                         )}
//                     </AnimatePresence>

//                 </div>
//             </section>
//         </div>
//     );
// };

// export default SolarGallery;




import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Zap } from "lucide-react";
import { useGetallphotosQuery } from "../redux/apis/photoApi";
=======
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Zap } from "lucide-react";
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567

const SolarGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
<<<<<<< HEAD
    const [loadedImages, setLoadedImages] = useState({});

    // ✅ API CALL
    const { data, isLoading } = useGetallphotosQuery();

    // ✅ FLATTEN ALL IMAGES FROM API
    const solarImages =
        data?.data?.flatMap(item => item.images) || [];
=======

    // 15 dummy solar energy images from Unsplash
    const solarImages = [
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&w=800",
        "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&w=800",
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&w=800",
        "https://plus.unsplash.com/premium_photo-1661961617519-ce160a561ee4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
        "https://images.unsplash.com/photo-1463173904305-ba479d2123b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1558",
        "https://plus.unsplash.com/premium_photo-1663091707200-7e00b70052b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&w=800",
        "https://images.unsplash.com/photo-1655300283247-6b1924b1d152?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1031",
        "https://images.unsplash.com/photo-1662601311129-a288e9db505c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
        "https://images.unsplash.com/photo-1660330589827-da8ab7dd3c02?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032",
        "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&w=800",
        "https://plus.unsplash.com/premium_photo-1682145603806-13f675deff32?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
        "https://plus.unsplash.com/premium_photo-1678743133487-d501f3b0696b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=871",
        "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032",
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&w=800",
        "https://plus.unsplash.com/premium_photo-1679917152411-353fd633e218?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=10328+"
    ];
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567

    const openImage = (image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
    };

<<<<<<< HEAD
    const closeImage = () => setSelectedImage(null);

    const nextImage = () => {
        const newIndex = (currentIndex + 1) % solarImages.length;
        setCurrentIndex(newIndex);
        setSelectedImage(solarImages[newIndex]);
    };

    const prevImage = () => {
        const newIndex = (currentIndex - 1 + solarImages.length) % solarImages.length;
        setCurrentIndex(newIndex);
        setSelectedImage(solarImages[newIndex]);
=======
    const closeImage = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % solarImages.length);
        setSelectedImage(solarImages[(currentIndex + 1) % solarImages.length]);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + solarImages.length) % solarImages.length);
        setSelectedImage(solarImages[(currentIndex - 1 + solarImages.length) % solarImages.length]);
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
<<<<<<< HEAD
            transition: { staggerChildren: 0.1 }
=======
            transition: {
                staggerChildren: 0.1
            }
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
<<<<<<< HEAD
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    // ✅ LOADING STATE
    if (isLoading) {
        return <div className="text-center py-20 text-xl">Loading...</div>;
    }

    return (
        <div className="relative z-10 w-full bg-white">
            <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto">

                    {/* HEADER */}
                    <div className="text-center pb-20 px-6 md:px-12">
                        <p className="flex items-center justify-center text-sm font-semibold uppercase tracking-wider text-black">
                            <Zap className="w-8 h-8 p-2" /> Our Services
                        </p>

=======
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return <>
        <div className="relative z-10 w-full bg-white">
            <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center pb-20 px-6 md:px-12">
                        {/* ⚡ OUR SERVICES */}
                        <div className="mb-4">
                            <p className="flex items-center justify-center text-sm font-semibold uppercase tracking-wider text-black">
                                <span className="text-lg"> <Zap className="w-8 h-8 p-2" /></span> Our Services
                            </p>
                        </div>
                        {/* Heading */}
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                        <h2 className="text-2xl md:text-5xl font-medium font-[Prompt] text-black mb-6 leading-tight">
                            Customized Solar Energy <br className="hidden md:block" />
                            Systems That Fit Your Needs
                        </h2>
<<<<<<< HEAD

=======
                        {/* Paragraph */}
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                        <p className="text-gray-600 text-ms md:text-base max-w-3xl mx-auto leading-relaxed">
                            Our team designs and installs tailored solar energy systems based on your unique
                            energy usage,and budget—ensuring maximum efficiency,
                            long-term savings, and energy independence.
                        </p>
<<<<<<< HEAD
                    </div>

                    {/* GRID */}
=======

                    </div>


                    {/* Gallery Grid */}
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {solarImages.map((image, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                                whileHover={{ y: -5, scale: 1.02 }}
                                onClick={() => openImage(image, index)}
                            >

<<<<<<< HEAD
                                {/* IMAGE WRAPPER */}
                                <div className="relative w-full h-64 overflow-hidden">

                                    {!loadedImages[index] && (
                                        <img
                                            src={image}
                                            className="absolute w-full h-full object-cover blur-md scale-110"
                                            alt="blur"
                                        />
                                    )}

                                    <motion.img
                                        src={image}
                                        alt={`Solar installation ${index + 1}`}
                                        loading="lazy"
                                        onLoad={() =>
                                            setLoadedImages((prev) => ({
                                                ...prev,
                                                [index]: true
                                            }))
                                        }
                                        className={`w-full h-64 object-cover transition-all duration-500 
        ${loadedImages[index] ? "opacity-100" : "opacity-0"}
        group-hover:scale-110`}
                                    />
                                </div>

                                {/* HOVER */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                    <div className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        <div className="bg-[#C9F31D] text-black px-4 py-2 rounded-full font-semibold">
                                            View
                                        </div>
                                    </div>
=======
                                <motion.img
                                    src={image}
                                    alt={`Solar installation ${index + 1}`}
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                />


                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                    <motion.div
                                        className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <div className="bg-[#C9F31D] text-black px-4 py-2 rounded-full font-semibold">
                                            View
                                        </div>
                                    </motion.div>
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

<<<<<<< HEAD
                    {/* MODAL */}
                    <AnimatePresence>
                        {selectedImage && (
                            <motion.div
                                className="fixed inset-0 bg-black/90 z-30 flex items-center justify-center p-4"
=======
                    {/* Modal */}
                    <AnimatePresence>
                        {selectedImage && (
                            <motion.div
                                className="fixed inset-0 bg-black/90 z-30 flex items-center justify-center p-4 "
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={closeImage}
                            >
<<<<<<< HEAD
                                <button
                                    className="absolute top-25 right-4 text-white hover:text-[#C9F31D]"
                                    onClick={closeImage}
                                >
                                    <X className="w-8 h-8" />
                                </button>

                                <button
                                    className="absolute left-4 text-white hover:text-[#C9F31D]"
=======
                                {/* Close Button */}
                                <motion.button
                                    className="absolute top-25 right-4 text-white hover:text-[#C9F31D] transition-colors z-10"
                                    onClick={closeImage}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <X className="w-8 h-8" />
                                </motion.button>

                                {/* Navigation Buttons */}
                                <motion.button
                                    className="absolute left-4 text-white hover:text-[#C9F31D] transition-colors z-10"
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        prevImage();
                                    }}
<<<<<<< HEAD
                                >
                                    <ChevronLeft className="w-8 h-8" />
                                </button>

                                <button
                                    className="absolute right-4 text-white hover:text-[#C9F31D]"
=======
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <ChevronLeft className="w-8 h-8" />
                                </motion.button>

                                <motion.button
                                    className="absolute right-4 text-white hover:text-[#C9F31D] transition-colors z-10"
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        nextImage();
                                    }}
<<<<<<< HEAD
                                >
                                    <ChevronRight className="w-8 h-8" />
                                </button>

                                <motion.div
                                    className="relative max-w-4xl max-h-full"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <img
                                        src={selectedImage}
                                        className="max-w-full max-h-[70vh] object-contain rounded-lg mt-20"
                                        alt="preview"
                                    />

=======
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <ChevronRight className="w-8 h-8" />
                                </motion.button>

                                {/* Image */}
                                <motion.div
                                    className="relative max-w-4xl max-h-full"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    transition={{ type: "spring", damping: 25 }}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <motion.img
                                        src={selectedImage}
                                        alt={`Solar installation ${currentIndex + 1}`}
                                        className="max-w-full max-h-[70vh] object-contain rounded-lg mt-20"
                                    />

                                    {/* Image Counter */}
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
                                        {currentIndex + 1} / {solarImages.length}
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </section>
        </div>
<<<<<<< HEAD
    );
=======
    </>
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
};

export default SolarGallery;