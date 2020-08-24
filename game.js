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
            form.display();
        }
        car1 = createSprite(100, 200);
        car1.addImage(car1Image)
        car2 = createSprite(300, 200);
        car2.addImage(car2Image);
        carSet = [car1, car2];
    }
    play(){
        form.hide();
        text("Game Started", 120, 100)
        Player.getAllPlayerInfo();
        if (allPlayers !== undefined){
            image(trackImage, 0, -displayHeight * 4, displayWidth, displayHeight * 5);
            
            var positionY = 120;
            var positionX = 400;
            var index = 0;
            for (var plr in allPlayers){

                positionY = displayHeight - allPlayers[plr].Distance
                carSet[index].x = positionX;
                carSet[index].y = positionY;

                if(plr === "player" + player.index){
                    carSet[index].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = carSet[index].y;
                    fill("blue");
                    ellipse(carSet[index].x, carSet[index].y, 100, 100);
                }
                else{
                    carSet[index].shapeColor = "black";
                }

                positionX = positionX + 200;
                index = index + 1;

                //text(allPlayers[plr].Name + ":" + allPlayers[plr].Distance, 100, positionY)
                //positionY = positionY + 20
            }

            drawSprites();


        }
        if (keyIsDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance + 20
            player.updatePlayerInfo();
            carSound.play();
        }
        if (player.distance === 3640){
            gameState = 2;
        }
    }

    end(){
        console.log("Game Over");
        game.updateGameState(2)
    }
}
