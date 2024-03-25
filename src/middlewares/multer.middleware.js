import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
        const filename = `${Date.now()}_${file.originalname.replace(/ /g, "_")}`
        cb(null, filename)
    }
})

export const upload = multer({ storage });