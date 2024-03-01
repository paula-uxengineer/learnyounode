// const [argumento1, argumento2, argumento3] = process.argv;
// const suma = argumento1 + argumento2 + argumento3;
// console.log(suma);

// console.log(process.argv[2])

const arr = process.argv
// console.log(arr)
export function sumarArgumentos (arr: string[]): number{
    // const arr = Number(process.argv[2]);
    // const arr = (process.argv[2])

    let node = 0

    for(let i = 2; i < arr.length; i++){
        node += parseInt(arr[i]) 

    }
    console.log(node)
    return node
}

const resultado = sumarArgumentos(arr);
console.log(resultado);