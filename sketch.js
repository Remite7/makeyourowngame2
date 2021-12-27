var bg, bgImg
var bottomGround
var topGround
var boy,boyImg
var BoySideImg
var bg2Img
var droneImg, drone
var energyDrinkImg, energyDrink
var boosterImg, booster

function preload(){
bgImg = loadImage("assets/cyber city.png")
bg2Img = loadImage("assets/cybercity2Img.jpeg")

boyImg = loadAnimation("assets/boy.png", "assets/boyfire.png") 
boySideImg = loadAnimation ("assets/boyBlueSide.png", "assets/boyRedSide.png", "assets/boyOrangeSide.png",)

droneImg = loadImage("assets/droneImg.png")
boosterImg = loadImage("assets/boosterImg.png")
energyDrinkImg = loadImage("assets/energydrinkImg.png")
}

function setup(){

//background image
createCanvas(1000,600);
bg = createSprite(165,485,500,500);
bg.addImage(bgImg);
bg.scale = 1.2
bg.velocityX = -3;
bg.x = bg.width/4 ;

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating boy    
boy = createSprite(100,200,20,50);
boy.addAnimation("boy", boyImg);
boy.addAnimation("boySide", boySideImg )
boy.scale = 0.3;  


}

function draw() {
  
  background("black");
        
          //making the hot air boy jump
          if(keyDown("space")) {
            boy.velocityY = -6 ;
          }

          if(boy.y < 220){
            boy.changeAnimation("boySide", boySideImg); 
          }

          //adding gravity
          boy.velocityY = boy.velocityY + 2;


          if(bg.x <= 0){
          bg.x = bg.width/2 ;
          } 
   
        drawSprites();
        spawnObstacles();
        spawnEnergyDrinks();
        spawnBooster();
        
}

function spawnObstacles(){
  if(World.frameCount%100 === 0){
    drone = createSprite(1000,100,10,10)
    drone.addImage("drone", droneImg);
    drone.scale = 0.15;
    
    drone.velocityX = -4;

    drone.y = Math.round(random(10,600))
    drone.lifetime = 400
  }

}

function spawnEnergyDrinks(){
  if(World.frameCount%150 === 0){
    energyDrink = createSprite(1000,100,10,10)
    energyDrink.addImage("energyDrink", energyDrinkImg);
    energyDrink.scale = 0.15;
    
    energyDrink.velocityX = -4;

    energyDrink.y = Math.round(random(10,600))
    energyDrink.lifetime = 400
  }

}

function spawnBooster(){
if(World.frameCount%200 === 0){
    booster = createSprite(1000,100,10,10)
    booster.addImage("booster", boosterImg);
    booster.scale = 0.15;
    
    booster.velocityX = -4;

    booster.y = Math.round(random(10,600))
    booster.lifetime = 400
}
}