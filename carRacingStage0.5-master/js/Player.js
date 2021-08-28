class Player {
  constructor(){
this.index = null;
this.distance = 0;
this.name = null;

  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "Players/player" + this.index;
    database.ref(playerIndex).set({
      Name:this.name,
      Distance: this.distance,
      

    });
  }
  static getplayerinfo(){
     var playerinforef = database.ref('Players')
     playerinforef.on("value",(data)=>{
      allPlayers = data.val();
     });
  }
}
