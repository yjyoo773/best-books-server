"use strict";
const User = require("./user");

function userHandler(req, res) {
  const email = req.query.email;
  User.find({ email: email }, function (error, items) {
    if (error) return console.error(error);
    res.status(200).send(items.books);
  });
}

module.exports = userHandler;
