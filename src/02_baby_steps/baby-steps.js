"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumarArgumentos = void 0;
var arr = process.argv;
function sumarArgumentos(arr) {
    var node = 0;
    for (var i = 2; i < arr.length; i++) {
        node += parseInt(arr[i]);
    }
    return node;
}
exports.sumarArgumentos = sumarArgumentos;
var resultado = sumarArgumentos(arr);
console.log(resultado);
