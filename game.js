class Game{
    constructor(){

    }
    getGameState(){
       var GameStateref = database.ref("GameState");
       GameStateref.on("value", function(data){
       gameState = data.val(); 
    })
    }
    updateGameState(gameState){
       var ref = database.ref("/")
       ref.update({
           GameState : gameState
       })
    }
    start(){
        if (gameState === 0){
            player = new Player();
            player.getPlayerCount();
            form = new Form();
            form.display()
        }
    }
}
