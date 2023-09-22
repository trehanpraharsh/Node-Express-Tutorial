const express = require("express");
const app = express();
let { people } = require("./data");

//? Static Assets
app.use(express.static("./methods-public"));

//? 'express.urlencoded()' is a built in middleware function which parses the incoming urlencoded payloads and is based on body parser
//! To parse form data
app.use(express.urlencoded({ extended: false }));

//! To parse Json - After using this now we have access to the name we passed in our JavaScript example of Post Method
app.use(express.json());

//* GET Method - Read Data (by default, it gets executed everytime)
app.get("/api/people", function (req, res) {
  res.status(200).json({ success: true, data: people });
});

//* POST Method - Insert Data
//? Form example
app.post("/login", function (req, res) {
  // console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please Provide Correct Credentials");
});

//? JavaScript Example
app.post("/api/people", function (req, res) {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide Name value" });
  }
  // res.status(201).send("Success"); Don't do this as the return type needs to be same
  res.status(201).json({ success: true, person: name });
});

app.listen(6969, function () {
  console.log("Server is running on the port 6969...");
});
