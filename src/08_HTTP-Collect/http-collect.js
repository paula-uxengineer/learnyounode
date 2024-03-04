var http2 = require('http');
var url2 = process.argv[2];
var body = '';
http2.get(url2, function (response) {
    response.on('data', function (contentApi) {
        body += contentApi;
    });
    response.on('end', function () {
        console.log(body.length);
        console.log(body);
    });
});
