var cat,mouse,garden;
var catImg,mouseImg,gardenImg;
function preload() {
    //load the images here
    catImg1=loadAnimation("cat1.png");
    catImg2=loadAnimation("cat2.png");
    catImg3=loadAnimation("cat3.png");
    catImg4=loadAnimation("cat4.png");
    mouseImg1=loadAnimation("mouse1.png");
    mouseImg2=loadAnimation("mouse2.png");
    mouseImg3=loadAnimation("mouse3.png");
    mouseImg4=loadAnimation("mouse4.png");
    gardenImg=loadAnimation("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(140,200,100,100);
    garden.addAnimation("garden.png",gardenImg);
    cat = createSprite(380,440,20,20);
    cat.addAnimation("catRunning",catImg1);
    cat.scale=0.08;
    mouse = createSprite(30,480,20,20);
    mouse.addAnimation("mouseStanding",mouseImg1);
    mouse.scale=0.08;
    
}
function draw() {

    background(255);
    
    
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.addAnimation("catLastImage",catImg3);
        cat.changeAnimation("catLastImage");

    }
    
    
   
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX=-5;
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catRunning");
      Text(mouseX+','+mouseY+10,45);
  }
  if(keyCode === RIGHT_ARROW){
    cat.velocityY=5;
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");
    Text(mouseX+','+mouseY+10,45);
}


}



