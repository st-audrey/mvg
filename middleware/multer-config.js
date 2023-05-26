const multer = require("multer");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

const storage = multer.diskStorage({
  destination: (reg, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    const nameWithoutSpaces = file.originalname
      .split(" ")
      .join("_")
      .toString()
      .split(".");
    console.log(nameWithoutSpaces);
    const extension = MIME_TYPES[file.mimetype];
    callback(null, nameWithoutSpaces[0] + Date.now() + "." + extension);
  },
});

module.exports = multer({ storage: storage }).single("image");
