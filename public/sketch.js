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
};

var mara_moved=false;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    socket = io.connect("http://localhost:3000/");
    socket.emit("settings", settings);
    socket.on("canIstart", startDrawing);
    socket.on("settings", setSettings);

    background(0);
    blau = color('#2363EB');
    rot = color('#D22D39');
    gelb = color('#EBC141');
    rosa = ('#E7909F');
    gruen = color('#42936C');

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
    console.log(settings.queue);
    //setting=data;
}


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

    ellipse(settings.ballx, settings.bally, settings.radius);
    settings.ballx += settings.stepx;
}

//mara
function move_2() {
    background(0,20);
    fill(gruen);
    noStroke();
    arc(width / 2, height / 2, width, height, radians(-70),     radians(180));
    fill(rosa);
    settings.stepy = sin(radians(70))*3
    settings.stepx = cos(radians(70))*3
  
    if(mara_moved==false){
      settings.bally=width / 2 -63
      mara_moved=true
    }
    rect(settings.ballx, settings.bally, settings.radius);
    if (settings.ballx < width / 2) {
      settings.ballx += 10;
    } else {
      settings.ballx += settings.stepx;
      settings.bally += settings.stepy*-1;
    }
  
  }


//nicole
function move_3() {

}

//sophit
function move_4() {
   // background(155);
   
}

// moritz
function move_5() {
    background(0);

    var stepSize = width / 10;

    // draw the moving object
    rectMode(CENTER);
    fill(blau);
    rect(frameCount*2 % width + stepSize, stepSize*2 + stepSize/2, stepSize, stepSize);
    fill(rot);
    rect(frameCount*2 % width + stepSize*2, stepSize*3 + stepSize/2, stepSize, stepSize);
    fill(rosa);
    rect(frameCount*2 % width + stepSize*3, stepSize*4 + stepSize/2, stepSize, stepSize);

    fill(gruen);
    rect(stepSize*2, stepSize*2 - stepSize/2, stepSize*4, stepSize);
    rect(stepSize*7, stepSize*6 - stepSize/2, stepSize*4, stepSize);


    // draw the static elements
    stroke(255);
    strokeWeight(4);
    noFill();
  
    // draw horizontal lines
    for (let i = 0; i <= 7; i++) {
      const y = i * stepSize;
      line(0, y, width, y);
    }
  
    // draw vertical lines
    for (let i = 0; i <= 10; i++) {
      const x = i * stepSize;
      line(x, 0, x, height);
    }
}

//alain
function move_6() {


}

//lina
function move_7() {

}