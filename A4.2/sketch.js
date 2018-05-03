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
      textSize(20);
      fill(200,130,70);
      text("37%", 234, 280);
      text("40 yr", 230, 255);
      text("26%", 262, 140);
      text("50 yr", 260, 115);
      text("22.5%", 376,282);
      text("30 yr", 376,257);
      textSize(14);
      text("10%", 390,145);
      text("20 yr", 390,130);
      text("3%", 418,191);
      text("other", 415,178);
      text("1.5%", 378,45);
      text("60 yr", 380,30);
      line(388,48,382,60);
      text("1.5%", 378,45);
    }
  }

  function mouseMoved() {
    mouseAngle = Math.PI / 2 - Math.atan((320 - mouseX) / (200 - mouseY));
    if(mouseY < 200) mouseAngle = mouseAngle + Math.PI;
  }

