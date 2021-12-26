var http= require('http')
var fs = require('fs')
var server = http.createServer(handleRequest)
server.listen(5555)

function handleRequest(req, res){
  if(req.method === 'GET' && req.url === '/file') {
    fs.readFile('./node.html', (err,content)=> {
       if(err) console.log(err)         
       res.setHeader('content-type', 'text/html')
      res.end(content);
    })
  } else if (req.method === 'GET' && req.url === '/stream'){
    res.setheader('content-type', 'text/html')
    fs.createReadStream('./node.html').pipe(res)
  }
  
}
