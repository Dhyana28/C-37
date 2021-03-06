class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton('Start');
        this.greeting = createElement('h3');
    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(250,100);

       
        

        this.input.position(130,160);
        this.button.position(250,200);
    
        
        this.button.mousePressed(function(){
           this.input.hide();
            this.button.hide();

            player.name = this.input.value();


            playerCount+=1;
            player.index = playerCount;
        
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello "+player.name);
            this.greeting.position(130,160);
        })

        
    }
}