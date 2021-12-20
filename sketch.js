var bgSprite , bgImg;
var girl , childAnimation , adultAnimation , teenageAnimation;
var brickWall, brickWallGrp,brickImg;
var ground;
var music;



function preload(){
bgImg = loadImage("IMAGES/background 2.png");
childAnimation = loadAnimation("IMAGES/child1.png " , "IMAGES/child2.png ","IMAGES/child3.png ","IMAGES/child4.png ","IMAGES/child5.png ",
"IMAGES/child6.png ","IMAGES/child7.png ","IMAGES/child8.png ")
brickImg = loadImage("IMAGES/brickWall.png");
teenageAnimation = loadAnimation("IMAGES/T1.png" ,"IMAGES/T2.png","IMAGES/T3.png","IMAGES/T4.png","IMAGES/T5.png" );
adultAnimation = loadAnimation("IMAGES/A1.png" ,"IMAGES/A2.png","IMAGES/A3.png","IMAGES/A4.png","IMAGES/A5.png" );
music = loadSound("music.mp3");
}





function setup() {
  createCanvas(windowWidth,windowHeight);
  bgSprite = createSprite(width/2 , height/2);
  bgSprite.addImage(bgImg);
  bgSprite.scale = 2.2;
  bgSprite.velocityX = -3;

  girl =createSprite(width/2 - 500 ,height/2 + 120);
  girl.addAnimation("child" , adultAnimation);
  girl.scale = 1;
  

  ground = createSprite(width/2-100, height/2+200 , 1500,30);
  

  music.loop();  

  brickWallGrp = new Group ();
}


function draw() {

  background(255,255,255); 
  if(bgSprite.x < 0 ){
    bgSprite.x = width/2;
  } 

  if(keyDown("SPACE") && girl.y>=300){
    girl.velocityY = -8;
  }
  girl.velocityY = girl.velocityY + 0.5;

  ground.visible = false;
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  girl.collide(ground);

  spawnBrickWalls();
  drawSprites();
}

function spawnBrickWalls(){
  if(frameCount % 100 === 0){
    brickWall = createSprite(width + 20 , height/2 + 120);
    brickWall.addImage(brickImg);
    brickWall.velocityX = -3;
    brickWall.scale = 0.5;


  }
}