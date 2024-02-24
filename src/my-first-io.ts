const fs = require('fs');

const filename = fs.readFileSync("./cat-file");

const read : string = filename.toString('').split("\n").length(-1);

console.log(read);