const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  userId: { String, required: true },
  title: { String, required: true },
  author: { String, required: true },
  imageUrl: { String, required: true },
  year: { Number, required: true },
  genre: { String, required: true },
  ratings: [
    { userId: { String, required: true }, grade: { Number, required: true } },
  ],
  averageRating: Number,
});

module.exports = mongoose.model("Book", bookSchema);
