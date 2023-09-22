//* We can solve the problem of passing the middleware function into each get method by using app.use as this is use to pass something as a middleware.

const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

//? We can also pass another parameter into this before the function which is the path.
//? Eg:- if we passs '/api' as the path then the middleware will only work for url/api/<anything>, and not be applicable for other routes
//* To execute multiple middleware functions, we place them in an array and pass in 'app.use'. The order that we pass the function in the array is the order it gets executed in.
app.use("/api", [authorize, logger]);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/api/products", (req, res) => {
  res.send("Products Page");
});

app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items Page");
});

app.listen(6969, () => {
  console.log("Server is running on port 6969...");
});
