let pursuer;
let target;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pursuer = new Vehicle(100, 100);
  target = new Target(200, 100);
}

function draw() {
  background(150, 0, 225);
  fill(255, 0, 0);
  noStroke();

  let steering = pursuer.pursue(target);
  pursuer.applyForce(steering);

  let distanceBwVehicles = p5.Vector.dist(pursuer.pos, target.pos);
  if (distanceBwVehicles < pursuer.r + target.r) {
    target = new Target(random(width), random(height));
    pursuer.pos.set(width/2, height/2);
  }

  pursuer.edgesReappear();
  pursuer.update();
  pursuer.show();

  target.edgesReappear();
  target.update();
  target.show();
}
