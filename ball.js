let x; 
let y;
let speedX = 7;
let speedY = 10;
let d = 200;
let score = 0
let colorBG = 0;
let paddleWidth = 100;
let paddleHeight = 30;

function setup() {
    createCanvas(windowWidth, windowHeight);
    x = random(0, width);
    y = random(0, height);
}

function draw() {
    R = mouseX/2; // farbe hintergrund random wechsel
    background(colorBG);
    fill(R,120,120);
    rect (mouseX,height-30,paddleWidth,paddleHeight);
    //rect (mouseX,0-10,paddleWidth,paddleHeight);


    //Score
    fill(255,255,255);
    textSize(50);
    let cWidth = textWidth("Score:");
    text("Score: " + score, windowWidth/2 - cWidth/2, windowHeight/2);

    
    // Farbe des Balls
    fill(255, 0, 255);
    noStroke();     
    circle (x, y, d);

    x = x + speedX;
    y = y + speedY;

    if (x > width - d/2 || x < d/2) {
        speedX = -speedX;
        colorBG = 100;
    }

    if (y > height - d/2 || y < d/2) {
        speedY = -speedY;
        colorBG = 0;
    }

    // Schlag/Score

    if ((x > mouseX && x < mouseX + paddleWidth) 
    && (y + (d/2) >= windowHeight - paddleHeight)) {
    speedX = -speedX;
    speedY = -speedY;
    score++;
    }

    if (mouseIsPressed) {
        circle(x, y, d*2);
      } else {
        circle(x, y, d);
      }

}


