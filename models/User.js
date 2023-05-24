const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { String, required: true },
  password: { String, required: true },
});

module.exports = mongoose.model("User", userSchema);
