"use strict";

const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json()); // middleware
const PORT = process.env.PORT;

const User = require("./models/user");
const userHandler = require("./models/userHandler");
const createBook = require("./models/createBook");

const elijah = new User({
  email: "elijahprom@gmail.com",
  books: [
    { name: "Harry Potter", description: "Goblet of Fire", status: "read" },
    { name: "Harry Potter", description: "Chamber of Secrets", status: "read" },
    {
      name: "Harry Potter",
      description: "Half-Blood Prince",
      status: "reading",
    },
  ],
});
elijah.save();

const ellis = new User({
  email: "dyioan@gmail.com",
  books: [
    { name: "Harry Potter", description: "Goblet of Fire", status: "read" },
    { name: "Harry Potter", description: "Chamber of Secrets", status: "read" },
    {
      name: "Harry Potter",
      description: "Half-Blood Prince",
      status: "reading",
    },
  ],
});
ellis.save();

app.get("/books", userHandler);
app.post("/books", createBook);
// app.delete("/books",deleteBook);
// console.log("elijahs books", elijah);

//MiddleWares
// app.use("/middleware", () => {
//   console.log("this is a middleware running");
// });

//ROUTES
app.get("/", (req, res) => {
  res.send("proof of life");
});

app.listen(PORT, () => console.log(`Server up on ${PORT}`));
