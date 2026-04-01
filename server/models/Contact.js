const mongoose = require('mongoose')


const contactSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: Number, required: true },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
}, { timestamps: true })

<<<<<<< HEAD
=======

>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
const Contact = mongoose.model('Contact', contactSchema)
module.exports = Contact