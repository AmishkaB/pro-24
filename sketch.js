
var paper;
var dustbin;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground=Bodies.rectangle(width/2,680,width,20, {isStatic:true})
	World.add(world,ground)

	paper=new Paper(200,50,40)
	dustbin=new Dustbin()

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  fill('cyan')

  rect(ground.position.x,ground.position.y,width,20)
  
  paper.display();
  //dustbin.display();
  
  drawSprites();
 
}

function keyPressed(){
    if (keyCode===UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50});

    }
}

