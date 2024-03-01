var fs = require('fs');
var filename = fs.readFileSync(process.argv[2]);
var read = filename.toString().split("\n").length - 1;
console.log(read);
