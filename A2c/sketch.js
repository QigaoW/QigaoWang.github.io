function setup() {
  createCanvas(640, 480);

}

function draw(){

  background(255);

  var h=hour();
  var m=minute();
  var s=second();

  text('The time right now is: ' + h + ':'+ m +':'+ s,30, 80);

  var angle1=map(s,0,60,0,2*PI)
  var angle2=map(m,0,60,0,2*PI)

  if (h>=12){h=h-12}
  var angle3=map(h,0,12,0,2*PI)

  translate(width/2,height/2)

  push();
  noStroke()
  fill(244,200,188)
  rect(-115,-115,230,230)
  pop();

  fill(0)
  ellipse(0,0,8,8)

  push();
  rotate(angle1-(PI/2))
  strokeWeight(0.5)
  line(0,0,100,0)
  pop();

  push();
  rotate(angle2-(PI/2))
  strokeWeight(1)
  line(0,0,80,0)
  pop();

  push();
  rotate(angle3-(PI/2))
  strokeWeight(2)
  line(0,0,50,0)
  pop();


}