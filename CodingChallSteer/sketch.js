var font;
var vehicles = [];
var noOfLoops;

function preload() {
  font = loadFont("asdf.otf");
}

function none() {}

function err() {
  console.log("This did not work. Something went wrong.");
}

function setup() {
  createCanvas(600, 300);
  background(125, 0, 255);
  textFont(font);
  var points = font.textToPoints("train", 100, 200, 192, {
    sampleFactor: 0.15,
    // simplifyThreshold: 0.05
  });
  console.log(points);
  for (let i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    // stroke(255);
    // strokeWeight(4);
    // point(pt.x, pt.y);
  }
}

function draw() {
  background(125, 0, 255);
  for (let i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}
