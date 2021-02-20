const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var treeObj, stoneObj, groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9;
var world, boy;

function preload() {
  boy = loadImage('boy.png');
}

function setup() {
  createCanvas(1300, 600);
  engine = Engine.create();
  world = engine.world;

  mango1 = new mango(900, 200, 30);
  mango2 = new mango(950, 190, 30);
  mango3 = new mango(1000, 120, 30);
  mango4 = new mango(1050, 130, 30);
  mango5 = new mango(1100, 160, 30);
  mango6 = new mango(1150, 120, 30);
  mango7 = new mango(1200, 140, 30);
  mango8 = new mango(1250, 200, 30);
  mango9 = new mango(1210, 120, 30);

  treeObj = new tree(1050, 580);
  groundObject = new ground(width / 2, 600, width, 20);
  stoneObj = new Stone(200, 100, 30);
  launcherObject = new Chain(stoneObj.body, { x: 235, y: 420 });
  Engine.run(engine);
}

function draw() {
  background(230);
  textSize(35);
  text('Press Space to play again!', 150, 100);
  image(boy, 200, 340, 200, 300);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  stoneObj.display();
  launcherObject.display();
  groundObject.display();
  detectCollusion(stoneObj, mango1);
  detectCollusion(stoneObj, mango2);
  detectCollusion(stoneObj, mango3);
  detectCollusion(stoneObj, mango4);
  detectCollusion(stoneObj, mango5);
  detectCollusion(stoneObj, mango6);
  detectCollusion(stoneObj, mango7);
  detectCollusion(stoneObj, mango8);
  detectCollusion(stoneObj, mango9);
}

function mouseDragged() {
  Matter.Body.setPosition(stoneObj.body, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  launcherObject.fly();
}

function detectCollusion(stone, mango) {
  mangoBodyPosition = mango.body.position;
  stoneBodyPosition = stone.body.position;

  const distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

  if (distance <= mango.r + stone.r) {
    Matter.Body.setStatic(mango.body, false);
  }
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, { x: 235, y: 420 });
    launcherObject = new Chain(stoneObj.body, { x: 235, y: 420 });
  }
}
