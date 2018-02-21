var headlines = [];
var hitwords = [
  "and",
  "or",
  "on",
  "a",
  "an",
  "in",
  "into",
  "of",
  "for",
  "from"
];

function preload() {

  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "121e8c0f4c594ca5a9ed77657b0dfbe0"; 
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);

}

function setup() {
  createCanvas(900, 1000);
  background(0);

  textSize(20);
  textAlign(LEFT);

  extractHeadlines();
}

function draw() {
  background(150);

  var lineheight = 24;
  var margin = 40;
  translate(margin, margin);

  for (var i = 0; i < headlines.length; i++) {
    var words = split(headlines[i], ' ');

    var nextX = 0;

    for (var j = 0; j < words.length; j++) {
      if (!hitwords.includes(words[j].toLowerCase())) {
        fill((1-mouseX/width)*255);
        text(words[j]+' ', nextX, i*lineheight);

      } else {

        fill("skyblue");
        push()
        textSize(12 +(mouseX/width)*20);
        text(words[j]+' ',nextX, i*lineheight);
        stroke(200);
        line(nextX,i*lineheight,textWidth(words[j])-150,lineheight)
        pop()
      }

      
      nextX += textWidth(words[j]+' ');
    }
  }
}

function extractHeadlines() {


  for (var i = 0; i < nytResponse.results.length; i++) {
    var h = nytResponse.results[i].title;

    append(headlines, h);
  }
}