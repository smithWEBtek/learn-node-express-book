const http = require('http');

http.createServer(function (req, res) {
  // res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<div><h1>This is HTML in a Node Express server</h1></div>');
}).listen(3000);

console.log('Server started on 3000; ctl+C to terminate');
