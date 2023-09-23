const express = require("express");
const app = express();

// Importing the router of people
const people = require("./routes/people");

//Importing the router of auth
const auth = require("./routes/auth");

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//* Middleware for the Router having the '/api/people' path
app.use("/api/people", people);

//* Middleware for the Router having the path as '/login'
app.use("/login", auth);

app.listen(6969, function () {
  console.log("Server is running on the port 6969...");
});
