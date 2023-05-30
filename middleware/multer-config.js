const multer = require("multer");

const storage = multer.memoryStorage({
  destination: (reg, file, callback) => {
    callback(null, "images");
  },
});

module.exports = multer({ storage: storage }).single("image");
