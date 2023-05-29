const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          required: true
 *          format: email
 *        password:
 *          type: string
 *          required: true
 *      example:
 *        email: toto@toto.fr
 *        password: 1234
 */

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
