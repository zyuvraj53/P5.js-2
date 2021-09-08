var firework;

function setup() {
  createCanvas(400, 400);
  stroke(255);
  strokeWeight(4);
  noFill();
  firework = new Particle(200, 150);
}

function draw() {
  background(125, 0, 255);
  firework.update();
  firework.show();
}
