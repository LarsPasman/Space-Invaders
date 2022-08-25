var score = 0;
var lives = 3;

var player = {
  x: 400,
  y: 700,
  
}

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
  rectMode(CENTER);
  fill(50,205,50);
  rect(player.x, player.y - 15, -15, 15,);
  fill(80,255,75)
  rect(player.x,player.y,60,30,30);
}

function playerInput(){

  
}