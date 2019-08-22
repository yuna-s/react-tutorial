var http = require('http');
var server = http.createServer(function(req, res) {
  console.log("URL: " + req.url);
  console.log("Method: " + req.method);
  console.log("Header[Content-Type]: " + req.headers['content-type']);
  res.end();
}).listen(8080);
