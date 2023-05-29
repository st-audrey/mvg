const mongoose = require("mongoose");

/**
 * @swagger
 * components:
 *  schemas:
 *    Book:
 *      type: object
 *      required:
 *        - userId
 *        - title
 *        - author
 *        - imageUrl
 *        - year
 *        - genre
 *        - ratings
 *      properties:
 *        userId:
 *          type: string
 *        title:
 *          type: string
 *        auhtor:
 *          type: string
 *        imageUrl:
 *          type: string
 *        year:
 *          type: integer
 *        genre:
 *          type: string
 *        ratings:
 *          - userId:
 *              type: string
 *            grade:
 *              type: integer
 *        averageRating:
 *              type: integer
 *      example:
 *        userId: dc4ioPJ56
 *        title: Harry Potter à l'école des sorciers
 *        auhtor: J.K.Rowling
 *        imageUrl: toto
 *        year: 1997
 *        genre: Littérature pour enfants
 *        ratings:
 *          - userId: dc4ioPJ56
 *            grade: 4
 *        averageRating: 4
 */

const bookSchema = mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  imageUrl: { type: String, required: true },
  year: { type: Number, required: true },
  genre: { type: String, required: true },
  ratings: [
    {
      userId: { type: String, required: true },
      grade: { type: Number, required: true },
    },
  ],
  averageRating: { type: Number },
});

module.exports = mongoose.model("Book", bookSchema);
