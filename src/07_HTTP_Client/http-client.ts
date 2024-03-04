const http = require('http'); // import the http module to make HTTP requests
const url = process.argv[2];

http.get(url, (response: any) => {

    response.setEncoding('utf-8');

    response.on('data', (chunk: string) => {
        console.log(chunk); // write the chunk of data to a new line on the console
    });

    response.on('error', (error: Error) => {
        console.error('Error:', error); // errors that occur during the request
    });
}).on('error', (error: Error) => {
    console.error('Error:', error); // listen for 'error' events on the request itself 
});
