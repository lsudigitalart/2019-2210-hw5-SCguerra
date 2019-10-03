function setup() {
    createCanvas(1000, 1000, WEBGL);
    background(0);
  }
  function draw() {
    //cubes
    noStroke();
    push();
    rotateY(millis() / sin(mouseX));
    rotateX(millis() / cos(mouseY));
    fill(random(255));
    box(500);
    fill(random(255), random(255), random(255));
    box(500);
    pop();
    //lines
    stroke(255);
    push();
    beginShape(LINES);
    stroke(255);
    translate(0, 100, 0);
    vertex(randomGaussian(500, 1500), randomGaussian(500, 1500), randomGaussian(500, 1500));
    vertex(randomGaussian(500, 1500), randomGaussian(500, 1500), randomGaussian(500, 1500));
    pop();
    endShape();
  }