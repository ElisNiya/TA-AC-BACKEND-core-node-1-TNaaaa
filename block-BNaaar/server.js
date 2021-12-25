Create a basic http server which is listening on port 5k

handle GET request on '/' and send 'Welcome to homepage' in response in plain text.
handle GET request on '/about' and send response 'this is all about NodeJS' using h2 tag in HTML.
handle POST request on '/about' and send json response {message: this is a post request}.

var http = require('http')
var server = http.createServer(handleRequest)
server.listen(5000)

function handleRequest(req,res){
  if(req.method === 'GET' && req.url === '/'){
    res.setHeader('content-type', 'text/plain')
    res.write('Welcome to homepage')
    res.end()
  } else if(req.method === 'GET' && req.url === '/about'){
    res.setHeader('content-type', 'text/plain')
    res.write('this is all about NodeJS')
    res.end()
  } else if(req.method === 'POST' && req.url === '/about'){
    res.setHeader('content-type', 'application/json')
    res.write('message:this is a post request')
    res.end()
  }
}
