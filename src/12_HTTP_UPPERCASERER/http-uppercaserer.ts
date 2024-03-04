const http4 = require('http');
const port4 = process.argv[2]


const server4 = http4.createServer((request: any, response: any) => {
 
    http4
    let result = ''
    if(request.method === 'POST'){
        request.on('data', (chunk: string) => {
            result += chunk.toString().toUpperCase();
          });
        
        request.on('end', () => {
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.end(result);
          })

    }else{
        response.status('404')
        response.end('Page not found')

    }
});

// console.log(server4())

server4.listen(port4)