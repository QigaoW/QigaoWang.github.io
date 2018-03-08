var table;
var SecondsData;
var byear;
var x=5;

function preload(){
    table = loadTable('year1.csv', 'csv', 'header');
}

function setup() {
  createCanvas(2000, 3000);
  loadData();
}

function loadData() {
    SecondsData = table.getColumn("A");
    byear = table.getColumn("N");

}

function draw() {

  background(123,174,247);
  fill(0);
  textSize(25);
  text('The trip duration in different age range.',20,90);
  translate(10, 120);
  for (var i = 0; i < SecondsData.length; i++) {
    if (byear == '1970'||'1971'||'1972'||'1973'||'1974'){
      stroke(25);
      fill (0,99,100);
      rect(50, 500, 5, i/1000);
      
    }
    else if (byear == '1975'||'1976'||'1977'||'1978'||'1979'){
      fill (0,99,100);
      rect(50+x, 1000, 3, i/2000);
    }
    else if(byear == '1980'||'1981'||'1982'||'1983'||'1984'){
      fill(100,99,10);
      rect(50+2*x, 1000, 3, i/2000);
    }
    else if(byear == '1985'||'1986'||'1987'||'1988'||'1989'){
      fill(100,99,10);
      rect(50+3*x, 1000, 3, i/2000);
    }
    else if(byear == '1990'||'1991'||'1992'||'1993'||'1994'){
      fill(100,50,90);
      rect(50+4*x, 1000, 3, i/2000);
    }
    else if(byear == '1995'||'1996'||'1997'||'1998'||'1999'){
      fill(100,50,90);
      rect(50+5*x, 1000, 3, i/2000);
    }
  }
}