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

  noLoop(); 
  extractHeadlines();
}

function draw() {
  background(40,77,179);

  var lineheight = 25;
  var margin = 45;
  translate(margin, margin);

  for (var i = 0; i < headlines.length; i++) {
    var words = split(headlines[i], ' ');

    var nextX = 0;

    for (var j = 0; j < words.length; j++) {
      if (hitwords.includes(words[j].toLowerCase())) {
        fill(100+(i*10));
      } else {
        fill(255-(i*10));
      }

      text(words[j]+' ', nextX, i*lineheight);
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