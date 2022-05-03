var B, O, Bg, Bg2
var Bimg, OImg, BgImg
var obstacle
var play = 1, end = 0
var gamestate = "play"
var BImg, OImg
var score = 0
function preload(){
BImg = loadAnimation("1.png")
OImg = loadAnimation("2.png")
}

function setup() {
    createCanvas(400, 400)
    obstacle = new Group()

 Bg = createSprite(300, 300, 600, 100)
 Bg.shapeColor = "green"
 
 Bg2 = createSprite(300, 300, 600, 100)
 Bg2.visible = false
 
 B = createSprite(100, 240, 10, 20)
B.addAnimation("bo", BImg)
B.scale = 0.5
}

function draw() {
 background("white")
 text("score: " + score, 325, 50)
 
 if(gamestate == "play"){
    score = Math.round(score + 0.5)
if (Bg.x <= 100){
    Bg.x = 300
    Bg2.x = 300
}
if (B.collide(Bg2) && keyWentDown("space")){
    B.velocityY = -10
}
if (B.isTouching(obstacle)){
    gamestate = "end"
}
B.velocityY = B.velocityY + 0.5
Bg.velocityX = -5
Bg2.velocityX = Bg.velocityX
B.depth = 2
Bg.depth = 0
Bg2.depth = 0
Obstacle()
}
if (gamestate == "end"){
B.destroy()
obstacle.destroyEach()
}
drawSprites()
}
function Obstacle(){
    if (frameCount %100 === 0){
    O = createSprite(410, 250, 10, 10)
    O.addAnimation("la", OImg)
    O.velocityX = -5
    O.depth = 1
    obstacle.add(O)
}
}