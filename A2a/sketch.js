function setup() {
  createCanvas(640, 480);

}

function draw(){

  background(255);

  var h=hour(); //values from 0-59
  var m=minute(); //values from 0-59
  var s=second(); //values from 0-23
  var d=day();  //values from 1-31
  var mo=month(); //values from 1-12
  var y=year(); //2018,2019,2020


  var angle1=map(s,0,60,0,2*PI)
  var angle2=map(m,0,60,0,2*PI)

  if (h>=12){h=h-12}
  var angle3=map(h,0,12,0,2*PI)

  translate(width/2,height/2)

  push();
  noStroke()
  fill(238,180,180)
  ellipse(0,0,230,280)
  pop();

  fill(255)
  noStroke()
  ellipse(0,0,18,18)
  textSize(15);
  text("XII",-8,-120);
  text("III",96,6);
  text("VI",-7,128);
  text("IX",-107,6);
  textSize(12);
  fill(112,128,144);
  text(y+"-"+mo+"-"+d,20,11);

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