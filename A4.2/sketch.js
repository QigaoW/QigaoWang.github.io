 var data = [60,108,77,9,33,18];
 var color1= 'pink';
 var color2= 'gray';
 var color3= 'purple';
 var color4= 'red';
 var color5= 'skyblue';
 var color6= 'navyblue';
 var color7= 'black';
 var color8= 'navy';



 //since the local serve setup fail, just list the data, will fix when repair the csv.
  

  var piedata = [], piecolor = [color8,color6,color3,color4,color5,color7];
  var mouseAngle = 0, pieDelta = 0, hover = 0;

  function setup() {
    createCanvas(800,800); 
    total = data.reduce(function(a,b){ return a+b; }, 0);
    for(var i = 0, count = 0 ;i < data.length; i++) {
      piedata.push([Math.PI * 2 * count / total, Math.PI * 2 * (count + data[i]) / total]);
      count += data[i];
    }
  }

  function draw() {

    //clear canvas each time

    clear(); 
    for(var i=0,dx=0,dy=0; i<piedata.length; i++,dx = 0, dy = 0) {
      fill(piecolor[i%5]);
      
      //slide the pie when mouse on it
      
      if(mouseAngle >= piedata[i][0] && mouseAngle < piedata[i][1]) {
        dx = Math.cos((piedata[i][0] + piedata[i][1])/2) * 10;
        dy = Math.sin((piedata[i][0] + piedata[i][1])/2) * 10;
      }
      
      //draw the piechart
      
      arc(320 + dx, 200 + dy, 300, 300, piedata[i][0], piedata[i][1], PIE);
    }
  }

  function mouseMoved() {
    mouseAngle = Math.PI / 2 - Math.atan((320 - mouseX) / (200 - mouseY));
    if(mouseY < 200) mouseAngle = mouseAngle + Math.PI;
  }

  function draw2(){
    textSize(28);
    fill(200,130,70);
    text("one small step for man...", 25, 60);
    textSize(16);
    text("one small step for man...", 27, 90);
  }
