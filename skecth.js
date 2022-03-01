

var PLAY = 1;
var END = 0;
var gameState = PLAY;
var rocketImg,rocket;
var bg,bgImg;
var obstacle1;
var score;
var obstacle2,obstacle3;
var obstacle;
var youLost,youLostImg;
var youLostImg,youLost,replayImg,restart;
var obstacleGroup;

function preload(){
bgImg = loadImage("bg.jpg");
rocketImg = loadImage("rocket.png");
obstacle1 = loadImage("obstacle 1.jpg");
obstacle2 = loadImage("obstacle 2.jpg");
obstacle3 = loadImage("obstacle 3.jpg");
youLostImg = loadImage("gameover.jpg");
replayImg = loadImage("replay.jpg");



}

function setup() {
  createCanvas(600,600);
bg = createSprite(300,300,500,500);
bg.addImage(bgImg);
bg.velocityY = 1;
 rocket = createSprite(300,500,400,500);
 rocket.addImage(rocketImg);
 rocket.scale = 0.1;
 obstacleGroup = createGroup();
youLost = createSprite(500,300);
youLost.addImage(youLostImg);
restart = createSprite(500,400);
restart.addImage(replayImg);
restart.scale = 0.1
youLost.scale =0.5;

obstacleGroup = createGroup();

}

function draw() {
if(gameState===PLAY){
  if(bg.y>450){
    bg.y = 300
    youLost.visible =false;
 restart.visible = false;
    }
    rocket.x = World.mouseX;

}
if(obstacleGroup.isTouching(rocket)){
  gameState = END;


}
else if(gameState===END){ 

 obstacleGroup.setVelocityYEach(0);
 
 bg.velocityY =0;
 rocket.velocityX = 0;
 youLost.visible =true;
 restart.visible = true;



 
}  
if(mousePressedOver(restart)) {
  reset();
 }

obstacles();
   drawSprites();
}

function reset (){
  gameState = PLAY;
  youLost.visible =false;
  restart.visible =false;
  obstacle.destroyEach();
}







function obstacles(){
  if(frameCount %60 ===0){
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityY = 3;
    obstacle.x = Math.round(random(50,250));
    obstacleGroup.setLifetimeEach(-1);

    var rand = Math.round(random(1,3));
    switch(rand){
   case 1: obstacle.addImage(obstacle1);
   break;
    case 2:obstacle.addImage(obstacle2);
    break;
    case 3:obstacle.addImage(obstacle3);
break;
default:break;

    }
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
  }
}

















