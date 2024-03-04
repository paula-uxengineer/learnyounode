const fs8 = require('fs');
const http8 = require('http')

const port8 = process.argv[2];
const path8 = process.argv[3];

const server8 = http8.createServer((request: any, response:any) => {
// request is used to fetch properties, such as the header and query-string from the request while  
// response is for sending data to the client, both headers and body.  

const stream = fs8.createReadStream(path8); // create a readable sequence of data  to read from the file specified by the 'path'
stream.pipe(response) // pipe the data from the readable stream to the 'response' object, sending it back to the client

});

server8.listen(port8);