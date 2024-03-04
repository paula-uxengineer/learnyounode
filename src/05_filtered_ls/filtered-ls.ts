var fs = require('fs')
var path = require('path')

var dir = process.argv[2] // retrieve the directory path 
var filterStr = process.argv[3] // retrieve the filter string (file extension)

function getFiles(dir: string, filterStr: string, callback: any) { // get files in a directory 

  fs.readdir(dir, function (err: string, list: string[]) { // read the contents of the directory asynchronously
    if (err)
      return callback(err)

    list = list.filter(function (file) { // filter the list of files based on the provided filter string from first line arguments
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}

getFiles(dir, filterStr, function (err: string, list: string[]) {
  if (err) // if an error occurs during getting files. log the error
    return console.error('There was an error:', err)

  list.forEach(function (file) { // iterate over the list of files and print each file name
    console.log(file)
  })
})