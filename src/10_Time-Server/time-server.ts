const net = require('net')
const port = process.argv[2]


function date() : string | number{
    
    let resultDate = ''
    
    const date = new Date(); // get the current date and time
    
    const format = (dateNumber: number): string | number => { // function to format a number (add 0 if the number < 9)
        if(dateNumber <= 9){
            return '0' + dateNumber 
        }else{
            return dateNumber
        }
    };
    
    const year = date.getFullYear();
    const month = format(date.getMonth() +1); // adding 1 to month because getMonth() returns zero-based month
    const day = format(date.getDate());
    const hours = format(date.getHours());
    const minutes = format(date.getMinutes());
    
    resultDate = `${year}-${month}-${day} ${hours}:${minutes}\n` // construct the formatted date string === "YYYY-MM-DD hh:mm"
    
    return resultDate
}

const server :any = net.createServer((socket: any) => { // creates a TCP server using the 'createServer' method
    socket.write(date()) // write the current date string to the socket
    socket.end()
});

server.listen(port);