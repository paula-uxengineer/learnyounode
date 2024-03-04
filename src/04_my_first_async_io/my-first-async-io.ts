var fs = require('fs')  
let path2 : string = process.argv[2]

fs.readFile(path2, (err: Error, contents: Buffer) : void => { // read the contents of the file asynchronously

    var lines = contents.toString().split('\n').length -1 // convert the contents of the file buffer to a string, split it by line breaks, and count the number of lines

    console.log(lines);
});
