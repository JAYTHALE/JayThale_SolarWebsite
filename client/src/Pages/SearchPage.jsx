import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SearchPage = ({ isOpen, onClose }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const inputRef = useRef(null);

    // Focus input when search opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => {
                inputRef.current.focus();
            }, 300);
        }
    }, [isOpen]);

    // Handle escape key to close
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    // Animation variants
    const overlayVariants = {
        hidden: {
            height: 0,
            transition: {
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1]
            }
        },
        visible: {
            height: "100vh",
            transition: {
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1]
            }
        },
        exit: {
            height: 0,
            transition: {
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    const searchPanelVariants = {
        hidden: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.3 }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                delay: 0.3,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.3,
                ease: "easeIn"
            }
        }
    };

    // Mock search results
    const searchResults = [
        { id: 1, title: "Solar Panel Installation", category: "Services" },
        { id: 2, title: "Solar Energy Benefits", category: "Blog" },
        { id: 3, title: "Residential Solar Solutions", category: "Services" },
        { id: 4, title: "Commercial Solar Projects", category: "Portfolio" },
        { id: 5, title: "Solar Maintenance Guide", category: "Blog" },
    ];

    const filteredResults = searchResults.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 overflow-hidden"
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

                    {/* Search Panel */}
                    <motion.div
                        className="relative flex flex-col w-full h-full max-h-screen bg-white"
                        variants={searchPanelVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <div className="flex-1 max-w-4xl mx-auto">
                                {/* Search Input */}
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search for solar solutions, services, articles..."
                                        className="block w-full pl-10 pr-12 py-4 text-lg border-0 focus:ring-0 focus:outline-none placeholder-gray-500"
                                    />
                                    {searchQuery && (
                                        <button
                                            onClick={() => setSearchQuery('')}
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        >
                                            <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Close Button */}
                            <motion.button
                                onClick={onClose}
                                className="ml-4 p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </motion.button>
                        </div>

                        {/* Search Results */}
                        <div className="flex-1 overflow-y-auto">
                            <div className="max-w-4xl mx-auto p-6">
                                {searchQuery ? (
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                            Search Results for "{searchQuery}"
                                        </h3>

                                        {filteredResults.length > 0 ? (
                                            <motion.div
                                                className="space-y-3"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                {filteredResults.map((result, index) => (
                                                    <motion.div
                                                        key={result.id}
                                                        className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: index * 0.1 }}
                                                        whileHover={{ x: 5 }}
                                                    >
                                                        <div className="flex justify-between items-center">
                                                            <div>
                                                                <h4 className="font-medium text-gray-900">{result.title}</h4>
                                                                <p className="text-sm text-gray-500 mt-1">{result.category}</p>
                                                            </div>
                                                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                            </svg>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                className="text-center py-12"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                <svg className="h-12 w-12 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <p className="text-gray-500">No results found for "{searchQuery}"</p>
                                                <p className="text-sm text-gray-400 mt-1">Try different keywords or browse our categories</p>
                                            </motion.div>
                                        )}
                                    </div>
                                ) : (
                                    <motion.div
                                        className="text-center py-12"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <svg className="h-16 w-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">What are you looking for?</h3>
                                        <p className="text-gray-500">Search for solar solutions, services, or browse our articles</p>

                                        {/* Popular Searches */}
                                        <div className="mt-8">
                                            <h4 className="text-sm font-medium text-gray-900 mb-3">Popular Searches</h4>
                                            <div className="flex flex-wrap justify-center gap-2">
                                                {['Solar Panels', 'Installation', 'Maintenance', 'Cost', 'Benefits'].map((term, index) => (
                                                    <motion.button
                                                        key={term}
                                                        onClick={() => setSearchQuery(term)}
                                                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.3 + index * 0.1 }}
                                                    >
                                                        {term}
                                                    </motion.button>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SearchPage;