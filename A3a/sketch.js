var headlines = [];

function preload() {

  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "121e8c0f4c594ca5a9ed77657b0dfbe0"; 
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);
}


function setup() {
  
  createCanvas(800,1000);
  background(81,103,112);
  textAlign(LEFT);
}


function draw() {
 
  background(81,103,112);
  textSize(18);
 var lineheight = 24;
  var margin = 40;
  translate(margin, margin);

  for (var i = 0; i < nytResponse.results.length; i++){
    var h = nytResponse.results[i].title;
    headlines=append(headlines,h);
  }

  for (var i = 0; i < nytResponse.results.length; i++){
    var words = split(headlines[i], ' ');
    var X = 0

    for(var k = 0; k < words.length; k++) {
      if (words[k].toLowerCase().indexOf('and') !== -1 ||
        words[k].toLowerCase().indexOf('of') !== -1) {
          fill(255,255,0);
      } else{
        fill(255);
      }
      text(words[k] + ' ', X+20, (i + 5)*20);
      X += textWidth(words[k]+' ');
    } 
  } 

}