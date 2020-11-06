
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

 var ground,ground2;
 var hexagone;
 var band;
 var stone1,stone2,stone3,stone4,stone5,stone6,stone7,stone8,stone9,stone10,stone11,ston12,stone13,stone14,stone15,stone16;
var Score;
var backgroundImg;

function preload(){
getTime();
}
function setup() {
  createCanvas(1200,850);
  engine = Engine.create();
  world = engine.world;
  Engine.update(engine);
  score=0;
  hexagone =new Hexagone(220,650,30);
  band=new Slingshot(hexagone.body,{x:220,y:400});

  stone1=new Box(700,675,30,40);
  stone2=new Box(730,675,30,40);
  stone3=new Box(760,675,30,40);
  stone4=new Box(790,675,30,40);
  stone5=new Box(820,675,30,40);
  stone6=new Box(850,675,30,40);
  stone7=new Box(880,665,30,40);
  
  stone8=new Box(730,635,30,40);
  stone9=new Box(760,635,30,40);
  stone10=new Box(790,635,30,40);
  stone11=new Box(820,635,30,40);
  stone12=new Box(850,635,30,40);

  stone13=new Box(760,595,30,40);
  stone14=new Box(790,595,30,40);
  stone15=new Box(820,595,30,40);

  stone16=new Box(790,545,30,40);
 

  ground=new Ground(780,695,400,20);
  ground2= new Ground(600,840,1200,20);

  
 

  Engine.run(engine);
}

function draw() {
 if(backgroundImg){
   background(backgroundImg);
 }
  textSize(30);
    fill("white");
    text("score :"+score,800,50);
    
  hexagone.display();
  //fill("pink");
  stone1.display();
  stone2.display();
  stone3.display();
  stone4.display();
  stone5.display();
  stone6.display();
  stone7.display();
  stone8.display();
  stone9.display();
  stone10.display();
  stone11.display();
  stone12.display();
  stone13.display();
  stone14.display();
  stone15.display();
  stone16.display();
  band.display();
  


ground.display();
ground2.display();

stone1.score();
stone2.score();
stone3.score();
stone4.score();
stone5.score();
stone6.score();
stone7.score();
stone8.score();
stone9.score();
stone10.score();
stone11.score();
stone12.score();
stone13.score();
stone14.score();
stone15.score();
stone16.score();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(hexagone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
 band.fly();
}
function keyPressed(){
  if(keyCode===32){
      band.attach(hexagone.body);
      
  }
}
async function getTime(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJson=await response.json();
  var datetime=responseJson.datetime;
  var hour=datetime.slice(11,13);
if(hour>=06&&hour<=18){
  bg="daysky.jpg"; 
}else{
  bg="night-sky.jpg";
}
 backgroundImg=loadImage(bg);
}