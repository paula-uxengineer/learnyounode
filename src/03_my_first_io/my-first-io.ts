const fs = require('fs');

export const filename = fs.readFileSync(process.argv[2]); // read the contents of the file synchronously 

export const read = filename.toString().split("\n").length -1; // convert the contents of the file to a string, split it by line breaks, and count the number of lines

console.log(read);