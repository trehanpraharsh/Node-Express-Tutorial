const http = require("http");

// const server = http.createServer(function (req, res) {
//   res.end("Welcome");
// });

const server = http.createServer();

//? Listening to request using EventEmitter
// emits request event
// subscribe to it / listen to it/ respond to it
server.on("request", function (req, res) {
  res.end("Welcome");
});

server.listen(6969, function () {
  console.log("Server is running...");
});
