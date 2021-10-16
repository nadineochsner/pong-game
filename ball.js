let x;
let y;
let speedX = 2;
let speedY = 5;
let d = 200;
let score = 0

function setup() {
    createCanvas(windowWidth, windowHeight);
    x = random(0, width);
    y = random(0, height);
}

function draw() {
    background(0);
    fill(0,0,255);
    rect (mouseX,height-30,60,30);
    rect (mouseX,0-10,60,30);


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
    if ((x > mouseX && x < mouseX + 90) 
    && (y + 10 >= height)) {
    speedX = -speedX;
    speedY = -speedY;
    score++;
}

}


