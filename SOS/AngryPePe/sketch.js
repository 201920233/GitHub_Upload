const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let ground;
const boxes = [];
let bird;
let pig;
let world, engine;
let slingShot;
let box1;
const boxes1 = [];
let box3;
let box4;
let box5;
let box6;
let box7;

let dotImg;
let pigImg;
let boxImg;
let backImg;
function preload() {
  dotImg = loadImage("bird1.png");
  pigImg = loadImage("pig.png");
  boxImg = loadImage("wood.png");
}

function setup() {
  backImg = loadImage("back.png");
  const canvas = createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height - 10, width, 60);
  for (let i = 0; i < 4; i++) {
    boxes[i] = new Box(600, 300, 40, 75);
  }
  for (let i = 0; i < 3; i++) {
    boxes1[i] = new Box(600, 200, 30, 75);
  }
  box1 = new Box1(600, 250, 250, 35);
  box3 = new Box3(600, 150, 200, 20);
  box4 = new Box3(530, 100, 30, 90);
  box5 = new Box3(670, 100, 30, 90);
  box6 = new Box3(600, 50, 175, 50);
  box7 = new Box3(600, 0, 100, 50);
  bird = new Bird(150, 300, 20);
  pig = new Pig(600, 100, 40);

  slingshot = new SlingShot(200, 250, bird.body);

  const mouse = Mouse.create(canvas.elt);
  const options = {
    mouse: mouse,
  };
  mConstraint = MouseConstraint.create(engine);
  World.add(world, mConstraint);
}

function keyPressed() {
  if (key == "q") {
    World.remove(world, bird.body);
    bird = new Bird(150, 300, 20);
    slingshot.attach(bird.body);
  } else if (key == "w") {
    World.remove(world, bird.body);
    bird = new Bird(150, 300, 40);
    slingshot.attach(bird.body);
  }
}

function mouseReleased() {
  setTimeout(() => {
    slingshot.fly();
  }, 30);
}

function draw() {
  background(backImg);
  Matter.Engine.update(engine);
  ground.show();
  for (let box of boxes) {
    box.show();
  }
  for (let box of boxes1) {
    box.show();
  }
  box1.show();
  box3.show();
  box4.show();
  box5.show();
  box6.show();
  box7.show();
  bird.show();
  pig.show();
  slingshot.show();
}
