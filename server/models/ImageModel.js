// server/models/ImageModel.js

const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    photo: String,
    images: [String],
    documents: [String],
    other: [String]
});

module.exports = mongoose.model("Upload", imageSchema);