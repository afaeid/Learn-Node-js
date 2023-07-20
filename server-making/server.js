const http = require("http");
 //console.log(http);


var port = 5000;
// var hostname = "127.0.0.1";
var hostname = "127.0.0.1"
var pathname = "/hi.html"
const myServer = http.createServer((req,res)=>{
 res.end("Hello. I am your first server");
});

myServer.listen(port, hostname, pathname, ()=>{
 console.log(`Server is running successfuly at http://${hostname}:${port}/${pathname}`);
})