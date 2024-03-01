const http = require('http')
var url = process.argv[2]

http.get(url, function (response: any) {
    response.setEncoding('utf-8')
    response.on('data', console.log)
    response.on('error', console.log)
}).on('error', console.error)