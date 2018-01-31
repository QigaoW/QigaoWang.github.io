function setup() {
  createCanvas(640, 480);
}

function draw() {
  background('yellow');
  fill(255,204,0);

 // Map the function second() to values from 0~400
  rect(15, 20, 50, map(second(), 0, 60, 0, 400));

  push(); // Start a new drawing state
  scale(hour()/2, hour()/2); // Use function hour() to apply scale, div 2 to keep ellipse inside canvas
  ellipse(50, 50, 70, 40);
  pop(); // Restore original state (scale, specifically)


  // First change the mode to degrees (default is radians)
  angleMode(DEGREES);
  // Map the function minute() to values from 0~360
  rotate(map(minute(), 0, 60, 0, 360));
  textSize(40);
  fill(0, 102, 153);
  text('Qigao says hi', 20, 500);
}