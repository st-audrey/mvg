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

    await sharp(req.file.buffer)
      .resize({
        width: 500,
        height: 500,
        fit: sharp.fit.contain,
        background: { r: 242, g: 227, b: 206, alpha: 0.5 },
      })
      .toFormat("webp")
      .toFile(path);
    res.locals.filename = filename;
    next();
  } else {
    next();
  }
};
