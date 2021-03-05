
var bullet,wall,thickness
var speed,weight


function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  wight=random(223,321);
  thickness=random(30,52); 

  bullet=createSprites(50, 200, 50, 50);
  bullet.velocityX=speed;
  bullet.shapeColor(225);

  wall=createSprites(1500,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0);  
  if(hasCollied(bullet,wall))
  {
    bullet.velocityX=0;
    var damage =0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10)
    {
      wall.shapeColor=color(250,0,0);
    }
    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}

function hasCollied(bullet,wall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
      return true;
  }
  return false;
}