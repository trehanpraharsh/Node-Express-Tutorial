//* Most frequently used methods of express are:-
//* app.get - read data (by default all the browsers perform get request)
//* app.post - insert data
//* app.pull - update data
//* app.delete - delete data
//* app.all - works witha all above listed methods
//* app.use - specially designed for the middleware
//* app.listen - used to listen on a particular port, also has a callback function as a second parameter which can be used to console log the port.

const express = require("express");
const app = express();

//? Here we use the get method instead of req.url and we also have the res.send in this instead of write and end.
app.get("/", function (req, res) {
  console.log("user hit the resource");
  res.status(200).send("Home Page");
});

app.get("/about", function (req, res) {
  res.status(200).send("About Page");
});

//! By default if the page can't be found a 404 is sent indeed with the message displayed as Cannot GET /<whatever>
//? This can listen to all types of methods - like in this case whenever we request for the get method to the path which is not defined it will execute

app.all("*", function (req, res) {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(6969, function () {
  console.log("Server is running on port : 6969...");
});
