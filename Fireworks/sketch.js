var firework;
var gravity;

function setup() {
  createCanvas(400, 400);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  noFill();
  firework = new Particle(random(width), height);
}

function draw() {
  background(125, 0, 255);
  firework.applyForce(gravity);
  firework.update();
  firework.show();
}
