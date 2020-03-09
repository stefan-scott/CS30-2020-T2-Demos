// Perlin Noise Demo Two

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
}

function drawCircles(){
  for(let x = 0; x < width; x += 25){
    for(let y = 0; y < height; y += 25){
      ellipse(x,y,25,25);
    }
  }
}

function draw() {
  background(220);
  drawCircles();
}
