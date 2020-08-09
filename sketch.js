
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree;
var stone;
var boy;
var ground;
var mango1,mango2,mango3,mango4,mango5;



function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(650,height,1300,20);
	boy=new Boy(700,580,200,200);
	tree= new Tree(1000,335,300,550);
	mango1= new Mango(1100,100,30);
	mango2= new Mango(1000,140,30);
	

	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  boy.display();
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  
  drawSprites();
 
}



