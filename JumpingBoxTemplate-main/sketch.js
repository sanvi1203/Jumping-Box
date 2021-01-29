var canvas;
var music;
var box1,box2,box3,box4,movingBox;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   box1 = createSprite(100,590,190,10);
   box1.shapeColor = "blue"
   box2 = createSprite(300,590,190,10);
   box2.shapeColor = "yellow"
   box3 = createSprite(500,590,190,10);
   box3.shapeColor = "red"
   box4 = createSprite(700,590,190,10);
   box4.shapeColor = "green"


    //create box sprite and give velocity
    movingBox = createSprite(random(20,750),400,50,50)
    movingBox.shapeColor = "white"
    movingBox.velocityY = 3;
    movingBox.velocityX = 3;



}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite



  edges =  createEdgeSprites();
      movingBox.bounceOff(edges);


      if (box1.isTouching(movingBox) && movingBox.bounceOff(box1)) {
        box1.shapeColor = "black";
        movingBox.shapeColor = "black";
    } 
    else {
        box1.shapeColor = "blue";
        movingBox.shapeColor = "orange";
    }
  
    if (box2.isTouching(movingBox) && movingBox.bounceOff(box2)) {
       box2.shapeColor = "black";
       movingBox.shapeColor = "black";
   }
   else {
    box2.shapeColor = "yellow";
    movingBox.shapeColor = "orange";
}

   if (box3.isTouching(movingBox) && movingBox.bounceOff(box3)) {
       box3.shapeColor = "red";
       movingBox.shapeColor = "black";
   }
   else {
    box3.shapeColor = "blue";
    movingBox.shapeColor = "orange";
}

   if (box4.isTouching(movingBox) && movingBox.bounceOff(box4)) {
       box4.shapeColor = "black";
       movingBox.shapeColor = "black";
   }
   else {
    box4.shapeColor = "green";
    movingBox.shapeColor = "orange";
}


    drawSprites();
    //add condition to check if box touching surface and make it box
}

function isTouching (object1,object2){ 
    if (object1.x - object2.x < object2.width/2 + object1.width/2 
        && object2.x - object1.x < object2.width/2 + object1.width/2
        && object1.y- object2 .y < object2.height/2 + object1.height/2 
        && object2.y - object2.y < object2.height/2 + object1.height/2  ) 
        {
            return true;
        } 
        else {
            return false;
        }

}
