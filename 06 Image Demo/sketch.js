// Image Demo

let lionL, lionR;
let movingLeft = true;
let pinImages = [];
let pinFrame = 0;

function preload() {
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
  for (let i = 0; i < 9; i++) {
    pinImages.push(loadImage("assets/pin-0" + i + ".png")); //0
  }
}

function determineDirection() {
  if (pmouseX < mouseX) {
    //which way? Moving right
    movingLeft = false;
  }
  else if (pmouseX > mouseX) {
    //moving left
    movingLeft = true;
  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  noCursor();
  frameRate(240);
}

function draw() {
  print(movingLeft);
  background(220);
  determineDirection();


  if (movingLeft) {
    image(lionL, mouseX, mouseY, 130, 90);
  }
  else {
    image(lionR, mouseX, mouseY, 130, 90);
  }

  //Code for the PinWheels
  
  image(pinImages[pinFrame], width/2, height/2);

  let speedChange = map(mouseX, 0, width,1,4);
  if(frameCount % int(speedChange) === 0){
    pinFrame ++;
    if (pinFrame > 8) pinFrame = 0;
  }



}
