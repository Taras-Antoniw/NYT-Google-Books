const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: Array,
  description: String,
  image: String,
  link: String,
  date: String,
  bookId: String
  
})
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
