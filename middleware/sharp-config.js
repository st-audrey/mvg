const fs = require("fs");
const sharp = require("sharp");

module.exports = async function process(req, res, next) {
  if (req.file) {
    const nameWithoutSpaces = req.file.originalname
      .split(" ")
      .join("_")
      .toString()
      .split(".");
    filename = nameWithoutSpaces[0] + Date.now() + ".webp";
    const path = `../backend/images/${filename}`;

    await sharp(req.file.buffer).resize(300, 300).toFormat("webp").toFile(path);
    res.locals.filename = filename;
    next();
  } else {
    next();
  }
};
