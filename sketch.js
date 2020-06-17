const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  rect1 = new Rectangle(100,50,300,60);
  rect2 = new Rectangle(400,70,300,60);
  ground = new Ground(400,400,800,10);
}

function draw() {
  background("black"); 
  Engine.update(engine); 
  rect1.display();
  rect2.display();
  ground.display();
  drawSprites();
}