create a basic server and listen on port 3000
write code to console
request headers
request method and url
request from browser on http://localhost:3000/about

var http = require('http');
var server = http.createServer(handleRequest);
function handleRequest(req, res) {
  console.log(req.headers);
  console.log(req.method, req.url)
}

server.listen(3000, 'localhost')
