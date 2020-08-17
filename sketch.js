
var database;
var form, game, player;
var gameState = 0;
var playerCount = 0;
var allPlayers, distance = 0;
var car1, car2, carSet = [];

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


}