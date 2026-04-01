const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const Auth = require('../models/Auth');
const { checkEmpty } = require('../utils/checkEmpty');
const Otp = require('../models/Otp');
const sendEmail = require('../utils/email');
<<<<<<< HEAD
=======
// const Auth = require('../models/Auth'); // Your Auth schema model

// Utility function to generate OTP
const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6 digit OTP as string
};
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567

// Register user
exports.register = asyncHandler(async (req, res) => {
    const { name, email, mobile, password } = req.body;

<<<<<<< HEAD
=======
    // Basic validations
    console.log(req.body)
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
    const { isError, error } = checkEmpty({ name, email, mobile, password })
    if (isError) {
        return res.status(400).json({ message: "All Fields are required", error });
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: "Invalid Email" });
    }
    if (!validator.isMobilePhone(mobile.toString(), "en-IN")) {
        return res.status(400).json({ message: "Invalid Mobile Number" });
    }
    if (!validator.isStrongPassword(password)) {
        return res.status(400).json({ message: "Provide Strong Password" });
    }

    // Check if already registered
    const userExists = await Auth.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: "Email Already Registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await Auth.create({
        Name: name,
        email,
        mobile,
        password: hashedPassword,
    });

    res.status(201).json({ message: "User registered successfully", userId: newUser._id });
});

<<<<<<< HEAD
=======
// Login with OTP
exports.loginWithOtp = asyncHandler(async (req, res) => {
    const { email, otp } = req.body;
    if (!email || !otp) {
        return res.status(400).json({ message: "Email and OTP required" });
    }

    const user = await Auth.findOne({ email });
    if (!user || user.otp !== otp) {
        return res.status(400).json({ message: "Invalid OTP or Email" });
    }

    // Clear OTP after verification
    user.otp = null;
    await user.save();

    // Issue JWT token
    const token = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_KEY,
        { expiresIn: '1d' }
    );

    res.cookie('authToken', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
    res.json({ message: "Login success", token });
});

>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
// Login with password
exports.login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and Password required" });
    }

    const user = await Auth.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
<<<<<<< HEAD
        return res.status(401).json({ message: "Invalid credentials" });
=======
        return res.status(400).json({ message: "Password incorrect" });
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
    }

    // Issue JWT token
    const token = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_KEY,
        { expiresIn: '1d' }
    );

<<<<<<< HEAD
    res.cookie("authToken", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 24 * 60 * 60 * 1000,
        path: "/",
=======
    // res.cookie('authToken', token, { httpOnly: true, secure: true, maxAge: 24 * 60 * 60 * 1000 });
    // res.cookie('authToken', token, { secure: true, maxAge: 24 * 60 * 60 * 1000 });
    res.cookie("authToken", token, {
        httpOnly: true,
        secure: true, // live HTTPS madhe true
        sameSite: "none",
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        path: "/",             // important
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
    });
    res.json({ message: "Login success", data: user, token });
});

// Logout user
exports.logout = asyncHandler(async (req, res) => {
    res.clearCookie('authToken');
    res.json({ message: "Logout success" });
});
<<<<<<< HEAD
=======

// Forgot Password
exports.forgotPassword = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const { isError, error } = checkEmpty({ email });
    if (isError) return res.status(400).json({ message: "Email is required", error });

    if (!validator.isEmail(email)) return res.status(400).json({ message: "Invalid Email" });

    const user = await Auth.findOne({ email });
    if (!user) return res.status(400).json({ message: "Email not found" });

    const otp = Math.floor(1000 + Math.random() * 9000).toString();

    await Otp.create({
        email,
        otp,
        createdAt: new Date(),
        expiresAt: new Date(Date.now() + 15 * 60 * 1000), // 15 minutes expiry
    });

    await sendEmail({
        to: email,
        subject: "Password Reset OTP",
        message: `<h1>Your OTP: ${otp}</h1><p>Valid for 15 minutes.</p>`,
    });

    res.json({ message: "OTP sent to your email" });
});


// Verify OTP
exports.verifyOTP = asyncHandler(async (req, res) => {
    const { email, otp } = req.body;
    const { isError, error } = checkEmpty({ email, otp });
    if (isError) return res.status(400).json({ message: "Email and OTP are required", error });

    const otpRecord = await Otp.findOne({
        email,
        otp,
        expiresAt: { $gt: new Date() },
    });

    if (!otpRecord) return res.status(400).json({ message: "Invalid or expired OTP" });

    res.json({ message: "OTP verified successfully" });
});


// Reset Password
exports.resetPassword = asyncHandler(async (req, res) => {
    const { email, newPassword } = req.body;
    const { isError, error } = checkEmpty({ email, newPassword });
    if (isError) return res.status(400).json({ message: "Email and new password are required", error });

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await Auth.findOneAndUpdate({ email }, { password: hashedPassword });
    await Otp.deleteMany({ email });

    res.json({ message: "Password reset successfully" });
});
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
