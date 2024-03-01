var fs = require('fs')
var path = require('path')

module.exports = function (dir: string, filterStr: string, callback: any) {

  fs.readdir(dir, function (err: string, data: string[]) {
    if (err)
      return callback(err)

    data = data.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, data)
  })
}