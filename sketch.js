var backgroundImg, computerImg, playerImg, startButtonImg, finishImg;
var computer, player, startButton, finish, finish2;
var gameState = 0;

function preload() {
    backgroundImg = loadImage("Images/Background.jpeg")
    computerImg = loadImage("Images/Computer.png");
    playerImg = loadImage("Images/Player.png");
    startButtonImg = loadImage("Images/Start Button.png");
    finishImg = loadImage("Images/Finish.jpg");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    computer = createSprite(windowWidth/2 + 370, windowHeight/2 + 250, 20, 20);
    computer.addImage("computer", computerImg);
    computer.scale = 0.15;

    player = createSprite(windowWidth/2 - 400, windowHeight/2 + 250, 20, 20);
    player.addImage("player", playerImg);
    player.scale = 0.15;

    startButton = createSprite(windowWidth/2 - 20, windowHeight/2, 20, 20);
    startButton.addImage("startButton", startButtonImg);
    startButton.scale = 0.5;

    finish = createSprite(windowWidth/2 - 400, windowHeight/2 - 250, 20, 20);
    finish.addImage("finish", finishImg);

    finish2 = createSprite(windowWidth/2 + 380, windowHeight/2 - 250, 20, 20);
    finish2.addImage("finish2", finishImg);
}

function draw() {
    background(backgroundImg);

    if (gameState === 0) {
        startButton.visible = true;

        if (mousePressedOver(startButton) && mouseDown("left")) {
            gameState = 1;
        }
    }

    if (gameState === 1) {
        startButton.visible = false;

        if (keyDown("up") || keyDown('w')) {
            player.y = player.y - 3;
        }

        computer.y = computer.y - 3;

        if (computer.isTouching(finish2)) {
            gameState = "lose";
        }

        if (player.isTouching(finish)) {
            gameState = "win";
        }
    }

    if (gameState === "lose") {
        fill("black");
        textSize(30);
        text("You Lose", windowWidth/2 - 100, windowHeight/2);
    }

    if (gameState === "win") {
        fill("black");
        textSize(30);
        text("You Win", windowWidth/2 - 100, windowHeight/2);
    }

    drawSprites();
}