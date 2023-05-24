const express = require("express");
const router = express.Router();

const bookController = require("../controllers/book");

router.get("/", bookController.getAllBooks);

// // Capture et enregistre l'image, analyse le livre
// // transformé en chaîne de caractères, et l'enregistre
// // dans la base de données en définissant
// // correctement son ImageUrl.
// app.post("/api/books", (req, res, next) => {
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

module.exports = router;
