var balloon, background;
function preload() {
  backgroundImg = loadImage("images/1.png")
  balloonImage = loadAnimation("images/2.png");
}

function setup(){
   database = firebase.database();
   console.log(database);
    createCanvas(1500,700);

balloon = createSprite (100,400, 20, 20)
  balloon.addAnimation("balloon", balloonImage);
  balloon.scale = 0.4;


}

function draw(){

    background(backgroundImg);
  
        if(keyDown(LEFT_ARROW)){
            balloon.x = balloon.x - 10;
        }
        else if(keyDown(RIGHT_ARROW)){
            balloon.x = balloon.x + 10;
        }
        else if(keyDown(UP_ARROW)){
            balloon.y = balloon.y - 10;
        }
        else if(keyDown(DOWN_ARROW)){
             balloon.y = balloon.y + 10;
        }
        drawSprites();
        fill(0);
        stroke("white");
        textSize(25);
        text("**Use arrow keys to move Hot Air Balloon!",40,40);
    }

    


