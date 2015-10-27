var https = require('https');
var http = require('http');
var fs = require('fs');
var index = fs.readFileSync(__dirname + '/index.html');
var env = require('env2')('./config.env');

function handler(req, res) {
  if (req.url === '/') {
    res.end('<a href=https://github.com/login/oauth/authorize?client_id=0d1d74a5546e7a7c487c>DANGER!!! USERS MUST LOGIN TO CONTINUE</a>');
  } else if (req.url.match('/login')) {
    res.end('hello world');
  } else {
    var ext = req.url.split('.')[1];
    res.writeHead(200, {
      "Content-Type": "text/" + ext
    });
    res.end(fs.readFileSync(__dirname + req.url));
    //(req.url.match('/login'))
    console.log("req.url-------->", req.url);
    console.log('im logged in');
    res.end('hello world');
  }
}

// function loginHandler(req, res) {
//   console.log('im in the loginhandler');
//   var code = req.url.split('code=')[1];
//   var postData = querystring.stringify({
//     client_id: process.env.client_id,
//     client_secret: process.env.client_secret,
//     code: code
//   });
//   https.request({
//     hostname: 'github.com',
//     path: '/login/oauth/access_token',
//     method: 'POST'
//   }, function(responseFromGithub) {
//     console.log('im in the github response:---->' + responseFromGithub);
//     responseFromGithub.on('data', function(chunk) {
//       var accessToken = chunk.toString().split('access_token=')[1].split('&')[0];
//       console.log(accessToken);
//       var cookie = Math.floor(Math.random() * 100000000);
//       sessions[cookie] = accessToken;
//       console.log(sessions);
//       res.writeHead(200, {
//         "Set-Cookie": 'access=' + cookie
//       });
//       res.end('Logged in');
//     });
//   }).end(postData);
// }

http.createServer(handler).listen(2000);
console.log('listening on 2000');
