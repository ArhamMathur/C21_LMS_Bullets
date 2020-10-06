var wall, thickness;
var bullet,speed, weight;

function setup() {
  createCanvas(1600, 400);

  speed=random(223,321)
  weight=random(30,52)


  thickness=random(22,83)




  
    bullet=createSprite(50, 200, 50,5);  
    bullet.velocityX = speed;
    bullet.shapeColor=color(255);

 
  	
    
    wall=createSprite(1200, 200, thickness, height/2);  

    wall.shapeColor=color(80,80,80);
  //wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);  
  //bullet.sprite.collide(wall.sprite,calculateDeformation)
  if(hasCollided(bullet, wall))
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  	
	if(damage>10)
	{

		stroke(255,0,0);
		fill(255,0,0);
		textSize(50);
		wall.shapeColor=color(0,0,255);
		text("Rejected",500,200);
	}

	

	if(damage<10)
	{
		textSize(50);
		stroke(0,255,0);
		fill(0,255,0);
		wall.shapeColor=color(255,0,0);
		text("Approved",500,200);
	}
	
  }


  drawSprites();
 
}


function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}