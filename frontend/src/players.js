class Player {
  constructor(player) {
    this.id = player.id;
    this.name = player.attributes.name;
    this.position = player.attributes.position;
    this.number = player.attributes.number;
    this.hometown = player.attributes.hometown;
    this.captain = player.attributes.captain;
    this.teamId = player.relationships.team.data.id
    allPlayers.push(this)
  }


}
