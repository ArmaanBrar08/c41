
var database;
var form, game, player;
var gameState = 0;
var playerCount = 0;
var allPlayers, distance = 0;
var car1, car2, carSet = [];

function preload(){
    car1Image = loadImage("Images/car1.png");
    car2Image = loadImage("Images/car2.png");
    trackImage = loadImage("Images/track.jpg");
}




function setup(){
    createCanvas(displayWidth, displayHeight);
    database = firebase.database();
    game = new Game();
    game.getGameState();
    game.start();
}

function draw(){
    if(playerCount === 2){
        game.updateGameState(1)
    }
    if(gameState === 1){
        clear();
        game.play();
    }
    if (gameState === 2){
        game.end();
    }


}