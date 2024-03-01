var filterFn = require('./mymodule.ts')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err: string, list: string[]) {
  if (err)
    return console.error('There was an error:', err)

  list.forEach(function (file) {
    console.log(file)
  })
})