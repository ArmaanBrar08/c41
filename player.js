class Player{
    constructor(){

    }
    getPlayerCount(){
        var countref = database.ref("PlayerCount")
        countref.on("value", function(data){
           playerCount = data.val(); 
        })
    }
    updatePlayerCount(playerCount){
       var playerCountref = database.ref("/")
       playerCountref.update({
           PlayerCount : playerCount
       })
    }
    updateName(name){
        var playerIndex = "Player" + playerCount
        var playerIndexref = database.ref(playerIndex);
        playerIndexref.set({
            Name : name 
        })
    }
}
