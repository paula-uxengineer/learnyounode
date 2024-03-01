const fs = require('fs');

export const filename = fs.readFileSync(process.argv[2]);

export const read = filename.toString().split("\n").length -1;

console.log(read);