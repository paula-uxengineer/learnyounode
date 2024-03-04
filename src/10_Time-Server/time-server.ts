const net = require('net')
const port = process.argv[2]


function date() : string | number{
    
    let resultDate = ''
    
    const date = new Date();
    
    const format = (dateNumber: number): string | number => {
        if(dateNumber <= 9){
            return '0' + dateNumber //add 0 if the number < 9
        }else{
            return dateNumber
        }
    };
    
    const year = date.getFullYear();
    const month = format(date.getMonth() +1);
    const day = format(date.getDate());
    const hours = format(date.getHours());
    const minutes = format(date.getMinutes());
    
    resultDate = `${year}-${month}-${day} ${hours}:${minutes}\n`
    
    return resultDate
}

const server :any = net.createServer((socket: any) => {
    socket.write(date())
    socket.end()
});
server.listen(port);