class Player {
  constructor(player) {
    this.id = id;
    this.name = name;
    this.position = position;
    this.number = number;
    this.hometown = hometown;
    this.teamId = player.relationships.team.data.id
  }

//
// static buildPlayerObjects(players) {
//   return players.map((player) => {
//     return new Player(player.id, player.name, player.position, player.number, player.captain, player.hometown)
//   })
// }

}
