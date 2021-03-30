"use strict";

const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = process.env.PORT;

//ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

app.listen(PORT, () => console.log(`Server up on ${PORT}`));
