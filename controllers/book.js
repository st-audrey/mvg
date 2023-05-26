const Book = require("../models/Book");

exports.getAllBooks = (req, res, next) => {
  Book.find()
    .then((books) => res.status(200).json(books))
    .catch((error) =>
      res.status(400).json({
        error,
      })
    );
};

exports.getBookById = (req, res, next) => {
  Book.findOne({ _id: req.params.id })
    .then((book) => res.status(200).json(book))
    .catch((error) => res.status(404).json({ error }));
};

exports.getBooksWithBestRating = (req, res, next) => {
  Book.aggregate([{ $sort: { averageRating: -1 } }])
    .then((books) => {
      booksWithBestRating = books.slice(0, 3);
      res.status(200).json(booksWithBestRating);
    })
    .catch((error) => res.status(400).json({ error }));
};

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

exports.updateBookById = (req, res, next) => {
  //si l'utilisatuer fournit un fichier la modification ne sera pas la même
  const bookObject = req.file
    ? {
        ...JSON.parse(req.body.book),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };

  delete bookObject._userId;
  Book.findOne({ _id: req.params.id })
    .then((book) => {
      if (book.userId != req.auth.userId) {
        res.status(401).json({
          message: "L'utilisateur n'est pas autorisé à faire cette action",
        });
      } else {
        Book.updateOne(
          { _id: req.params.id },
          { ...bookObject, _id: req.params.id }
        )
          .then(() =>
            res.status(200).json({ message: "Le livre à bien été modifié" })
          )
          .catch((error) => res.status(401).json({ error }));
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.deleteBookById = (req, res, next) => {
  Book.deleteOne({ _id: req.params.id })
    .then(() =>
      res.status(200).json({ message: "Le livre a bien été supprimé" })
    )
    .catch((error) => res.status(400).json({ error }));
};

exports.addBookRating = (req, res, next) => {};
