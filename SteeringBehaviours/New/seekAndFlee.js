function setup() {
  createCanvas(windowWidth, windowHeight);
  vehicle = new Vehicle(100, 100);
}

function draw() {
  background(150, 0, 225);
  fill(255, 0, 0);
  noStroke();
  target = createVector(mouseX, mouseY);
  circle(target.x, target.y, 32);
  let seek = vehicle.seek(target);
  vehicle.applyForce(seek)

  vehicle.update();
  vehicle.show();

}
