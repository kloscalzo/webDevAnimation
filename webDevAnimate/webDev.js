//Katharine LoScalzo
//7 November 2016
//Web Dev animation!

var xPos;
var yPos;
var xVel;
var yVel;
var xDir;
var yDir;

function setup() {
    createCanvas(600, 500);
    background(255, 192, 203);

    xPos = 300;
    yPos = 250;
    xVel = 4;
    yVel = 3;
    xDir = 1;
    yDir = 1;
}

function draw() {
    background(255, 192, 203);

    xPos += xVel;
    yPos += yVel;

    if (xPos >= width || xPos <= 0) {
        xDir = -xDir;
        xVel = xVel * xDir;
    }
    
    if (yPos >= height || yPos <= 0) {
        yDir = -yDir;
        yVel = yVel * yDir;
    }

    fill(0);
    ellipse(xPos, yPos, 40, 40);
}
