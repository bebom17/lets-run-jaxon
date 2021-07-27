var path,runner, leftBoundary, rightBoundary
var pathImg,runnerImg


function preload(){
  //pre-load images
pathImg = loadImage ("path.png");
runnerImg = loadAnimation("Runner-1.png","Runner-2.png",);        
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

  runner = createSprite(180,340,30,30)
  runner.addAnimation("running",runnerImg );
  runner.scale = 0.08;

  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible = false;

  rightBoundary=createSprite(410,0,100,800)
  rightBoundary.visible=false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  runner.x = World.mouseX;

  edges = createEdgeSprites();
  runner.collide(edges[3])
  runner.collide(leftBoundary);
  runner.collide(rightBoundary);
  if (path.y > 400) {
    path.y = height/2;
  }

  drawSprites();
}
