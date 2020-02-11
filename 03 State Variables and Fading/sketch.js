// State Variables Demo

let onLeft, onRight; //Boolean State variables
let leftFade = 0;
let rightFade = 0;
const FADE_SPEED = 10; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  onLeft = true;
  onRight = false;
}

function updateCurrentSide(){
//update the state variables to represent which side
//of the canvas the mouse cursor is presently on.
  if(mouseX < width/2){
    //mouse is on the LEFT
    onLeft = true;
    onRight = false;
  }
  else{
    //mouse is on the right
    onRight = true;
    onLeft = false;
  }
}

function renderRectangles(){
  //draw two rectangles of varying fill values on the screen
  if(onLeft){  //onLeft === true
    fill(200,100,100, leftFade);
    leftFade += FADE_SPEED;
  }
  else {
    fill(255);
    leftFade = 0;
  }
  rect(0,0,width/2,height);
  if(onRight){
    fill(50,230,110, rightFade);
    rightFade += FADE_SPEED;
  }
  else {
    fill(255);
    rightFade = 0;
  }
  rect(width/2,0, width/2, height);
}

function draw() {
  background(220);
  updateCurrentSide();
  //print("Left: " + onLeft + "   Right: " + onRight);
  renderRectangles();
  if (mouseX > width*.25 && mouseX < width*.75 && mouseY > height*.25 && mouseY < height*.75){
    fill(80,160,240,120);
  }
  else{
    fill(20,200,20,120);
  }
  rect(width*.25, height*.25,width/2,height/2);
}
