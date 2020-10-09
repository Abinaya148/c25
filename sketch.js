
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);
  

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ball = new Ball(50,375,20)
	log1 = new Log(250,320,width,PI/7)
    log2 = new Log(350,320,width,PI/7)
    log3 = new Log(300,370,10,810)
    ground = new Ground(200,380,400,20)
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  log1.display();
  log2.display();
  log3.display();
  ground.display();
  keypressed();
  drawSprites();
 
}
function keypressed(){
  if(keyCode === UP_ARROW ){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:9,y:-1});
    //ball.x=ball.x+3
    
      }
}




