const express = require("express");
const auth = require("../middleware/auth");
const bookController = require("../controllers/book");
const multer = require("../middleware/multer-config");
const router = express.Router();

router.get("/bestrating", bookController.getBooksWithBestRating);
router.get("/", bookController.getAllBooks);
router.post("/:id/rating", auth, bookController.addBookRating);
router.get("/:id", bookController.getBookById);
router.post("/", auth, multer, bookController.createNewBook);
router.put("/:id", auth, multer, bookController.updateBookById);
router.delete("/:id", auth, bookController.deleteBookById);

module.exports = router;
