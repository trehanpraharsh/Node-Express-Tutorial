const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    //? Not an efficient way as the headers are written as a single large file which is wayy larger
    // const text = fs.readFileSync("./content/big.txt", "utf-8");
    // res.end(text);
    const fileStream = fs.createReadStream("./content/big.txt", "utf-8");
    fileStream.on("open", function () {
      //? Parses data chunck by chunck so headers are not that large
      fileStream.pipe(res);
    });
    fileStream.on("error", function (err) {
      res.end(err);
    });
  })
  .listen(6969);
