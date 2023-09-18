//* There are specific ports with their job assigned to them like 443 is used for secure http comunication or transfer, 20 for file data transfer etc. We can refer Wikipedia on ports to understand more about them. Netlify has port 8080

//* We can also learn about the mime types or media types which are sent through headers in the 'content-type' method by googling anytime

//* The method "response.end()" must be called on every server as this is the must as without this the server will just be listening to thr requests for infinite amount of time and never end or stop.

//* res.writeHead() method allows us to write headers that will be sent, firstly we listen to the status code and then pass the header.

//* We can also pass HTML file or any type of file in the write method, we just need to read the file and pass it down with the appropriate content type in the header.

const http = require("http");

const server = http.createServer(function (req, res) {
  const url = req.url;
  // home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Home Page</h1>");
    res.end();
  }
  // about page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  }
  // error - wrong url
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page Not Found</h1>");
    res.end();
  }
});

server.listen(6969);
