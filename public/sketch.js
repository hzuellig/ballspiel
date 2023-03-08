var socket;
var blau;
var rot;
var gelb;
var rosa;
var gruen;

var moves = 7; //anzahl unterschiedliche bewegungen 
// es geht wieder los
//Lina wenn das gsehsch...denn funktioniert :D
//d Lina heds ned gseh
//Lina can you see me?

var settings = {
    start: false,
    finished: false,
    queue: 0,
    ballx: -100,
    bally: window.innerHeight / 2,
    radius: 50,
    stepx: 10,
    stepy: 5
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    socket = io.connect("http://localhost:3000/");
    socket.emit("settings", settings);
    socket.on("canIstart", startDrawing);
    socket.on("settings", setSettings);

    background(0);
<<<<<<< HEAD
    blau = color(#2363EB);
    rot = color(#D22D39); gelb = color(#EBC141); rosa = (#E7909F); gruen = color(#42936C);
=======
    blau = color('#2363EB');
    rot = color('#D22D39');
    gelb = color('#EBC141');
    rosa = color('#E7909F');
    gruen = color('#42936C');
>>>>>>> 98f2a5cc9f5854c123484ee41bb763552406911d

    settings.bally = random(window.innerHeight);
            }

            function draw() {

                if (settings.start == false) {
                    socket.emit("canIstart", settings);
                }
                if (settings.start == true && settings.finished == false) {
                    //draw
                    makeMove();

                    if (settings.ballx > width - settings.radius / 2) {

                        settings.ballx = settings.ballx - width; //zurücksetzen um die eigene Breite

                        socket.emit("next", settings); //start next ball
                        settings.finished = true;
                    }


                }

            }

            function startDrawing(data) {
                settings.start = data.start;
                settings.ballx = data.ballx;
                settings.bally = data.bally;

                //console.log("I got "+settings.ballx+" and "+ settings.start)
            }

            function setSettings(data) {
                settings.socketid = data.socketid;
                settings.queue = data.queue;
                //console.log(settings.queue);
                //setting=data;
            }


<<<<<<< HEAD
            function makeMove() {
                let move = settings.queue % moves;
                //console.log("move "+move)
                switch (move) {
                    case (0):
                        move_1();
                        break;
                    case (1):
                        move_2()
                        break;
                    case (2):
                        move_3()
                        break;
                    case (3):
                        move_4()
                        break;
                    case (4):
                        move_5()
                        break;
                    case (5):
                        move_6()
                        break;
                    case (6):
                        move_7()
                        break;
                }
            }

            function move_1() {
                //hanna
                background(0, 20);
                fill(255, 255, 0);
                noStroke();
                arc(width / 2, height / 2, width, height, 0, PI);

                fill(255, 0, 0);
=======
function makeMove() {
    let move = settings.queue % moves;
    //console.log("move "+move)
    switch (move) {
        case (0):
            move_6();
            break;
        case (1):
            move_2()
            break;
        case (2):
            move_3()
            break;
        case (3):
            move_4()
            break;
        case (4):
            move_5()
            break;
        case (5):
            move_6()
            break;
        case (6):
            move_7()
            break;
    }
}

function move_1() {
    //hanna
    background(0, 20);
    fill(gelb);
    noStroke();
    arc(width / 2, height / 2, width, height, 0, PI);

    fill(rot);
>>>>>>> 98f2a5cc9f5854c123484ee41bb763552406911d

                ellipse(settings.ballx, settings.bally, settings.radius);
                settings.ballx += settings.stepx;
            }

            //mara
            function move_2() {


            }

            //nicole
            function move_3() {

            }

            //sophit
            function move_4() {
                background(155);

            }

            // moritz
            function move_5() {

<<<<<<< HEAD
            }

            //alain
            function move_6() {
=======
//alain
function move_6() {
    background(black);
    fill(green);
    noStroke();
    arc(width / 2, height / 2, width, height, 0, PI);

    fill(255, 0, 0);

    ellipse(settings.ballx, settings.bally, settings.radius);
    settings.ballx += settings.stepx;
>>>>>>> 98f2a5cc9f5854c123484ee41bb763552406911d


            }

            //lina
            function move_7() {

            }