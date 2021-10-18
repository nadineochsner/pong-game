let x;
let y;
let speedX = 3;
let speedY = 6;
let d = 200;
let score = 0

let paddleWidth = 100;
let paddleHeight = 30;

function setup() {
    createCanvas(windowWidth, windowHeight);
    x = random(0, width);
    y = random(0, height);
}

function draw() {
    background(0);
    fill(0,0,255);
    rect (mouseX,height-30,paddleWidth,paddleHeight);
    //rect (mouseX,0-10,paddleWidth,paddleHeight);


    //Score
    fill(255,255,255);
    textSize(20);
    text("Score: " + score, 30, 40);

    
    // Farbe des Balls
    fill(255, 0, 255);
    noStroke();     
    circle (x, y, d);

    x = x + speedX;
    y = y + speedY;

    if (x > width - d/2 || x < d/2) {
        speedX = -speedX;
    }

    if (y > height - d/2 || y < d/2) {
        speedY = -speedY;
    }

    // Schlag/Score

    if ((x > mouseX && x < mouseX + paddleWidth) 
    && (y + (d/2) >= windowHeight - paddleHeight)) {
    speedX = -speedX;
    speedY = -speedY;
    score++;
    
}



}


