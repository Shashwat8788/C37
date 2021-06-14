class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();
    
    textSize(30);
    text("Game Start", 120, 100);
    Player.playerInfo();
    if(allPlayers!== undefined){
      var ypos = 130;
      console.log("in play");
      textSize(15);
      for(var i in allPlayers){
        if(i==="player"+player.index){
          fill("red");
        } else
            fill("green");
        
        text(allPlayers[i].name+":"+allPlayers[i].distance,120,ypos);
        ypos+=60;
      }
    }
    if(keyIsDown(UP_ARROW)&&player.index!==null){
       player.distance += 50;
       player.update();
    }
  }

}
