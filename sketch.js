const Engine = matter.Engine;
const World = matter.World;
const Bodies = matter.Bodies;
const Body = matter.Body;
var flowerObject, basketObject, groundObject;	
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	

	
  
}


function draw() {
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(flowerObject.body,flowerObject.body.position,{x:130,y:-145});

    
  	}
}





