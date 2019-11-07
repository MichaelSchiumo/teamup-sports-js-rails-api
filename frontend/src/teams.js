class Team {

  constructor(team) {
    this.id = team.id;
    this.name = team.name;
    this.color = team.color;
    this.rank = team.rank;
    this.players = [];
    allTeams.push(this)
  }





  // static buildTeamObjects(teams) {
  //   return teams.map((team) => {
  //     return new Team(team.id, team.name, team.color, team.rank)
  //   })
  // }

}
