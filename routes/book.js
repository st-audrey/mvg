const express = require("express");
const auth = require("../middleware/auth");
const bookController = require("../controllers/book");
const multer = require("../middleware/multer-config");
const sharp = require("../middleware/sharp-config");
const router = express.Router();

//Route
/**
 * @swagger
 * path:
 * /api/books/bestrating:
 *  get:
 *      summary: get the 3 best rated books
 *      description: Return an array of 3 book object with the best rating.
 *      responses:
 *          '200':
 *              description: successfull response
 *          '400':
 *              description: bad request
 */
router.get("/bestrating", bookController.getBooksWithBestRating);

/**
 * @swagger
 * path:
 * /api/books:
 *  get:
 *      summary: get all the books
 *      description: Return an array of book object.
 *      responses:
 *          '200':
 *              description: successfull response
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Book'
 *          '400':
 *              description: bad request
 */
router.get("/", bookController.getAllBooks);

/**
 * @swagger
 * path:
 * /api/books/:id/rating:
 *  post:
 *      summary: rate a book
 *      description: Difine rating (between 0 and 5) for a book from a user ID.
 *      responses:
 *          '200':
 *              description: successfull response
 *          '400':
 *              description: bad request
 *          '401':
 *              description: book already rated by this user
 */

router.post("/:id/rating", auth, bookController.addBookRating);

/**
 * @swagger
 * path:
 * /api/books/{bookId}:
 *  get:
 *      summary: get a book by id
 *      description: Return book with given id.
 *      parameters:
 *       - in: path
 *         name: bookId
 *         schema:
 *           type: integer
 *           required: true
 *      responses:
 *          '200':
 *              description: successfull response
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Book'
 *          '404':
 *              description: not found
 */
router.get("/:id", bookController.getBookById);

/**
 * @swagger
 * path:
 * /api/books:
 *  post:
 *      summary: new book
 *      description: Create new book.
 *      responses:
 *          '201':
 *              description: successfully created
 *              schema:
 *                  type: string
 *                  example: "new book successfully created"
 *          '400':
 *              description: error during creation
 */
router.post("/", auth, multer, sharp, bookController.createNewBook);

/**
 * @swagger
 * path:
 * /api/books/{bookId}:
 *  put:
 *      summary: update book
 *      description: Update book with given book id.
 *      parameters:
 *       - in: path
 *         name: bookId
 *         schema:
 *           type: integer
 *           required: true
 *      responses:
 *          '200':
 *              description: successfully modified
 *              schema:
 *                  type: string
 *                  example: "new book successfully modified"
 *          '400':
 *              description: error during creation
 *          '401':
 *              description: not athorized
 */
router.put("/:id", auth, multer, sharp, bookController.updateBookById);

/**
 * @swagger
 * path:
 * /api/books/{bookId}:
 *  delete:
 *      summary: delete a book
 *      description: Supprime le livre avec l'_id fourni ainsi que l’image associée.
 *      parameters:
 *       - in: path
 *         name: bookId
 *         schema:
 *           type: integer
 *           required: true
 *      responses:
 *          '200':
 *              description: successfully deleted
 *              schema:
 *                  type: string
 *                  example: "book successfully deleted"
 *          '500':
 *              description: error during deletion
 *          '401':
 *              description: not athorized
 */
router.delete("/:id", auth, bookController.deleteBookById);

module.exports = router;
