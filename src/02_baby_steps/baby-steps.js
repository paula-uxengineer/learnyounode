"use strict";
// const [argumento1, argumento2, argumento3] = process.argv;
// const suma = argumento1 + argumento2 + argumento3;
// console.log(suma);
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumarArgumentos = void 0;
// console.log(process.argv[2])
var arr = process.argv;
// console.log(arr)
function sumarArgumentos(arr) {
    // const arr = Number(process.argv[2]);
    // const arr = (process.argv[2])
    var node = 0;
    for (var i = 2; i < arr.length; i++) {
        node += parseInt(arr[i]);
    }
    console.log(node);
    return node;
}
exports.sumarArgumentos = sumarArgumentos;
var resultado = sumarArgumentos(arr);
console.log(resultado);
