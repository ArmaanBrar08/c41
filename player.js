class Player{
    constructor(){
        this.name = null
        this.distance = 0
        this.index = null
        this.rank = 0

    }
    getPlayerCount(){
        var countref = database.ref("PlayerCount")
        countref.on("value", function(data){
           playerCount = data.val(); 
        })
    }
    getFinishedCars(){
        var finishedCarsref = database.ref("FinishedCar")
        finishedCarsref.on("value", (data) =>{
            this.rank = data.val();
  
        })
    }

    updateFinishedCar(rank){
        var updateFinishedCarref = database.ref("/")
        updateFinishedCarref.update({
            FinishedCar : rank
        })
    }
    
    updatePlayerCount(playerCount){
       var playerCountref = database.ref("/")
       playerCountref.update({
           PlayerCount : playerCount
       })
    }
    updatePlayerInfo(){
        var playerIndex = "Players/player" + this.index
        var playerIndexref = database.ref(playerIndex);
        playerIndexref.set({
            Name : this.name,
            Distance : this.distance
        
        })
    }
    static getAllPlayerInfo(){
        var playerref = database.ref("Players")
        playerref.on("value", (data)=>{
            allPlayers = data.val();

        })


    }
}
