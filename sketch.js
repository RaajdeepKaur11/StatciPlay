const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    myEngine=Engine.create();
    myWorld=myEngine.world;
    var options={
        isStatic:true
    }
    ground=Bodies.rectangle(200,390,400,20,options);
    World.add(myWorld,ground);
    var ball_options={
        restitution:1.0
    }
    ball=Bodies.circle(200,200,25,ball_options);
    World.add(myWorld,ball);
}

function draw(){
    background(200);
    Engine.update(myEngine);
    rectMode(CENTER);
    fill("brown");
    rect(ground.position.x,ground.position.y,400,20);
    fill("pink");
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,25,25);
    
}