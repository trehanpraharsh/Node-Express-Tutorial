const http = require("http");
const { readFileSync } = require("fs");

//storing the data
const page = readFileSync("./navbar-app/index.html");

const server = http.createServer(function (req, res) {
  const url = req.url;
  //Home page
  if (url === "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write(page);
    res.end();
  }
  //About page
  else if (url === "/about") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write("<h1>About Page</h1>");
    res.end();
  }
  //Any other link
  else {
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.write("<h1>Page Not Found</h1>");
    res.end();
  }
});

server.listen(6969);
