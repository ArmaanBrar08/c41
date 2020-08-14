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
    play(){
        form.hide();
        text("Game Started", 120, 100)
        Player.getAllPlayerInfo();
        if (allPlayers !== undefined){
            var positionY = 120
            for (var plr in allPlayers){
                if(plr === "player" + player.index){
                    fill("red");
                }
                else{
                    fill("black");
                }
                text(allPlayers[plr].Name + ":" + allPlayers[plr].Distance, 100, positionY)
                positionY = positionY + 20
            }


        }
        if (keyIsDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance + 20
            player.updatePlayerInfo();

        }
    }
}
