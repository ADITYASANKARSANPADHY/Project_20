var car,wall;
var speed, weight;
var carImg1,carImg2,carImg3;
var deformation;
function preload() {
carImg1 = loadImage("BlueCar.png");
carImg2 = loadImage("RedCar.png");
carImg3 = loadImage("GreenCar.png");



}



function setup() {
  createCanvas(600,400);
  
  speed = Math.round(random(55,90));
  weight =  Math.round(random(400,1500));
  
  
  
  
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = color(188);

  wall = createSprite(580, 200, 50, height/2);
  wall.shapeColor = "gold";


}

function draw() {
  background(0,0,0);  
  drawSprites();

  console.log(speed);
  console.log(deformation);

  if(wall.x-car.x < (car.width + wall.width)/2){
    car.velocityX = 0;
     deformation = Math.round(0.5* weight* speed* speed/ 22509);
    
    if(deformation >= 180)
    {
      car.addImage(carImg1);
      car.scale = 0.2;
      stroke("pink");
      
      text("speed = "+ speed,390,100);
      stroke("red");
      text("deformation= "+ deformation,390,150);
    }
  
    if(deformation < 180 && deformation>100)
    {
      car.addImage(carImg2);
      car.scale = 0.2;
      
      stroke("pink");
      
      text("speed = "+ speed,390,100);
      stroke("red");
      text("deformation= "+ deformation,390,150);
    }
    
  
    if(deformation <= 100)
    {
      car.addImage(carImg3);
      car.scale = 0.02;
     
      stroke("pink");
      
      text("speed = "+ speed,390,100);
      stroke("red");
      text("deformation= "+ deformation,390,150);
    }
  
  
  }

}