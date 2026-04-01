import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLogOut, FiUser, FiMail, FiX } from 'react-icons/fi';

const AdminProfileModal = ({ isOpen, onClose, onLogout }) => {
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.keyCode === 27) onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const handleLogout = () => {
        onLogout();
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Card Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: -50 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-xs"
                        >
                            {/* Glassmorphic Admin Card */}
                            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-700/40 shadow-2xl p-6 text-center relative overflow-hidden">
                                {/* Close Button */}
                                <motion.button
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={onClose}
                                    className="absolute top-3 right-3 p-2 hover:bg-gray-700/40 rounded-xl transition-colors group"
                                >
                                    <FiX className="w-5 h-5 text-gray-400 group-hover:text-white" />
                                </motion.button>

                                {/* Avatar */}
                                <motion.div
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: '0 0 25px rgba(34, 211, 238, 0.4)',
                                    }}
                                    className="relative mx-auto w-20 h-20 mb-4"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-spin-slow opacity-70"></div>
                                    <div className="absolute inset-1 bg-gray-800 rounded-full flex items-center justify-center">
                                        <FiUser className="w-8 h-8 text-cyan-400" />
                                    </div>
                                </motion.div>

                                {/* Admin Info */}
                                <h3 className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">
                                    Jay Thale
                                </h3>
                                <p className="text-gray-400 text-sm flex items-center justify-center gap-2 mb-6">
                                    <FiMail className="w-4 h-4" /> admin@malasolar.com
                                </p>

                                {/* Logout Button */}
                                <motion.button
                                    whileHover={{
                                        scale: 1.03,
                                        boxShadow: '0 0 25px rgba(139, 92, 246, 0.4)',
                                    }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={handleLogout}
                                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: '200%' }}
                                        transition={{ duration: 0.8 }}
                                    />
                                    <FiLogOut className="w-5 h-5" />
                                    <span>Sign Out</span>
                                </motion.button>
                            </div>

                            {/* Glow Dots */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -top-2 -right-2 w-5 h-5 bg-cyan-400 rounded-full blur-md"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.7 }}
                                className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-400 rounded-full blur-md"
                            />
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default AdminProfileModal;
