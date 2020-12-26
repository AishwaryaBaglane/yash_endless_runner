const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var img,bg
var engine,world;
 var ground,player,playerimg;




function preload() {
walking=loadAnimation("sprites/run1.png","sprites/run2.png","sprites/run3.png",
"sprites/run4.png","sprites/run5.png")
img=loadImage("sprites/bg.png") 
  }

  function setup(){
    var canvas  = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
 
    ground=createSprite(displayWidth,displayHeight/2,displayWidth,displayHeight);
    ground.addImage("red",img)
    ground.scale=0.64;
    
    

    player=createSprite(300,displayHeight-190,20,20);
    player.addAnimation("palyerimg",walking)
    player.scale=0.3;
    //player.setVelocity(0,0)
    
  




  }


  function draw(){
    background(0);
    camera.position.x=player.x;
   
    if (keyCode==32) {
      player.setVelocity(3,0);
     
      }
      
      if (keyCode==LEFT_ARROW) {
        player.setVelocity(0,0);
       
        } 
    
 

    Engine.update(engine);
    drawSprites();
    }









