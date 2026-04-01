// src/components/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiMenu, FiX, FiBell, FiMessageSquare, FiUser, FiSearch,
    FiHome, FiUsers, FiSettings, FiLogOut, FiMail, FiTrash2,
    FiEye, FiCheck, FiClock, FiFilter, FiChevronDown,
    FiSun, FiMoon
} from 'react-icons/fi';
import { toast, Toaster } from 'react-hot-toast';
<<<<<<< HEAD
=======
import AdminProfileModal from './AdminProfileModal ';
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
import { useGetContactQuery } from '../../redux/apis/adminApi';
import { useLogoutAdminMutation } from '../../redux/apis/authApi';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [logout] = useLogoutAdminMutation()
    const { data, isSuccess, isError, error, isLoading } = useGetContactQuery()
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('dashboard');
    const [messages, setMessages] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [messageDrawerOpen, setMessageDrawerOpen] = useState(false);
    const [notificationCount, setNotificationCount] = useState(3);
    const [darkMode, setDarkMode] = useState(true);
<<<<<<< HEAD
=======
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        if (isSuccess && data?.data) {
<<<<<<< HEAD
=======
            // Map API response to match existing UI fields
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
            const formattedMessages = data.data.map((item) => ({
                id: item._id,
                name: item.fullName,
                email: item.email,
                phone: item.mobile,
                message: item.message,
<<<<<<< HEAD
                date: new Date(item.createdAt).toISOString().split('T')[0],
=======
                date: new Date(item.createdAt).toISOString().split('T')[0], // YYYY-MM-DD format
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                status: item.read ? 'responded' : 'new',
                read: item.read,
            }));

            setMessages(formattedMessages);
        }
<<<<<<< HEAD
=======

