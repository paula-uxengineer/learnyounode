const fs = require('fs');
const path = require('path');
const dir = process.argv[2];
const filterStr = process.argv[3];
function getFiles(dir, filterStr, callback) {
    fs.readdir(dir, function (err, list) {
        if (err)
            return callback(err);
        list = list.filter(function (file) {
            return path.extname(file) === '.' + filterStr;
        });
        callback(null, list);
    });
}
getFiles(dir, filterStr, function (err, list) {
    if (err)
        return console.error('There was an error:', err);
    list.forEach(function (file) {
        console.log(file);
    });
});
