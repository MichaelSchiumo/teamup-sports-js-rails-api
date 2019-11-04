class Teams {
  constructor(id, name, color, rank) {
    this.id = id;
    this.teamName = name;
    this.teamColor = color;
    this.teamRank = rank;
  }
}

static buildTeamObjects(teams) {
  return teams.map((team) => {
    return new Team(team.id, team.name, team.color, team.rank)
  })
}


class Players {
  constructor(id, name, position, number, captain, hometown) {
    this.id = id;
    this.name = name;
    this.position = position;
    this.number = number;
    this.captain = captain;
    this.hometown = hometown;
  }
}

static buildPlayerObjects(players) {
  return players.map((player) => {
    return new Player(player.id, player.name, player.position, player.number, player.captain, player.hometown)
  })
}