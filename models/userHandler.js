"use strict";
const User = require("./user");

async function userHandler(request, response) {
  const email = request.query.email;
  // console.log({email})
  await User.find({email: email}, function (err, items) {
      if (err) return console.error(err);
      // console.log(items[0].books);
      response.status(200).send(items[0].books);
  })
}

module.exports = userHandler;
