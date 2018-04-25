var angle = 0.0;
var angleDirection = 1;
var speed = 0.001;
function setup() {
createCanvas(1200, 1200);
}
function draw() {
background(200);
translate(200, 250); // Move to start position
rotate(angle);
strokeWeight(5);
line(200, 0, 40, 0);
fill(165,168,216);
ellipse(20, 0, 40, 40);
translate(40, 0); // Move to next joint
rotate(angle * 8.0);
strokeWeight(6);
line(0, 0, 30, 0);
line(200,200,60,60);
translate(30, 0); // Move to next joint
rotate(angle * 2.5);
strokeWeight(3);
line(0, 0, 20, 0);
angle += speed * angleDirection;
if ((angle > QUARTER_PI) || (angle < 0)) {
angleDirection *= -1;
}
}