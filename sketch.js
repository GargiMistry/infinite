var bg,doramon,sun;
var distance=0;

function preload(){
bg=loadImage("sky.gif");
doramon=loadImage("dorafly.png");
sun=loadImage("sun1.png")

}

function setup() {
 createCanvas(1200,800);


}

function draw() {

    textSize(25);
    distance = distance + Math.round(getFrameRate()/4);
    fill("crimson");
    stroke("white");
    strokeWeight(5)
    text("Distance: "+ distance,130,130);
    

 background1=createSprite(600,400,11,99);
 background1.addImage(bg);
 background1.scale=3;

 doremon=createSprite(250,500,11,99);
 doremon.addImage(doramon);
 doremon.scale=0.9;

 sun12=createSprite(950,240,11,99);
 sun12.addImage(sun);
 sun12.scale=0.4;



 drawSprites();
}