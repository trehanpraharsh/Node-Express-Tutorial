const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
const morgan = require("morgan");

//* request => middleware => response

//* 1) use vs route
//* 2) options - our own / express / third party

//? We can also pass this in between the path and the callback function in the get method if we just want it to pass for a specific url and not all the routes
// app.use([logger, authorize]);
// app.use(express.static("./public"));
app.use(morgan("tiny"));

app.get("/", function (req, res) {
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/api/products", function (req, res) {
  res.send("Products Page");
});

app.get("/api/items", function (req, res) {
  console.log(req.user);
  res.send("Items Page");
});

app.listen(6969, () => {
  console.log("Server is running on port 6969...");
});
