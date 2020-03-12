//Diagonal Line Art 
const RECT_WIDTH = 10;
const RECT_HEIGHT = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  randomSeed(0);
  drawRowRGB(height*0.2);
}

function drawRowRGB(yPos){
  colorMode(RGB,255);
  for(let x = 0; x < width; x += RECT_WIDTH){
    fill(random(255), random(255), random(255));
    rect(x, yPos, RECT_WIDTH, RECT_HEIGHT);
  }
}

function border(){
  strokeWeight(15);
  rect(0,0,width,height);
  strokeWeight(2);
}
