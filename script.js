var score = 0;
var lives = 3;

var player = {
  x: 400,
  y: 700,
  speed: 8,
  width: 60,
}

function setup() {
  createCanvas(800,800);
}

function draw(){
  background (0);
  drawPlayer();
  playerInput();
  drawUI();
}

//De speler UI tekenen (score en levens)
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

//schietertje tekenen
function drawPlayer(){
  fill(80,255,75);
  noStroke();
  rectMode(CENTER);
  fill(50,205,50);
  rect(player.x, player.y - 15, -15, 15,);
  fill(80,255,75)
  rect(player.x,player.y,player.width,30,30);
}
//player input
function playerInput(){
 if (keyIsDown (LEFT_ARROW)){
  player.x -= player.speed;  
}
 else if (keyIsDown(RIGHT_ARROW)){
  player.x += player.speed;    
  }
  
//Player kan niet door de Linker muur heen
  if (player.x - player.width/2 < 0 ){
    player.x = player.width/2;
  }
//Player kan niet door de rechter muur heen
  else if (player.x + player.width/2 > width){
    player.x = width - player.width/2
  }
}