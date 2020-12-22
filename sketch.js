const World  = Matter.World;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;

var gru;

function setup(){
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  gru = new Ground();

  b1 = new BUILDING(650,100);
  b2 = new BUILDING(650,100);
  b3 = new BUILDING(650,100);
  b4 = new BUILDING(650,100);
  b5 = new BUILDING(650,100);
  b6 = new BUILDING(650,100);
  
  b7 = new BUILDING(550,100);
  b8 = new BUILDING(550,100);
  b9 = new BUILDING(550,100);
  b10 = new BUILDING(550,100);
  b11= new BUILDING(550,100);
  b12= new BUILDING(550,100);

  b13 = new BUILDING(450,100);
  b14 = new BUILDING(450,100);
  b15 = new BUILDING(450,100);
  b16 = new BUILDING(450,100);
  b17= new BUILDING(450,100);
  b18 = new BUILDING(450,100);

  ball = new BALL();

  sli= new SLING(ball.body,{x:300,y:50});

}

function draw(){
  background("black");
  Engine.update(engine);

  gru.display();

  fill("green");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();

  fill("red");
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();

  fill("silver");
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();

  ball.display();
  
  sli.display();

}

function mouseDragged(){

Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});


}
