//* HTTP Module

const http = require("http");

//? Syntax for createServer method :- http.createServer(callback (request, response))
const server = http.createServer(function (req, res) {
  //   console.log(req);
  if (req.url === "/") {
    res.end("Hello there! Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Here is a short history about us");
  } else {
    res.end(`
    <h1>OOPS!</h1>
    <p>We couldn't find the page you are looking for :(</p>
    <a href='/'>Back Home</a>
  `);
  }
});

//! To make server listen to a port
//? Syntax :- server.listen(port, callback-fnct)
server.listen(6969, function () {
  console.log("Server is Listening...");
});
