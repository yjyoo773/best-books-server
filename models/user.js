"use strict";

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("connected to the database!");
});

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  books: [],
});
const booksSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  status: { type: String },
});

const User = mongoose.model("user", userSchema);
const Books = mongoose.model("books", booksSchema);
module.exports = User;
