const http2 = require('http')
const url2 = process.argv[2]

let body = ''

http2.get(url2, (response: any) => {
  response.on('data', (content: string) => {
    body += content
  })
  response.on('end', function () {
    console.log(body.length)
    console.log(body)
  })
})