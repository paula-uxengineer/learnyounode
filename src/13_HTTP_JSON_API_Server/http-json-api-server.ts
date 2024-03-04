const http5 = require('http');
var url5 = require('url');
const port5 = process.argv[2];

function parsetime (time: Date) { /// Create a date object from the timestamp
    return {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    }
}

function unixtime(time: Date) {  // Function to convert a date into Unix time (milliseconds since 1970)
    const timeObject = {
      unixtime: time.getTime()
    };

    return timeObject;
}

const server5 = http5.createServer((request: any, response: any) => {
 
    const urlObject = new URL(request.url!, `http://localhost:${port5}`); // Using the new URL constructor creates a new URL object from the requested URL, using an optional base (`http://localhost:${port5}`)) to resolve the URL if it is relative.

    const date = urlObject.searchParams.get('iso'); // Get the 'iso' parameter from the URL, which should contain an ISO 8601 timestamp
    const time = new Date(date || ''); // Create a date object from the function timestamp

    let result = {}

    if (request.method === 'GET' && urlObject.pathname === '/api/parsetime') {
        result = parsetime(time); 

    } else if (
        request.method === 'GET' && urlObject.pathname === '/api/unixtime'
    ){
        result = unixtime(time);

    } else {
        response.writeHead(404, { 'Content-type': 'applcation/json' }); // 404 response if route not found
        response.end('Not found');
    }
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(result));
});

server5.listen(port5)