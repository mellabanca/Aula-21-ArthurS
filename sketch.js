const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var cima, direita, esquerda, baixo;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  cima = new Parede(200, 10, 400, 20);
  direita = new Parede(390, 200, 20, 400);
  esquerda = new Parede(10, 200, 20, 400);
  baixo = new Parede(200, 390, 400, 20);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

  cima.mostrar();
  direita.mostrar();
  esquerda.mostrar();
  baixo.mostrar();
}

