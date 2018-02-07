function setup() {
  createCanvas(640, 480);

}

function draw(){

  background(255);

  var h=hour();
  var m=minute();
  var s=second();


  var angle1=map(s,0,60,0,2*PI)
  var angle2=map(m,0,60,0,2*PI)

  if (h>=12){h=h-12}
  var angle3=map(h,0,12,0,2*PI)

  translate(width/2,height/2)

  push();
  noStroke()
  fill(135,206,235)
  ellipse(0,0,230,230)
  pop();

  fill(255)
  noStroke()
  ellipse(0,0,18,18)
  textSize(15);
  text("12",-8,-99);
  text("3",100,6);
  text("6",-7,107);
  text("9",-107,6);
  textSize(28);
  fill(112,128,144);
  text('Qigao', 0-10, 0+10);

  push();
  rotate(angle1-(PI/2))
  stroke(255);
  strokeWeight(1)
  line(0,0,90,0)
  pop();

  push();
  rotate(angle2-(PI/2))
  stroke(255);
  strokeWeight(1.5)
  line(0,0,70,0)
  pop();

  push();
  rotate(angle3-(PI/2))
  stroke(255);
  strokeWeight(2.5)
  line(0,0,50,0)
  pop();


}