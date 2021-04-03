"use strict";

const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json()); // middleware
const PORT = process.env.PORT;

const User = require("./models/user");
const Books = require("./modules/books")
// const userHandler = require("./modules/userHandler");
// const createBook = require("./modules/createBook");
// const deleteBook = require("./modules/deleteBook");
// const updateBook = require("./modules/updateBook");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//ROUTES
app.get("/", (req, res) => {
  res.send("proof of life");
});
app.get("/books", Books.getBook);
app.post("/books", Books.createBook);
app.delete("/books/:index", Books.deleteBook);
app.put("/books/:index", Books.updateBook);



app.listen(PORT, () => console.log(`Server up on ${PORT}`));
// function test() {
//   // await User.find({})
//   // console.log("server", User.find({}).exec());
//   User.find({}).exec().then(result=>console.log(result))
// }
// test();
