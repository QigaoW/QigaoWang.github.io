var table;
var crimetype;
var data = [200,200,400,150,330,420,580,690,170,310,220];
var x=mouseX;
var y=mouseY;

function setup() {
  createCanvas(1000, 1000);
}


function draw(){
  background(180, 150, 100, 200);
  fill(255);
  textSize(25);
  text("Crime Happened in Manhattan in June 1st 2017", 30,30);
  var lineheight = 25;
  var rectheight = 15;
  textSize(12);

  for (var i = 0; i < 11; i++){
    fill(100,174,247);
    rotate(25);
    rect(0, (i+20)*lineheight, data[i], rectheight);
    if (mouseIsPressed){
      fill(255);
      text("Crime Type",x,y);
    }
  }
}
