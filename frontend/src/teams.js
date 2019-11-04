class Teams {
  constructor(id, name, color, rank) {
    this.id = id;
    this.teamName = name;
    this.teamColor = color;
    this.teamRank = rank;
  }

static buildTeamObjects(teams) {
  return teams.map((team) => {
    return new Team(team.id, team.name, team.color, team.rank)
  })
}

}
