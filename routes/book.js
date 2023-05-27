const express = require("express");
const auth = require("../middleware/auth");
const bookController = require("../controllers/book");
const multer = require("../middleware/multer-config");
const sharp = require("../middleware/sharp-confing");
const router = express.Router();

router.get("/bestrating", bookController.getBooksWithBestRating);
router.get("/", bookController.getAllBooks);
router.post("/:id/rating", auth, bookController.addBookRating);
router.get("/:id", bookController.getBookById);
router.post("/", auth, multer, sharp, bookController.createNewBook);
router.put("/:id", auth, multer, sharp, bookController.updateBookById);
router.delete("/:id", auth, bookController.deleteBookById);

module.exports = router;
