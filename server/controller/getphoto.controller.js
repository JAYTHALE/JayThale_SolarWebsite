const UploadModel = require("../models/ImageModel");

// GET ALL DATA
const getAllUploads = async (req, res) => {
    try {
        const data = await UploadModel.find().sort({ _id: -1 });

        res.status(200).json({
            success: true,
            total: data.length,
            data: data
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch uploads",
            error: error.message
        });
    }
};

module.exports = { getAllUploads };