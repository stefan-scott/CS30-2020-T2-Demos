// Basic Geometry and Events Demo
let x,y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
}

function draw() {
  background(100);
  character(x,y);
  keyboardInput();
}

function keyboardInput(){
  if (keyIsPressed === true){
    if (keyCode === LEFT_ARROW){
      x -= 10;
    }
    else if (keyCode === RIGHT_ARROW){
      x += 10;
    } 
  }
}

function keyPressed(){
  

}

function character(x, y){
  fill(255);
  strokeWeight(1);
  ellipse(x,y,50,50); //head
  fill(0,200,0);
  ellipse(x-10, y-10, 10,10); //left eye
  ellipse(x+10, y-10, 10,10);//right eye
  if (mouseIsPressed){
    fill(0);
    ellipse(x, y+10, 10, 10)
  }
  else{
    strokeWeight(3);
    line(x-5, y+10, x+5, y+10);//mouth
  }

}


