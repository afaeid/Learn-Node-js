const http = require("http");

var hostname = "127.0.0.1";
var port = 2000;
var pathname = "dashboard"

var myServer = http.createServer((req, res)=>{
 res.writeHead(202, {"Content-Type": "text/plain"});
 res.write("Hello World");
 res.end();
});

myServer.listen(port, hostname, pathname, ()=>{
 console.log(`Server is running at http://${hostname}:${port}/${pathname}`);
})