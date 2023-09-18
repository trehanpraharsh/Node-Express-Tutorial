const http = require("http");

const server = http.createServer(function (req, res) {
  console.log("request event");
  res.end("Hello World");
});

server.listen(6969, function () {
  console.log("Server is listening on port : 6969....");
});