>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
        if (isError) {
            console.error("❌ Error fetching contact data:", error);
            toast.error("Failed to load contact messages");
        }
    }, [isSuccess, isError, data, error]);

    const filteredMessages = messages.filter(message =>
        message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const markAsRead = (id) => {
        setMessages(messages.map(msg =>
            msg.id === id ? { ...msg, read: true } : msg
        ));
        toast.success('Marked as read');
    };

    const deleteMessage = (id) => {
        setMessages(messages.filter(msg => msg.id !== id));
        toast.success('Message deleted');
    };

    const openMessage = (message) => {
        setSelectedMessage(message);
        setMessageDrawerOpen(true);
        if (!message.read) {
            markAsRead(message.id);
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'new': return darkMode ? 'bg-cyan-500' : 'bg-sky-500';
            case 'responded': return darkMode ? 'bg-emerald-500' : 'bg-green-500';
            case 'archived': return darkMode ? 'bg-purple-500' : 'bg-purple-500';
            default: return darkMode ? 'bg-gray-500' : 'bg-gray-400';
        }
    };

    const handleLogout = async () => {
        try {
            const res = await logout().unwrap();
            toast.success("Logged out successfully");
<<<<<<< HEAD
=======
            console.log("✅ Logout API response:", res);
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
            navigate("/admin");
        } catch (err) {
            console.error("❌ Logout failed:", err);
            toast.error("Logout failed. Please try again.");
        }
    };

    const sidebarItems = [
        { id: 'messages', icon: FiMail, label: 'Messages' },
        { id: 'logout', icon: FiLogOut, label: 'Logout' },
    ];


    const bgGradient = darkMode
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        : " bg-gradient-to-br from-blue-50 to-green-50";

    const navBg = darkMode
        ? "bg-gray-800/80 backdrop-blur-xl border-b border-gray-700/50"
        : "bg-white/80 backdrop-blur-xl border-b border-sky-200/50";

    const sidebarBg = darkMode
        ? "bg-gray-800/60 backdrop-blur-xl border-r border-gray-700/50"
        : "bg-white/60 backdrop-blur-xl border-r border-sky-200/50";

    const cardBg = darkMode
        ? "bg-gray-800/60 backdrop-blur-xl border border-gray-700/50"
        : "bg-white/60 backdrop-blur-xl border border-sky-200/50";

    const textPrimary = darkMode ? "text-white" : "text-gray-800";
    const textSecondary = darkMode ? "text-gray-400" : "text-gray-600";
    const textAccent = darkMode ? "text-cyan-400" : "text-sky-600";
    const hoverBg = darkMode ? "hover:bg-gray-700/50" : "hover:bg-sky-100/50";
    const inputBg = darkMode ? "bg-gray-700/50 border-gray-600/50" : "bg-white/50 border-sky-200/50";

    return (
        <div className={`min-h-screen transition-colors duration-300 ${bgGradient}`}>
            <Toaster
                position="top-right"
                toastOptions={{
                    style: {
                        background: darkMode ? '#1f2937' : '#ffffff',
                        color: darkMode ? '#fff' : '#1f2937',
                        border: darkMode ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid rgba(135, 206, 250, 0.3)',
                    },
                }}
            />

            {/* Top Navbar */}
            <nav className={`${navBg} sticky top-0 z-50 transition-colors duration-300`}>
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Left side - Logo and Title */}
                        <div className="flex items-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                                className="lg:hidden p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors mr-3"
                            >
                                <FiMenu className="w-5 h-5 text-cyan-400" />
                            </motion.button>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center space-x-3"
                            >
                                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                                    <FiHome className="w-4 h-4 text-white" />
                                </div>
                                <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                    SolarAdmin
                                </h1>
                            </motion.div>
                        </div>

                        {/* Right side - Icons */}
                        <div className="flex items-center space-x-4">
                            {/* Dark/Light Mode Toggle */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={toggleDarkMode}
                                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700/50 hover:bg-cyan-500/20' : 'bg-sky-100/50 hover:bg-sky-500/20'} transition-colors group`}
                            >
                                {darkMode ? (
                                    <FiSun className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                                ) : (
                                    <FiMoon className="w-5 h-5 text-sky-600 group-hover:text-sky-700" />
                                )}
                            </motion.button>

                            {/* Profile */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="relative"
                            >
                                <button

                                    className={`flex items-center space-x-2 p-2 rounded-lg ${darkMode ? 'bg-gray-700/50 hover:bg-cyan-500/20' : 'bg-sky-100/50 hover:bg-sky-500/20'} transition-colors`}
                                >
                                    <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full flex items-center justify-center">
                                        <FiUser className="w-4 h-4 text-white" />
                                    </div>
                                    <span className={`${textAccent} hidden sm:block`}>Admin</span>
                                    <FiChevronDown className={`w-4 h-4 ${textAccent}`} />
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="flex">
                {/* Sidebar - Desktop */}
                <motion.div
                    initial={false}
                    animate={{ width: sidebarOpen ? 256 : 80 }}
                    className={`hidden lg:flex flex-col ${sidebarBg} h-[calc(100vh-4rem)] sticky top-16 transition-colors duration-300`}
                >
                    <nav className="flex-1 p-4 space-y-2">
                        {sidebarItems.map((item) => (
                            <motion.button
                                key={item.id}
                                whileHover={{ x: 8, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                    if (item.id === "logout") {
                                        handleLogout(); // 🔥 फक्त हे एकच line add केलंय
                                    } else {
                                        setActiveSection(item.id);
                                    }
                                }}
                                className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 ${activeSection === item.id
                                    ? `${darkMode
                                        ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400'
                                        : 'bg-gradient-to-r from-sky-500/20 to-sky-600/20 border border-sky-500/30 text-sky-600'
                                    }`
                                    : `${textSecondary} ${hoverBg}`
                                    }`}
                            >
                                <item.icon className="w-5 h-5 flex-shrink-0" />
                                <motion.span
                                    initial={{ opacity: sidebarOpen ? 1 : 0 }}
                                    animate={{ opacity: sidebarOpen ? 1 : 0 }}
                                    className="font-medium whitespace-nowrap overflow-hidden"
                                >
                                    {sidebarOpen && item.label}
                                </motion.span>
                            </motion.button>
                        ))}
                    </nav>

                </motion.div>

                {/* Main Content */}
                <div className="flex-1 p-4 lg:p-6">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6"
                    >
                        <h1 className={`text-3xl font-bold ${textPrimary} mb-2`}>📨 Contact Messages</h1>
                        <p className={textSecondary}>Manage and respond to customer inquiries</p>
                    </motion.div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {[
                            { label: 'Total Messages', value: messages.length, color: darkMode ? 'cyan' : 'sky' },
                            { label: 'New Messages', value: messages.filter(m => !m.read).length, color: darkMode ? 'blue' : 'sky' },
                            { label: 'Responded', value: messages.filter(m => m.status === 'responded').length, color: darkMode ? 'emerald' : 'green' },
                            { label: 'Archived', value: messages.filter(m => m.status === 'archived').length, color: 'purple' },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className={`${cardBg} rounded-2xl p-6 ${darkMode ? 'hover:border-cyan-500/30' : 'hover:border-sky-500/30'} transition-all duration-300`}
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className={`${textSecondary} text-sm`}>{stat.label}</p>
                                        <p className={`text-2xl font-bold ${textPrimary} mt-1`}>{stat.value}</p>
                                    </div>
                                    <div className={`w-12 h-12 bg-${stat.color}-500/20 rounded-xl flex items-center justify-center`}>
                                        <div className={`w-6 h-6 bg-${stat.color}-500 rounded-lg`}></div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Search and Filters */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className={`${cardBg} rounded-2xl p-6 mb-6`}
                    >
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1 relative">
                                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search by name or email..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className={`w-full pl-10 pr-4 py-3 ${inputBg} rounded-xl ${textPrimary} placeholder-gray-400 focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-cyan-500' : 'focus:ring-sky-500'} focus:border-transparent transition-all`}
                                />
                            </div>
                            <button className={`px-6 py-3 bg-gradient-to-r ${darkMode ? 'from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600' : 'from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700'} text-white rounded-xl font-medium transition-all duration-200 flex items-center space-x-2`}>
                                <FiFilter className="w-4 h-4" />
                                <span>Filters</span>
                            </button>
                        </div>
                    </motion.div>

                    {/* Messages Table */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className={`${cardBg} rounded-2xl overflow-hidden`}
                    >
                        {/* Desktop Table */}
                        <div className="hidden lg:block overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className={`border-b ${darkMode ? 'border-gray-700/50' : 'border-sky-200/50'}`}>
                                        <th className={`text-left p-6 ${textSecondary} font-medium`}>Contact</th>
                                        <th className={`text-left p-6 ${textSecondary} font-medium`}>Message</th>
                                        <th className={`text-left p-6 ${textSecondary} font-medium`}>Date</th>
                                        {/* <th className={`text-left p-6 ${textSecondary} font-medium`}>Status</th> */}
                                        <th className={`text-left p-6 ${textSecondary} font-medium`}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <AnimatePresence>
                                        {filteredMessages.map((message, index) => (
                                            <motion.tr
                                                key={message.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ delay: index * 0.1 }}
                                                className={`border-b ${darkMode ? 'border-gray-700/30 hover:bg-gray-700/30' : 'border-sky-200/30 hover:bg-sky-100/30'} transition-colors`}
                                            >
                                                <td className="p-6">
                                                    <div>
                                                        <p className={textPrimary}>{message.name}</p>
                                                        <p className={`${textAccent} text-sm`}>{message.email}</p>
                                                        <p className={`${textSecondary} text-sm`}>{message.phone}</p>
                                                    </div>
                                                </td>
                                                <td className="p-6">
                                                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} line-clamp-2`}>{message.message}</p>
                                                </td>
                                                <td className={`p-6 ${textSecondary}`}>{message.date}</td>
<<<<<<< HEAD
=======
                                                {/* <td className="p-6">
                                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(message.status)} text-white`}>
                                                        {message.status}
                                                    </span>
                                                </td> */}
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                                                <td className="p-6">
                                                    <div className="flex items-center space-x-2">
                                                        <motion.button
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.9 }}
                                                            onClick={() => openMessage(message)}
                                                            className={`p-2 ${textAccent} ${darkMode ? 'hover:bg-cyan-500/20' : 'hover:bg-sky-500/20'} rounded-lg transition-colors`}
                                                            title="View Message"
                                                        >
                                                            <FiEye className="w-4 h-4" />
                                                        </motion.button>
                                                        <motion.button
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.9 }}
                                                            onClick={() => markAsRead(message.id)}
                                                            className={`p-2 ${darkMode ? 'text-emerald-400 hover:bg-emerald-500/20' : 'text-green-500 hover:bg-green-500/20'} rounded-lg transition-colors`}
                                                            title="Mark as Read"
                                                        >
                                                            <FiCheck className="w-4 h-4" />
                                                        </motion.button>
                                                        <motion.button
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.9 }}
                                                            onClick={() => deleteMessage(message.id)}
                                                            className={`p-2 ${darkMode ? 'text-red-400 hover:bg-red-500/20' : 'text-red-500 hover:bg-red-500/20'} rounded-lg transition-colors`}
                                                            title="Delete Message"
                                                        >
                                                            <FiTrash2 className="w-4 h-4" />
                                                        </motion.button>
                                                    </div>
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </AnimatePresence>
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile Cards */}
                        <div className="lg:hidden p-4 space-y-4">
                            <AnimatePresence>
                                {filteredMessages.map((message, index) => (
                                    <motion.div
                                        key={message.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`${darkMode ? 'bg-gray-700/50 border-gray-600/50' : 'bg-sky-100/50 border-sky-200/50'} rounded-xl p-4 border`}
                                    >
                                        <div className="flex justify-between items-start mb-3">
                                            <div>
                                                <p className={textPrimary}>{message.name}</p>
                                                <p className={`${textAccent} text-sm`}>{message.email}</p>
                                                <p className={`${textSecondary} text-sm`}>{message.phone}</p>
                                            </div>
                                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(message.status)} text-white`}>
                                                {message.status}
                                            </span>
                                        </div>
                                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm mb-3 line-clamp-2`}>{message.message}</p>
                                        <div className="flex justify-between items-center">
                                            <span className={`${textSecondary} text-sm`}>{message.date}</span>
                                            <div className="flex items-center space-x-2">
                                                <button onClick={() => openMessage(message)} className={textAccent}>
                                                    <FiEye className="w-4 h-4" />
                                                </button>
                                                <button onClick={() => markAsRead(message.id)} className={darkMode ? 'text-emerald-400' : 'text-green-500'}>
                                                    <FiCheck className="w-4 h-4" />
                                                </button>
                                                <button onClick={() => deleteMessage(message.id)} className={darkMode ? 'text-red-400' : 'text-red-500'}>
                                                    <FiTrash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Mobile Bottom Nav */}
            <div className={`lg:hidden fixed bottom-0 left-0 right-0 ${darkMode ? 'bg-gray-800/90 border-gray-700/50' : 'bg-white/90 border-sky-200/50'} backdrop-blur-xl border-t transition-colors duration-300`}>
                <div className="flex justify-around items-center p-3">
                    {sidebarItems.map((item) => (
                        <motion.button
                            key={item.id}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setActiveSection(item.id)}
                            className={`p-3 rounded-xl transition-colors ${activeSection === item.id
                                ? `${darkMode ? 'text-cyan-400 bg-cyan-500/20' : 'text-sky-600 bg-sky-500/20'}`
                                : `${textSecondary}`
                                }`}
                        >
                            <item.icon className="w-5 h-5" />
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Message Detail Drawer */}
            <AnimatePresence>
                {messageDrawerOpen && selectedMessage && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                            onClick={() => setMessageDrawerOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30 }}
                            className={`fixed right-0 top-0 h-full w-full max-w-md ${darkMode ? 'bg-gray-800 border-gray-700/50' : 'bg-white border-sky-200/50'} border-l z-50 overflow-y-auto`}
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className={`text-2xl font-bold ${textPrimary}`}>Message Details</h2>
                                    <button
                                        onClick={() => setMessageDrawerOpen(false)}
                                        className={`p-2 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-sky-100'} rounded-lg transition-colors`}
                                    >
                                        <FiX className={`w-5 h-5 ${textSecondary}`} />
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className={`text-lg font-semibold ${textPrimary} mb-2`}>Contact Information</h3>
                                        <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-sky-100/50'} rounded-xl p-4 space-y-2`}>
                                            <p><strong className={textSecondary}>Name:</strong> <span className={textPrimary}>{selectedMessage.name}</span></p>
                                            <p><strong className={textSecondary}>Email:</strong> <span className={textAccent}>{selectedMessage.email}</span></p>
                                            <p><strong className={textSecondary}>Phone:</strong> <span className={textPrimary}>{selectedMessage.phone}</span></p>
                                            <p><strong className={textSecondary}>Date:</strong> <span className={textSecondary}>{selectedMessage.date}</span></p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className={`text-lg font-semibold ${textPrimary} mb-2`}>Message</h3>
                                        <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-sky-100/50'} rounded-xl p-4`}>
                                            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>{selectedMessage.message}</p>
                                        </div>
                                    </div>

                                    <div className="flex space-x-3">
                                        <button className={`flex-1 bg-gradient-to-r ${darkMode ? 'from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600' : 'from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700'} text-white py-3 rounded-xl font-medium transition-all duration-200`}>
                                            Reply
                                        </button>
                                        <button
                                            onClick={() => deleteMessage(selectedMessage.id)}
                                            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-medium transition-all duration-200"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
<<<<<<< HEAD
=======

            {/* Admin Profile Modal */}
            <AdminProfileModal
                isOpen={isProfileModalOpen}
                onClose={() => setIsProfileModalOpen(false)}
                onLogout={handleLogout}
                darkMode={darkMode}
            />
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
        </div>
    );
};

export default AdminDashboard;