import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Zap, Lock, Mail, Eye, EyeOff } from 'lucide-react';
import { useLoginAdminMutation } from '../redux/apis/authApi';
import { toast } from 'react-hot-toast';

const LoginPage = () => {
    const navigate = useNavigate();
    const [loginAdmin, { isSuccess, isLoading, isError, error, data }] = useLoginAdminMutation();
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validationSchema: yup.object({
            email: yup.string().email('Invalid email address').required('Email is required'),
            password: yup.string().required('Password is required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                const payload = {
                    email: values.email,
                    password: values.password,
                };

                console.log("🔹 Sending login payload:", payload);
                const res = await loginAdmin(payload).unwrap();
                console.log("✅ Login success:", res);

                toast.success("Login successful!");
                resetForm();
                navigate("/admindashboard");
            } catch (err) {
                console.error("❌ Login Error:", err);
                toast.error("Invalid email or password!");
            }
        },
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">

            {/* Background Animation */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-20 h-20 bg-yellow-800 rounded-full opacity-20"
                    animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-32 right-20 w-16 h-16 bg-green-700 rounded-full opacity-30"
                    animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/3 w-12 h-12 bg-blue-200 rounded-full opacity-25"
                    animate={{ y: [0, 30, 0], rotate: [0, 180, 360] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-md"
            >
                {/* Header */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="text-center mb-4"
                >
                    <div className="flex items-center justify-center mb-4">
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.8 }}
                            className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                        >
                            <Zap className="w-8 h-8 text-white" />
                        </motion.div>
                    </div>
<<<<<<< HEAD
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Maheeta Enterprises</h1>
=======
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">NewRa Grids</h1>
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
                    <p className="text-gray-600">Admin Portal</p>
                </motion.div>


                {/* Login Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-opacity-90 border border-white border-opacity-20"
                >


                    <form onSubmit={formik.handleSubmit} className="space-y-6">
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="email"
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    className={clsx(
                                        'w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200',
                                        {
                                            'border-gray-300': !formik.touched.email,
                                            'border-red-500': formik.touched.email && formik.errors.email,
                                            'border-green-500': formik.touched.email && !formik.errors.email,
                                        }
                                    )}
                                    placeholder="admin@malasolar.com"
                                />
                            </div>
                            {formik.touched.email && formik.errors.email && (
                                <p className="text-sm text-red-500 mt-1">{formik.errors.email}</p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    className={clsx(
                                        'w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200',
                                        {
                                            'border-gray-300': !formik.touched.password,
                                            'border-red-500': formik.touched.password && formik.errors.password,
                                            'border-green-500': formik.touched.password && !formik.errors.password,
                                        }
                                    )}
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                            {formik.touched.password && formik.errors.password && (
                                <p className="text-sm text-red-500 mt-1">{formik.errors.password}</p>
                            )}
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    onChange={formik.handleChange}
                                    checked={formik.values.rememberMe}
                                    className="w-4 h-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                                />
                                <span className="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                            <button
                                type="button"
                                className="text-sm text-green-600 hover:text-green-700 font-medium transition-colors"
                            >
                                Forgot password?
                            </button>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {isLoading ? (
                                <>
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                                    />
                                    Signing in...
                                </>
                            ) : (
                                'Sign In'
                            )}
                        </motion.button>
                    </form>

                    {/* Footer */}
                    <div className='flex justify-end'>
                        <h1 className="ml-50"></h1>
                        <h1 className="ml-20"></h1>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-lg text-black">
                            {`Email : jaythale02@gmail.com`}
                        </p>
                        <p className="text-lg text-black">
                            {`Pass : Jay@123#`}
                        </p>
                    </div>
                </motion.div>

                {/* Security Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="text-center mt-6"
                >
                    <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        <Lock className="w-4 h-4 mr-2" />
                        SSL Secured Connection
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default LoginPage;
