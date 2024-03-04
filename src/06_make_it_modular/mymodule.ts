const fs3 = require('fs')
const path3 = require('path')

module.exports = function (dir: string, filterStr: string, callback: any) { //exports a function that takes three arguments: the directory path (dir), the filter string (filterStr), and a callback function (callback)

  fs3.readdir(dir, function (err: Error, data: string[]) { // read the contents of the directory asynchronously
    if (err)
      return callback(err)

    data = data.filter(function (file) { // filter the list of files
      return path3.extname(file) === '.' + filterStr // check if the file extension matches the filter string
    })

    callback(null, data)
  })
}