const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
});

const BookModel = mongoose.model("Book", bookSchema);

module.exports = BookModel;
