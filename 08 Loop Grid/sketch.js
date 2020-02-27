// Loop Grid
let gridSpacing = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  circleGrid();
}

function mouseClicked(){
  circleGrid();
}

function circleGrid() {
  for (let y = gridSpacing/2; y < height; y += gridSpacing) {
    for (let x = gridSpacing/2; x < width; x += gridSpacing) {
      let size = random(gridSpacing*0.5, gridSpacing*1.5);
      ellipse(x, y, size, size);
    }
  }
}

function draw() {
  
}
