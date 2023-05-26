const Book = require("../models/Book");

exports.getAllBooks = (req, res, next) => {
  Book.find()
    .then((things) => res.status(200).json(things))
    .catch((error) =>
      res.status(400).json({
        error,
      })
    );
};

exports.getBookById = (req, res, next) => {};

exports.getBookWithBestRating = (req, res, next) => {};

exports.createNewBook = (req, res, next) => {
  const bookObject = JSON.parse(req.body.book);

  //on supprime ici les éléments sensibles venant du client (ne jamais faire confiance)...
  delete bookObject._id;
  delete bookObject._userId;
  //...et on récupère l'id du user via le jwt
  const book = new Book({
    ...bookObject,
    userId: req.auth.userId,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });

  book
    .save()
    .then(() => {
      res.status(201).json({ message: "Nouveau livre créé avec succès" });
    })
    .catch((error) => res.status(400).json({ error }));
};

exports.updateBookById = (req, res, next) => {};

exports.deleteBookById = (req, res, next) => {};

exports.addBookRating = (req, res, next) => {};
