"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.read = exports.filename = void 0;
var fs = require('fs');
exports.filename = fs.readFileSync(process.argv[2]);
exports.read = exports.filename.toString().split("\n").length - 1;
console.log(exports.read);
