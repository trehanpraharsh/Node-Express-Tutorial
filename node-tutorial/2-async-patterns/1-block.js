const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    //* BLOCKING CODE !!!!!
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} and ${j}`);
      }
    }
    res.end("About Page");
  } else {
    res.end("Error Page");
  }
});

server.listen(6969, function () {
  console.log("Server is listening on port : 6969....");
});
