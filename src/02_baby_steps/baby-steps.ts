const arr = process.argv

export function sumarArgumentos (arr: string[]): number{

    let node = 0

    for(let i = 2; i < arr.length; i++){
        node += parseInt(arr[i]) 
    }
    return node
}

const resultado = sumarArgumentos(arr);
console.log(resultado);