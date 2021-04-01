"use strict";

const User = require("../models/user");

async function updateBook(req, res) {
  const index = req.params.index;
  const email = req.body.email;
  const book = {
    name: req.body.name,
    description: req.body.description,
    status: req.body.status,
  };
  console.log(book)
  await User.findOne({ email }, (err, user) => {
    if (err) return console.error(err);
    if (!user) return console.error('user not found');
    user.books.splice(parseInt(index), 1, book);
    console.log('updatebook',user)
    user.save();
    res.status(200).send(user.books);
  });
}

module.exports = updateBook;
