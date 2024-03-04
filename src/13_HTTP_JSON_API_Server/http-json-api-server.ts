const http5 = require('http');
const port5 = process.argv[2]

const server5 = http5.createServer((request: any, response: any) => {
 
    http5
    let result = ''
    if(request.method === 'GET'){
        request.on('data', (chunk: string) => {
            result += chunk.toString();
          });
        
        request.on('end', () => {
            response.writeHead(200, { 'Content-Type': 'aplication/json' });
            response.end(result);
          })

    }else{
        response.status('404')
        response.end('Page not found')

    }
});

server5.listen(port5)