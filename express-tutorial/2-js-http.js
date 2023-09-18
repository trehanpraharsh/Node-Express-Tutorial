const http = require("http");
const { readFileSync } = require("fs");

//storing the data
//getting all the files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeLogo = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer(function (req, res) {
  const url = req.url;
  //Home page
  if (url === "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write(homePage);
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
  //Styles
  else if (url === "/styles.css") {
    res.writeHead(200, {
      "content-type": "text/css",
    });
    res.write(homeStyles);
    res.end();
  }
  //Logo
  else if (url === "/logo.svg") {
    res.writeHead(200, {
      "content-type": "image/svg+xml",
    });
    res.write(homeLogo);
    res.end();
  }
  //JavaScript logic
  else if (url === "/browser-app.js") {
    res.writeHead(200, {
      "content-type": "text/javascript",
    });
    res.write(homeLogic);
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
