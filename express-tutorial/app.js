//* We can solve the problem of passing the middleware function into each get method by using app.use as this is use to pass something as a middleware.

const express = require("express");
const app = express();
const logger = require("./logger");

//? We can also pass another parameter into this before the function which is the path.
//? Eg:- if we passs '/api' as the path then the middleware will only work for url/api/<anything>, and not be applicable for other routes
app.use(logger);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(6969, () => {
  console.log("Server is running on port 6969...");
});
