function Vehicle(x, y) {
  this.pos = createVector(x, y);
  this.target = createVector(x, y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.r = 8;
  this.maxSpeed = 5;
  this.maxForce = 1;   
}

Vehicle.prototype.behaviors = function () {
  var seek = this.seek(this.target);
  this.applyForce(this.seek);
};

Vehicle.prototype.applyForce = function (f) {
  this.acc.add(f);
};

Vehicle.prototype.update = function () {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
};

Vehicle.prototype.show = function () {
  stroke(255);
  strokeWeight(4);
  point(this.pos.x, this.pos.y);
};

Vehicle.prototype.seek = function (target) {
  var desired = p5.Vector.sub(target, this.pos);
  desired.setMag(this.maxSpeed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxForce);
  return steer;
};
