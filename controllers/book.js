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

exports.getBookById = (req, res, next) => {
  // Book.find()
  //   .then((things) => res.status(200).json(things))
  //   .catch((error) =>
  //     res.status(400).json({
  //       error,
  //     })
  //   );
};

exports.getBookWithBestRating = (req, res, next) => {
  // Book.find()
  //   .then((things) => res.status(200).json(things))
  //   .catch((error) =>
  //     res.status(400).json({
  //       error,
  //     })
  //   );
};

exports.createNewBook = (req, res, next) => {
  // Book.find()
  //   .then((things) => res.status(200).json(things))
  //   .catch((error) =>
  //     res.status(400).json({
  //       error,
  //     })
  //   );
};

exports.updateBookById = (req, res, next) => {
  // Book.find()
  //   .then((things) => res.status(200).json(things))
  //   .catch((error) =>
  //     res.status(400).json({
  //       error,
  //     })
  //   );
};

exports.deleteBookById = (req, res, next) => {
  // Book.find()
  //   .then((things) => res.status(200).json(things))
  //   .catch((error) =>
  //     res.status(400).json({
  //       error,
  //     })
  //   );
};

exports.addBookRating = (req, res, next) => {
  // Book.find()
  //   .then((things) => res.status(200).json(things))
  //   .catch((error) =>
  //     res.status(400).json({
  //       error,
  //     })
  //   );
};
