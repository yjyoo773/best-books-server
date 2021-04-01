"use strict";
const User = require("../models/user");

async function createBook(req, res) {
  // console.log("%cfrom createBook, ", req.body, "color: red");
  const email = req.body.email;
  const book = {
    name: req.body.bookName,
    description: req.body.description,
    status: req.body.status,
  };
  console.log(book);
  await User.findOne({ email }, (err, entry) => {
    if (err) return console.error(err);
    entry.books.push(book);
    entry.save();
    console.log("after user", entry.books);
    res.status(200).send(entry.books);
  });
}

module.exports = createBook;
