"use strict";

const mongoose = require("mongoose");


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("connected to the database!");
});

const booksSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  status: { type: String },
});
const Books = mongoose.model("books", booksSchema);

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  // books: [{name: String,description:String,status:String}],
  books:[booksSchema],
});


const User = mongoose.model("user", userSchema);
module.exports = User;
