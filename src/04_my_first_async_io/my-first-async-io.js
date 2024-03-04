var fs = require('fs');
var path2 = process.argv[2];
fs.readFile(path2, function (err, contents) {
    var lines = contents.toString().split('\n').length - 1;
    console.log(lines);
});
