const filterFn = require('./mymodule.ts')
const dir3 = process.argv[2] // get the directory path from the command line arguments
const filterStr3 = process.argv[3] // get the filter string from the command line arguments

filterFn(dir3, filterStr3, (err: string, list: string[]) => {

  if (err) // if an error occurs during filtering, log the error to the console
    return console.error('There was an error:', err)

  list.forEach(function (file) { // iterate over the list of filtered files and print each file name to the console
    console.log(file)
  })
})