
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var plane,stone,hammer,rubber,iron;
var sand1,sand2,sand3,sand4,sand5,sand6;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
plane=new Plane(600,680,1200,20);
iron=new Iron(300,350);
stone=new Stone(700,320,100,100);
hammer=new Hammer(10,100,20);
rubber=new Rubber(900,450,70)

sand1=new Sand(505,450,10);
sand2=new Sand(510,450,10);
sand3=new Sand(515,450,10);
sand4=new Sand(520,450,10);
sand5=new Sand(525,450,10);
sand6=new Sand(530,450,10);

	Engine.run(engine);
  
}


function draw() {
  background("cyan");
  plane.display();
  iron.display();
  stone.display();
  hammer.display();
  rubber.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();

  drawSprites();
 
}



