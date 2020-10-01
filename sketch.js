var dustbin
var ground
var ball

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
createCanvas(1600,600);
rectMode(CENTER);
engine = Engine.create();
world = engine.world;
dustbin=new Dustbin(1200,550);
ball=new Ball(200,450,70);
ground=new Ground (width/2,570,width,20);


	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

ball.display();
dustbin.display();
ground.display();
  Engine.update(engine);
 

  Keypressed();
 
}



function Keypressed(){
	if(keyDown(UP_ARROW)){
     matter.body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}