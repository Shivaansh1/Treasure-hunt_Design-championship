var bg,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("Cave.gif");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("red");
  text("Score: " + score, 450, 50);

  

  if(score === 3) {
    clear();
    background(bg2);
    clues();

    security.display();
    fill("black");
    textSize(40);

 


    
  }


  drawSprites()
}