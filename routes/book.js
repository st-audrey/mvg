const express = require("express");
const auth = require("../middleware/auth");
const bookController = require("../controllers/book");
const router = express.Router();

router.get("/", bookController.getAllBooks);

router.get("/:id", bookController.getBookById);

router.get("/bestrating", bookController.getBookWithBestRating);

// Capture et enregistre l'image, analyse le livre
// transformé en chaîne de caractères, et l'enregistre
// dans la base de données en définissant
// correctement son ImageUrl.
router.post("/", auth, bookController.createNewBook);
//   const book = new Book({
//     //opérateur 'spread'
//     ...req.body,
//   });
//   book
//     .save()
//     //on doit renvoyer un message sinon expiration de la requête
//     .then(() =>
//       res.status(201).json({
//         message: "Le livre a bien été enregistré dans la base de données",
//       })
//     )
//     .catch((error) =>
//       res.status(400).json({
//         error,
//       })
//     );
// });

router.put("/:id", auth, bookController.updateBookById);

router.delete("/:id", auth, bookController.deleteBookById);

router.post("/:id/rating", auth, bookController.addBookRating);

module.exports = router;
