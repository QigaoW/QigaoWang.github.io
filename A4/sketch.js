var table;
var crimetype;

function preload(){
  table = loadTable('data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(1000, 1000);
  loadData();
  noLoop();
}

function loadData() {
  crimetype = table.getColumn("LAW_CAT_CD");
  console.log(crimetype);
}

function draw(){
  background(150, 150, 100, 200);
  fill(255);
  textSize(25);
  text("Crime Happened in Manhattan in June 1st 2017", 30,30);
  var lineheight = 25;
  var rectheight = 15;
  textSize(12);

  if (crimetype == 'FELONY'){
    for (var i = 0; i++) {
    fill(190, 30, 70);
    rect(0, (i+2)*lineheight, width*i, -1*rectheight);
  }
}
else if (crimetype == 'MISDEMEANOR'){
  for (var j = 0; j++) {
    fill(190, 20, 70);
    rect(0, (j+2)*lineheight, width*j, -1*rectheight);
  }
}
  else if(crimetype == 'VIOLATION'){
    for (var k = 0; k++){
      fill(190,20,70);
      rect(0, (k+2)*lineheight, width*k, -1*rectheight)
    }
  }
  else{
    fill(0)
  }
}