const mongoose = require('mongoose')


const AuthSchema = new mongoose.Schema({
    Name: { type: String, required: true },
<<<<<<< HEAD
    email: { type: String, required: true, unique: true },
    mobile: { type: Number, required: true, unique: true },
=======
    email: { type: String, required: true },
    mobile: { type: Number, required: true },
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
    password: { type: String, required: true },
    otp: { type: String },
}, { timestamps: true })


const Auth = mongoose.model('Auth', AuthSchema)
module.exports = Auth