const multer = require("multer")
const path = require("path")

const Storage = multer.diskStorage({
    filename: (req, file, cb) => {
        const fn = Date.now() + path.extname(file.originalname)
        cb(null, fn)
    }
})
const Upload = multer({ storage: Storage }).fields([
    { name: "photo", maxCount: 1 },
<<<<<<< HEAD
    { name: "images", maxCount: 10 },
=======
    { name: "images", maxCount: 5 },
>>>>>>> 01b4fc4efdea8eec39f31d81c40f89ea2261f567
    { name: "documents", maxCount: 5 },
    { name: "other", maxCount: 5 },
])
module.exports = { Upload }