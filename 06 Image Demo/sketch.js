// Image Demo

let lionL, lionR;
let movingLeft = true;

function preload(){
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
}

function determineDirection(){
  if(pmouseX < mouseX){
    //which way? Moving right
    movingLeft = false;
  }
  else if (pmouseX > mouseX){
    //moving left
    movingLeft = true;
  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  noCursor();
}

function draw() {
  print(movingLeft);
  background(220);
  determineDirection();

  
  if(movingLeft){
    image(lionL, mouseX, mouseY, 130, 90);
  }
  else{
    image(lionR, mouseX, mouseY, 130, 90);
  }
  

}
