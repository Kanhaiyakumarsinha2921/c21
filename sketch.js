var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  movingRect.shapeColor="red";
  fixedRect=createSprite(300, 200, 50, 50);
  fixedRect.shapeColor="orange"
  fixedRet=createSprite(200, 200, 50, 50);
  fixedRet.shapeColor="orange"
  fixedRct=createSprite(100, 200, 50, 50);
  fixedRct.shapeColor="orange"
  
}

function draw() {
  background(255,255,255); 
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(movingRect,fixedRct)){
    movingRect.shapeColor="green";
    fixedRct.shapeColor="green"

  }
  else{

    movingRect.shapeColor="red";
    fixedRct.shapeColor="orange"
  }

  drawSprites();
}

function isTouching(object1,object2){


  if(object1.x-object2.x < object2.width/2 + object1.width/2 &&
    object2.x-object1.x < object2.width/2 + object1.width/2  &&
    object1.y-object2.y < object2.height/2 + object1.height/2 &&
    object2.y-object1.y < object2.height/2 + object1.height/2  ){
    return true;
  }
  else
  {
    return false;
  }

}

