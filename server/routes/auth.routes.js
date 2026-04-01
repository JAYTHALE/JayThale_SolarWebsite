const express = require('express');
const router = express.Router();
const { register, login, logout } = require('../controller/auth.controller');

// Auth routes

// existing controllers
const { register, login, logout, forgotPassword, verifyOTP, resetPassword } = require('../controller/auth.controller');

// 🔹 Auth routes
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;
// 🔹 Forgot password flow
router.post('/forgot-password', forgotPassword);
router.post('/verify-otp', verifyOTP);
router.post('/reset-password', resetPassword);

module.exports = router;
