var http = require('http'); // import the http module to make HTTP requests
var url = process.argv[2];
http.get(url, function (response) {
    response.setEncoding('utf-8');
    response.on('data', function (chunk) {
        console.log(chunk); // write the chunk of data to a new line on the console
    });
    response.on('error', function (error) {
        console.error('Error:', error); // errors that occur during the request
    });
}).on('error', function (error) {
    console.error('Error:', error); // listen for 'error' events on the request itself 
});
