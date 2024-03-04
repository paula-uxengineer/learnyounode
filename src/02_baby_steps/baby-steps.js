"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumArguments = void 0;
var arr = process.argv; // retrieve command line arguments as an array
function sumArguments(arr) {
    var total = 0;
    for (var i = 2; i < arr.length; i++) {
        total += parseInt(arr[i]);
    }
    return total;
}
exports.sumArguments = sumArguments;
var result = sumArguments(arr); //pass the array command line arguments
console.log(result); //print result
