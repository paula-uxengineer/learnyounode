var fs = require('fs')  
let path2 : string = process.argv[2]

fs.readFile(path2, (err: Error, contents: Buffer) : void => {

    var lines = contents.toString().split('\n').length -1

    console.log(lines);
});
