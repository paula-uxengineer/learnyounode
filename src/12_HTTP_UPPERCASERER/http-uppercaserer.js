var http4 = require('http');
var port4 = process.argv[2];
var server4 = http4.createServer(function (request, response) {
    http4;
    var result = '';
    if (request.method === 'POST') {
        request.on('data', function (chunk) {
            result += chunk.toString().toUpperCase();
        });
        request.on('end', function () {
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.end(result);
        });
    }
    else {
        response.status('404');
        response.end('Page not found');
    }
});
// console.log(server4())
server4.listen(port4);
