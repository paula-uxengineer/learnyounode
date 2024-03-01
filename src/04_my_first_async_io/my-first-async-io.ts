var fs = require('fs')  

fs.readFile(process.argv[2], function checkContents (err: any, contents: any) : void{
    var lines = contents.toString().split('/n').length -1

    var number = +process.argv[3]
 
    if(lines >= number){
        console.log(`This file has${number} or more lines`)
    }else{
        console.log('This file is void')
    }

    console.log(lines)
});