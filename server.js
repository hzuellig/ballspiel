var express = require("express");
var app = express();
//var server = app.listen(3000);
let port = process.env.PORT || 8080;        // set our port
var server = app.listen(port);
app.use(express.static("public"));
var socket = require("socket.io");
var io = socket(server);
io.sockets.on("connection", newConnection);


var clientId = 0; //Nummerierung der Clients
var activeScreen = 0;//Keep Track which client is active

console.log ("Flutscht ihwandfrei");

var ball={
    ballx:0,
    bally:0
};

function newConnection(socket) {
   
    socket.on("settings", Msg);

    function Msg(data) {

        let settings = {
            queue: clientId,
            socketid: socket.id
        }
        clientId++;
       
        io.to(socket.id).emit("settings", settings);
    }

    socket.on("canIstart", Msgstart);

    function Msgstart(data) {
        
        if (data.queue == activeScreen) {
            data.start = true;
            if(activeScreen > 0){
                data.ballx = ball.ballx;
                data.bally= ball.bally;
            }
            

            io.to(socket.id).emit("canIstart", data);
        }
    }

    socket.on("next", setNext);

    function setNext(data) {
       ball=data;
       activeScreen = activeScreen + 1;
    }


}
