//Diagonal Line Art 

const GRID_SIZE = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function diagonal(x, y, s, dir){
  //dir:  0 → Ascending   1 → Descending
  if(dir === 0){ //Ascending
    line(x - s/2, y + s/2, x + s/2, y - s/2);
  }
  else{ //Descending
    line (x - s/2, y - s/2, x + s/2, y + s/2);
  }
}

function draw() {
  background(220);
  rectMode(CENTER);
  rect(width/2,height/2,GRID_SIZE,GRID_SIZE);
  diagonal(width/2, height/2, GRID_SIZE, 1);
}
