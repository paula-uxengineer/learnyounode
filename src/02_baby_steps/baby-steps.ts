const arr = process.argv // retrieve command line arguments as an array

export function sumArguments (arr: string[]): number{ // a function to sum the numerical arguments in the array

    let total = 0

    for(let i = 2; i < arr.length; i++){
        total += parseInt(arr[i]) 
    }
    return total
}

const result = sumArguments(arr); //pass the array command line arguments
console.log(result); //print result