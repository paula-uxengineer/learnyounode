var fs8 = require('fs');
var http8 = require('http');
var port8 = process.argv[2];
var path8 = process.argv[3];
var server8 = http8.createServer(function (request, response) {
    // request is used to fetch properties, such as the header and query-string from the request while  
    // response is for sending data to the client, both headers and body.  
    var stream = fs8.createReadStream(path8); // create a readable sequence of data  to read from the file specified by the 'path'
    stream.pipe(response); // pipe the data from the readable stream to the 'response' object, sending it back to the client
});
server8.listen(port8);
