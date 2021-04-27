let canvas;
let gouchSlider;

function setup() {
  canvas = createCanvas(800, 600);
  canvas.center("horizontal");
  gouchSlider = createSlider(0, 100, 50);
  gouchSlider.style("width", "300px");
  gouchSlider.center("horizontal");
  gouchSlider.position(gouchSlider.position().x, 620);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function face(posx, posy) {
  noStroke();
  // face
  fill(250, 214, 162);
  square(posx, posy, 350);
  // eyes
  fill(255, 255, 255);
  rect(posx-75, posy-65, 100, 90);
  rect(posx+75, posy-65, 100, 90);
  fill(0, 0, 0);
  circle(posx-75, posy-65, 40);
  circle(posx+75, posy-65, 40);
}

function draw() {
  background(0, 0, 0);
  // face(400+(sin(millis()/300)*30), 300+(sin(millis()/80)*40));
  face(400, 300);
}