var score = 0;
var lives = 3;



function setup() {
  createCanvas(800,800);
}

function draw(){
  background (0);
  drawPlayer();
  drawUI();
}

function drawUI(){
 fill(255,255,255);
 stroke(30,150,30);
 strokeWeight(5);
 textSize(30)
 textAlign(LEFT);
 text("SCORE: " + score ,28 ,45);
 textAlign(RIGHT);
 text("LIVES: " + lives ,780 ,45);
}

function drawPlayer(){
  fill(80,255,75);
  noStroke();
}