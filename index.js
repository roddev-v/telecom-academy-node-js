const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.setHeader("content-type", "text/html");
  res.send("<h1 style='color: red'>Hello world from Express/!</h1>");
});

app.get("/:id", function (req, res) {
  const query = req.query;
  console.log(query);
    res.setHeader("content-type", "text/html");
    res.send("<h1 style='color: red'>Hello world from Express POST API call/!</h1>");
});

app.delete("/:id", function(req, res) {
  res.sendStatus(201);
  res.send("<h1 style='color: red'>Delete API call/!</h1>");
})

app.get("/hello", function(req, res) {
    res.send("<h1 style='color: purple'>Hello world!</h1>");
});

app.get("/hello2", function(req, res) {
    res.send("<h1 style='color: yellow'>Hello world!</h1>");
});

app.get("/hello3", function(req, res) {
    res.send("<h1 style='color: green'>Hello world!</h1>");
});

const PORT = 3000;

app.listen(PORT, function () {
  console.log("Server is running on port " + PORT);
});
