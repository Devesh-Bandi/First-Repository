// Importing necessary modules
const express = require("express");

// Creating a new express app
const app = express();

// Defining the first API endpoint
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Defining the second API endpoint
app.get("/about", (req, res) => {
  res.send("About Page");
});

// Exporting the express instance as default export
module.exports = app;
