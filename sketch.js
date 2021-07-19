var sea,ship;
var shipImg;
var SeaImg;

function preload()
 {
   SeaImg=loadImage("sea.png");
  shipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  
   
 }
function setup()
{
  createCanvas(400,400);
  background("blue")

 

  
 // create sprite for sea
  sea=createSprite(400,200);
  sea.addImage(SeaImg);
  sea.velocityX=-4;
  sea.scale=0.3;

  // create sprite for shipImg
  ship=createSprite(130,200,30,30);  
  ship.addAnimation("moving",shipImg);
  ship.scale=0.25;

}


function draw()
 {
   background(0); 

   sea.velocityX=-3; 
   // reseting sea position
    if (sea.x<0)
    {
      sea.x=sea.width/8;
    }
    drawSprites();
 }