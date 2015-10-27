var http = require('http');
var fs = require('fs');
var index = fs.readFileSync(__dirname + '/index.html');

function handler(req, res) {
  if (req.url === '/') {
    res.end(index);
  }
}
http.createServer(handler).listen(2000);
console.log('listening on 2000');
