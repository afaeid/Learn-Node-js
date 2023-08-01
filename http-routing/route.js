const http = require("http");
const fs = require("fs")

var hostname = "127.0.0.1";
var port = 3000;

const sendData = (fileName, statusCode, req, res) => {
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  })
}


const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/home") {
    sendData("pages/index.html", 202, req, res);
  } else if (req.url === "/about") {
    sendData("pages/about.html", 202, req, res);
  } else if (req.url === "/contact") {
    sendData("pages/contact.html", 202, req, res);
  } else {
    sendData("pages/error.html", 404, req, res)
  }

});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}${port}`);
});