var girl, girlImage, coinGroup, coinImage, stoneImage, stoneGroup, ground, groundImage, score;

function preload(){
  groundImage = loadImage("Park Background Image.png");
  girlImage = loadAnimation("Running-1.png", "Running-2.png", "Running-3.png", "Running-4.png", "Running-5.png", "Running-6.png",   "Running-7.png", "Running-8.png");
  
  coinImage = loadImage("coinImage.png");
  stoneImage = loadImage("stone.png");
}
function setup() {
  createCanvas(400, 400);
  
  ground = createSprite(200, 385, 400, 20);
  ground.visible = false;
  ground.x = ground.width /2;
  
  girl = createSprite(30, 380, 10, 10);
  girl.addAnimation("Running-1.png", "Running-2.png", "Running-3.png", "Running-4.png", "Running-5.png", "Running-6.png",   "Running-7.png", "Running-8.png", girlImage);
  
  coinGroup = new Group();
  stoneGroup = new Group();
  
  score = 0;
}

function draw() {
  background(groundImage);
  text("Score: "+ score, 30,100);
  girl.collide(ground);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
  }
  
  if (coinGroup.isTouching(girl))  {
    score = score+2;
    coinGroup.destroyEach();
  }
  
  if (stoneGroup.isTouching(girl))  {
    score = score-1;
    stoneGroup.destroyEach();
  }
  
  if(keyDown("space") && girl.y >= 359) {
    girl.velocityY = -10;
  }
  girl.velocityY = girl.velocityY + 0.8;
 
  coin();
  obstacles();
  drawSprites();
  
}

function coin()  {
  if (frameCount % 80 === 0) {
    var coin = createSprite(400,200,20,20);
    coin.y = Math.round(random(120,200));
    coin.addImage(coinImage);
    coin.scale = 0.05;
    coin.velocityX = -3;
    coin.lifetime = 134;
    coinGroup.add(coin);
  }


}

function obstacles()  {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(400,360,20,20);
    obstacle.addImage(stoneImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -3;
    obstacle.lifetime = 134;
    stoneGroup.add(obstacle);
  }


}