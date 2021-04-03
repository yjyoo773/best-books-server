"use strict";
const User = require("../models/user");

async function deleteBook(req, res) {
  const index = req.params.index;
  const email = req.query.email;
  console.log("my index", index);
  await User.findOne({ email }, (error, entry) => {
    if (error) return console.error(error);
    const newArray = entry.books.filter((book, i) => {
      console.log("something", i, index);
      return i !== parseInt(index);
    });
    console.log(newArray);
    entry.books = newArray;
    entry.save();
    res.status(200).send("success!");
  });
}

module.exports = deleteBook;
