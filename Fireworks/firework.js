function Firework() {
  this.firework = new Particle(random(width), height);
  this.exploded = false;

  this.update = function () {
    if (!this.explpded) {
      this.firework.applyForce(gravity);
      this.firework.update();
      if (this.firework.vel.y >= 0) {
        this.exploded = null;
        this.explode();
      }
    }
  };

  this.explode = function(){
    for(let i = 0; i<= 100; i++){
      var p = new Particle(this.fireworks.pos.x, this.fireworks.pos.y);
    }
  }

  this.show = function () {
    if (this.firework) this.firework.show();
  };
}
