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
