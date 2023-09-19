const express = require("express");
const app = express();

const { products } = require("./data");

//* json method here converts the array that we recieve from data.js into JavaScript Object Notation, so that we can easily read the data from the page and treat it as API.
app.get("/", function (req, res) {
  res.json(products);
});

app.listen(6969, function () {
  console.log("Server is running on port 6969...");
});
