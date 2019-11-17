const http = require('http');

http.createServer(function (req, res) {
  // res.writeHead(200, { 'Content-Type': 'text/plain' });
  var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  switch (path) {
    case '':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Homepage');
      break;
    case '/about':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('About');
      break;
    default:
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Not found');
      break;
  }
}).listen(3000);

console.log('Server started on 3000; ctl+C to terminate');
