class Form{
    constructor(){

    }
     display(){
        var title = createElement('h2')
        title.html("Car Racing")
        title.position(130, 0);

        var title2 = createElement('h3')
        title2.html("Name")
        title2.position(70, 140)

        var inputBox = createInput("")
        inputBox.position(130, 160);

        var button = createButton("Ready!")
        button.position(250, 200);

        var greeting = createElement('h5')
        
        button.mousePressed(function(){

            inputBox.hide()
            button.hide()
            title2.hide()

            var name = inputBox.value()
            playerCount = playerCount + 1
            player.updateName(name)
            player.updatePlayerCount(playerCount)
            
            greeting.html("Welcome " + name)
            greeting.position(130, 160);

        })
    }


}
