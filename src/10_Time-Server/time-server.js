var net = require('net');
var port = process.argv[2];
function date() {
    var resultDate = '';
    var date = new Date();
    var format = function (dateNumber) {
        if (dateNumber <= 9) {
            return '0' + dateNumber; //add 0 if the number < 9
        }
        else {
            return dateNumber;
        }
    };
    var year = date.getFullYear();
    var month = format(date.getMonth() + 1);
    var day = format(date.getDate());
    var hours = format(date.getHours());
    var minutes = format(date.getMinutes());
    resultDate = "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes, "\n");
    return resultDate;
}
var server = net.createServer(function (socket) {
    socket.write(date());
    socket.end();
});
server.listen(port);
