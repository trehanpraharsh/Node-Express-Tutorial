//! Middlewares are function which gets executed during the request to the server
//! request => middleware => response
//* we don't need to pass the request or response object as parameters, express automatically passes them and also gives us a next parameter
//* We can stick the middleware function between route and callback function of app.get method
//* Whenever we are dealing with middleware, we must pass in the next middleware unless we are terminating the whole cycle by sending back a response.
//? Eg:- res.send(<Something>) in the middleware function or just invoke the next() method in the middleware function

const express = require("express");
const app = express();

function logger(req, res, next) {
  const method = req.method;
  const url = req.url;
  const date = new Date().getFullYear();
  console.log(method, url, date);
  next();
}

app.get("/", logger, function (req, res) {
  res.send("Home Page");
});

app.get("/about", logger, function (req, res) {
  res.send("About Page");
});

app.listen(6969, function () {
  console.log("Server is running at port 6969...");
});
