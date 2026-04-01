const express = require("express");
const router = express.Router();

const { Upload } = require("../utils/upload"); // tuza multer file
const { uploadFiles } = require("../controller/upload.controller");
const { getAllUploads } = require("../controller/getphoto.controller");

router.post("/upload", Upload, uploadFiles);

router.get("/getallphotos", getAllUploads);

module.exports = router;