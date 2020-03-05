// Perlin Noise Demo

let x, y, size;
const MAX_CIRCLE_SIZE = 200;

let sizeTime = 10;
let dT = 0.02;

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

function setSizePerlin(){
  size = noise(sizeTime) * MAX_CIRCLE_SIZE;
  sizeTime += dT;
}

function drawCircle(){
  setSizePerlin();
  print(size);
  ellipseMode(CENTER);
  ellipse(x,y,size,size);
}
