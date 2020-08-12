
var database;
var form, game, player;
var gameState = 0;
var playerCount = 0;

function setup(){
    createCanvas(400, 400);
    database = firebase.database();
    game = new Game();
    game.getGameState();
    game.start();
}

function draw(){


}