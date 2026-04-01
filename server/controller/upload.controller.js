const cloudinary = require("../utils/cloudinary.config");
const fs = require("fs");
const UploadModel = require("../models/ImageModel");

// helper function for upload
const uploadToCloudinary = async (filePath) => {
    return await cloudinary.uploader.upload(filePath, {
        folder: "uploads"
    });
};

const uploadFiles = async (req, res) => {
    try {
        const files = req.files;

        let data = {
            photo: "",
            images: [],
            documents: [],
            other: []
        };

        // single photo
        if (files.photo) {
            const result = await uploadToCloudinary(files.photo[0].path);
            data.photo = result.secure_url;

            fs.unlinkSync(files.photo[0].path);
        }

        // multiple images
        if (files.images) {
            for (let file of files.images) {
                const result = await uploadToCloudinary(file.path);
                data.images.push(result.secure_url);

                fs.unlinkSync(file.path);
            }
        }

        // documents
        if (files.documents) {
            for (let file of files.documents) {
                const result = await uploadToCloudinary(file.path);
                data.documents.push(result.secure_url);

                fs.unlinkSync(file.path);
            }
        }

        // other files
        if (files.other) {
            for (let file of files.other) {
                const result = await uploadToCloudinary(file.path);
                data.other.push(result.secure_url);

                fs.unlinkSync(file.path);
            }
        }

        // save to MongoDB
        const savedData = await UploadModel.create(data);

        res.status(200).json({
            success: true,
            message: "Files uploaded successfully",
            data: savedData
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Upload failed",
            error: error.message
        });
    }
};

module.exports = { uploadFiles };