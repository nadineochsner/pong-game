let x;
let y;
let speedX = 2;
let speedY = 5;
let d = 200;

function setup() {
    createCanvas(windowWidth, windowHeight);
    x = random(0, width);
    y = random(0, height);
}

function draw() {
    background(0);
    fill(255,255,255);
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

}


