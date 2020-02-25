// Map Demo

let keyMap = new Map(); 

function keyPressed(){
  if (key === "a"){
    keyMap.set("red", 5);
  }
  if (key === "s"){
    keyMap.set("green", 5);
  }
  if (key === "d"){
    keyMap.set("blue", 5);
  }
  print(keyMap);
}

function renderMap(){
  let count = 0;
  for (let item of keyMap){
    //item is a mini array: [0]-> key  [1]->value
    let x = 50 + count*100;

    line(x, height/2, x, height/2 - item[1] );
    count++;
  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(25);
}

function draw() {
  background(220);
  renderMap();
}
