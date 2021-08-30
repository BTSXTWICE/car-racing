class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank= null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

   endGame (){
     database.ref('endGame').on("value",(taylor_swift)=>{
  this.rank = taylor_swift.val();
     })

   }

  static updateendGame(rank){
   database.ref('/').update({endGame:rank})
   }
}
