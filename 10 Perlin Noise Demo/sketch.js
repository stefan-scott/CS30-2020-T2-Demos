// Perlin Noise Demo

let x, y, size;
const MAX_CIRCLE_SIZE = 200;

let sizeTime = 10;
let dT = 0.02;

let perlinX = 5;
let perlinY = 100;
let movementdT = 0.1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  size = 50;
}

function draw() {
  background(220);
  moveCirclePerlin();
  drawCircle();
}

function moveCirclePerlin(){
  let xSpeed = noise(perlinX);
  xSpeed = map(xSpeed, 0, 1, -10, 10);
  x += xSpeed;
  if(x < 0) x += width;
  else if (x > width) x -= width;
  perlinX += movementdT;

  let ySpeed = noise(perlinY);
  ySpeed = map(ySpeed, 0, 1, -10, 10);
  y += ySpeed;
  if(y < 0) y+=height;
  else if (y > height) y -= height;
  perlinY += movementdT;

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
