// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let r = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  print(frameCount);
  background(0);
  fill(r,0,0);
  stroke(255);
  ellipse(mouseX,mouseY, 40, 40);
}

function mousePressed(){
  if (r === 0){
    r = 255;
  }
  else{
    r = 0;
  } 
}
