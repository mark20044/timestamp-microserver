var http = require("http");
var url = require("url");

var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  var query = url.parse(req.url, true);
  
  
  
  res.end()
}