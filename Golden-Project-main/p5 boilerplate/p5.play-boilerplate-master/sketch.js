var good, man,man2,enemy
;
function preload(){
  good= loadImage("img2.jpeg");
  man=loadImage("old-man-cartoon-icon-.png");

}
function setup() {
  createCanvas(displayWidth,displayHeight);
   man2=createSprite(400, 200, 50, 50);
   man2.addImage(man)
}

function draw() {
  background(255,255,255); 
   image(good,0,0,displayWidth,displayHeight)
  drawSprites();
  Enemy()
man2.x=mouseX
man2.y=mouseY
}
function Enemy(){
  if (frameCount%60==0){
  enemy=createSprite(random(0,displayWidth),random(0,displayHeight),30,30)
enemy.shapeColor="#FDF3B5"
  }
}