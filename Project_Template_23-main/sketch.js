const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerBase;
var computer;
var playerBase;
var player;

function preload() {

  

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
  
  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  computerBase = new ComputerBase(width - 300, random(450, height - 300), 180, 150);



 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   
   computerBase.display();
   playerBase.display();


}
