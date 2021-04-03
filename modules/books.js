"use strict";

const User = require("../models/user");
const Books = {};

Books.createBook = async (req, res) => {
  const email = req.body.email;
  const book = {
    name: req.body.bookName,
    description: req.body.description,
    status: req.body.status,
  };
  await User.findOne({ email }, (err, entry) => {
    if (err) return console.error(err);
    entry.books.push(book);
    entry.save();
    res.status(200).send(entry.books);
  });
};

Books.getBook = async (req, res) => {
  try {
    const email = req.query.email;
    let items = await User.find({ email });
    res.status(200).send(items[0].books);
  } catch (e) {
    console.error(e);
  }
};

Books.updateBook = async (req, res) => {
  try {
    const index = parseInt(req.params.index);
    const email = req.query.email;
    const book = req.body;
    await User.findOne({ email }, (err, entry) => {
      entry.books.splice(index, 1, book);
      entry.save();
      console.log(entry.books);
      res.status(200).send(entry.books);
    });
  } catch (e) {
    console.error(e);
  }
};

Books.deleteBook = async (req, res) => {
  try {
    const index = parseInt(req.params.index);
    const email = req.query.email;
    await User.findOne({ email }, (err, entry) => {
      entry.books.filter((book, i) => {
        return i !== index;
      });
      entry.save();
      res.status(200).send("Book Deleted");
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = Books;
