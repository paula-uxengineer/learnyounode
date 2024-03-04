const http2 = require('http')
const url2 = process.argv[2]

let body = ''

http2.get(url2, (response: any) => { // make an HTTP GET request to the specified URL

  response.on('data', (content: string) => { // listen for 'data' event to receive response data chunks
    body += content
  })

  response.on('end', function () { // listen for 'end' event to indicate the end of the response

    console.log(body.length) // log the entire response once is received
    console.log(body) // log the complete response body to the console
  })
})