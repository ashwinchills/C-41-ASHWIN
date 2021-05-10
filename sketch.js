const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;
var walking,walking1,walking2,walking3,walking4,walking5,walking6,walking7,walking8;
var batAnimation,bat;
var maxDrops=100;
var drops= [];
var Drops;

var engine, world;

var rand;



var thunderCreatedFrame=0;

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");

   walking1=loadImage("Walking Frame/walking_1.png");
   walking2=loadImage("Walking Frame/walking_2.png");
   walking3=loadImage("Walking Frame/walking_3.png");
   walking4=loadImage("Walking Frame/walking_4.png");
   walking5=loadImage("Walking Frame/walking_5.png");
   walking6=loadImage("Walking Frame/walking_6.png");
   walking7=loadImage("Walking Frame/walking_7.png");
   walking8=loadImage("Walking Frame/walking_8.png");

   
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    umbrella = new Umbrella(200,500);

    //create drops
if (frameCount% 200===0) {
for (var i = 0; i <maxDrops; i++) {
}
} 
}

function draw(){
    Engine.update(engine);
    background(0); 

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }
    bat= createSprite(Math.round(random(0,400)),Math.round(random(0,400)));
    bat.addAnimation("moving_bat",batAnimation);
    bat.visible = false;
    if(frameCount % 100 === 0){
       bat.visible = true;
        bat.velocityX = Math.round(random(-4,4));
        bat.velocityY = Math.round(random(-4,4));
        bat.scale=0.4;
        
       
    }
    

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    //display rain drops
    for (var i = 0; i <maxDrops; i++) {
        drops[i].display();
        drops[i].update();
    }
   

    drawSprites();
}  

