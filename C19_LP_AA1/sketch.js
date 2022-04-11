var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  doorsGroup=new Group();
  climbersGroup=new Group();
  invisibleBlockGroup=new Group();
  ghost=createSprite(200,200,50,50);
  ghost.addImage("ghost",ghostImg);
  ghost.scale=0.3;
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
  if(keyDown("space")){
    ghost.velocityY=-10;
  }
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-3
  }
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+3;
  }
 if(climbersGroup.isTouching(ghost)){
   ghost.velocityY=0;
 }
 spawndoors();
 

   
  drawSprites();
}
function spawndoors (){
if(frameCount %240 === 0){                
  var door=createSprite(200,-50);     
  door.addImage(doorImg); 
  var climber=createSprite(200,10);
  var invisibleBlock=createSprite(200,10);
  invisibleBlock.width=climber.whidth;
  invisibleBlock.height=2;
  climber.addImage(climberImg);          
  door.x=Math.round(random(130,400));   
  climber.x= door.x;
  invisibleBlock.x=door.x; 
 // door.scale = 0.5;                     
  door.velocityY=1; 
  ghost.depth=door.depth;
  door.depth +=1
  ghost.depth=climber.depth;
  ghost.depth +=1
  door.lifetime=700;
  climber.velocityY=1;
  invisibleBlock.velocityY=1;
  climber.lifetime=700;
  invisibleBlock.lifetime=700;
  doorsGroup.add(door);
  climbersGroup.add(climber);
  invisibleBlockGroup.add(invisibleBlock);
}
}