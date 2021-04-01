"use strict";

const User = require("../models/user");

async function updateBook(req, res) {
  const index = req.params.index;
  const email = req.query.email;
  const book = {
    name: req.body.bookName,
    description: req.body.description,
    status: req.body.status,
  };
  await User.findOne({ email }, (err, user) => {
    if (err) return console.error(err);
    user.books.splice(parseInt(index), 1, book);
    user.save();
    res.status(200).send(user.books);
  });
}

module.exports = updateBook;
