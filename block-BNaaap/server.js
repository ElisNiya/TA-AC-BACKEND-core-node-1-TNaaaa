create a server on port 4444 and request from browser on localhost:4444
Add statusCode of 201 and headers to send html content to response
Do request on server using different HTTP methods using Postman and write code to check request methods for multiple requests.

var http = require('http')
var server = http.createServer(req, res);
server.listen(4444);
res.statusCode = 201;
res.setHeader('content', 'text/html')
