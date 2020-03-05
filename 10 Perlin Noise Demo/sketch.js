// Perlin Noise Demo

let x, y, size;
const MAX_CIRCLE_SIZE = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  size = 50;
}

function draw() {
  background(220);
  drawCircle();
}

function setSize(){
  size = random(10, MAX_CIRCLE_SIZE);
}

function drawCircle(){
  setSize();
  ellipseMode(CENTER);
  ellipse(x,y,size,size);
}
