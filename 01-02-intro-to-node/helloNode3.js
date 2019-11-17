var http = require('http'),
  fs = require('fs');

function serveStaticFile(res, path, contentType, responseCode) {
  if (!responseCode) responseCode = 200;
  fs.readFile(__dirname + path, function (err, data) {
    console.log('__dirname: ', __dirname)
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 - Internal Error');
    } else {
      res.writeHead(responseCode,
        { 'Content-Type': contentType });
      res.end(data);
    }
  });
}

http.createServer(function (req, res) {
  var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  switch (path) {
    case '':
      serveStaticFile(res, '/public/home.html', 'text/html', 201);
      break;
    case '/about':
      serveStaticFile(res, '/public/about.html', 'text/html');
      break;
    case '/public/img/logo.jpg':
      serveStaticFile(res, '/public/img/logo.jpg', 'image/jpeg');
      break;
    case '/public/img/smiley.gif':
      serveStaticFile(res, '/public/img/smiley.gif', 'image/jpeg');
      break;
    case '/data':
      serveStaticFile(res, '/public/data.json', 'application/json');
      break;
    case '/pdf':
      serveStaticFile(res, '/public/NodeExpressBook.pdf', 'application/pdf');
      break;
    default:
      serveStaticFile(res, '/public/404.html', 'text/html', 404);
      break;
  }
}).listen(3000);

console.log('Server started on 3000; ctl+C to terminate');
