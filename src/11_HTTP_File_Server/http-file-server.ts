import fs from 'fs';
import http from 'http';

const port = process.argv[2];
const path = process.argv[3];


// You must use the fs.createReadStream() method to stream the file contents to the response.


const server = http.createServer((request, response) => {
// request is used to fetch properties, such as the header and query-string from the request while  
// response is for sending data to the client, both headers and body.  



});

server.listen(port);