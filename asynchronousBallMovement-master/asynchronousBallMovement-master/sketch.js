var ball;
var db;
var position;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    db= firebase.database();
    var ref= db.ref("ball/position");
    ref.on("value",readoperation,showerror);
}
function readoperation(data){
position=data.val();
ball.x=position.x;
ball.y=position.y;

}
function showerror(){
    console.log("error");
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
var ref = db.ref ("ball/position");
ref.set({
    x:ball.x+x,
    y:ball.y+y

    
})
}
