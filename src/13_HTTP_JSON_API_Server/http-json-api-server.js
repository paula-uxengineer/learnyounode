var http5 = require('http');
var url5 = require('url');
var port5 = process.argv[2];
function parsetime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    };
}
function unixtime(time) {
    var timeObject = {
        unixtime: time.getTime()
    };
    return timeObject;
}
var server5 = http5.createServer(function (request, response) {
    var urlObject = new URL(request.url, "http://localhost:".concat(port5)); // Using the new URL constructor creates a new URL object from the requested URL, using an optional base (`http://localhost:${port5}`)) to resolve the URL if it is relative.
    var date = urlObject.searchParams.get('iso'); // Get the 'iso' parameter from the URL, which should contain an ISO 8601 timestamp
    var time = new Date(date || ''); // Create a date object from the function timestamp
    var result = {};
    if (request.method === 'GET' && urlObject.pathname === '/api/parsetime') {
        result = parsetime(time);
    }
    else if (request.method === 'GET' && urlObject.pathname === '/api/unixtime') {
        result = unixtime(time);
    }
    else {
        response.writeHead(404, { 'Content-type': 'applcation/json' }); // 404 response if route not found
        response.end('Not found');
    }
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(result));
});
server5.listen(port5);
