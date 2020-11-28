const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    
    box1 = new Box(320, 745, 60, 80);
    box2 = new Box(380, 745, 60, 80);
    box3 = new Box(450, 745, 60, 80);
    box4 = new Box(505, 745, 60, 80);
    box5 = new Box(560, 745, 60, 80);
    box6 = new Box(610, 745, 60, 80);
    box7 = new Box(685, 745, 60, 80);
    box8 = new Box(380, 585, 60, 80);
    box9 = new Box(450, 665, 60, 80);
    box10 = new Box(505, 665, 60, 80);
    box11 = new Box(560, 665, 60, 80);
    box12 = new Box(620, 665, 60, 80); 
    box13 = new Box(450, 585, 60, 80);
    box14 = new Box(505, 585, 60, 80);
    box15 = new Box(570, 585, 60, 80);
    box16 = new Box(505, 500, 60, 80);

    box17 = new Box(880, 500, 60, 80);
    box18 = new Box(940, 500, 60, 80);
    box19 = new Box(1000, 500, 60, 80);
    box20 = new Box(1060, 500, 60, 80);
    box21 = new Box(1120, 500, 60, 80);
    box22 = new Box(940, 440, 60, 80);
    box23 = new Box(1000, 440, 60, 80);
    box24 = new Box(1060, 440, 60, 80);
    box25 = new Box(1000, 380, 60, 80);

    ground1 = new Ground(500, 750, 500, 20);
    ground2 = new Ground(1000, 550, 350, 20);

    rock = new Rock(100, 600);

    rope = new Rope(rock.body, {x: 100, y: 400});
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    
    ground1.display();
    ground2.display();

    rock.display();

    rope.display();
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    rope.fly();
}

function keyPressed(){
    if(keyCode === 32){
    rope.attach(rock.body);
  }
}