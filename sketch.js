
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobDiameter = 4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 //var bobObject1 = new Bob()
	 roof = new Roof(400,200,330,20);
	 
	 bob3 = new Bob(500,450,25);
	 bob1 = new Bob(400,450,25);
	 bob2 = new Bob(450,450,25);
	
	 bob4 = new Bob(350,450,25);
	 bob5 = new Bob(300,450,25);
	 

	rope1 = new RopeClass(bob1.body, roof.body, bobDiameter*0,0);
	rope2 = new RopeClass(bob2.body, roof.body, bobDiameter*13,0);
	rope3 = new RopeClass(bob3.body, roof.body, bobDiameter*25,0);
	rope4 = new RopeClass(bob4.body, roof.body, bobDiameter*-13,0);
	rope5 = new RopeClass(bob5.body, roof.body, bobDiameter*-25,0);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("lightGreen");
  
  roof.display();
  bob1.display();
  bob2.display();
  
  bob4.display();
  bob5.display();
  bob3.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  if (keyWentDown("RIGHT_ARROW"))
  {
	  Matter.Body.applyForce(bob3.body, bob3.body.position,{x: 100, y:0})
  }
  
  if (keyWentUp("RIGHT_ARROW"))
  {
	  Matter.Body.applyForce(bob3.body, bob3.body.position,{x: 0, y: 0})
  }
  
  if (keyWentDown("LEFT_ARROW"))
  {
	  Matter.Body.applyForce(bob5.body, bob5.body.position,{x: -100, y:0})
  }
  
  if (keyWentUp("LEFT_ARROW"))
  {
	  Matter.Body.applyForce(bob5.body, bob5.body.position,{x: 0, y: 0})
  }


  drawSprites();
 
}

function mouseDragged()
    {
     Matter.Body.setPosition(bob3.body, {x: mouseX, y: mouseY})
	}

function mouseReleased()
{
    Bob.fly();
}

