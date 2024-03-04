const http4 = require('http');
const port4 = process.argv[2]


const server4 = http4.createServer((request: any, response: any) => {
 
    http4
    let result = ''
    if(request.method === 'POST'){
        request.on('data', (chunk: string) => { // if === POST request, listen for data events on the request sequence of data
            result += chunk.toString().toUpperCase();
          });
        
        request.on('end', () => {
            response.writeHead(200, { 'Content-Type': 'text/plain' }); // set the response header with status code 200 and content type 'text/plain'
            response.end(result);
          })

    }else{
        response.status('404') // if !== POST, respond with a 404 error
        response.end('Page not found')

    }
});

// console.log(server4())

server4.listen(port4)