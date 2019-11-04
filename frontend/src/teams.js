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

  renderTeam() {
    const teamDiv = document.createElement('div')
    team.className = 'team-card'
    teamDiv.dataset.id = this.id
    // teamDiv.dataset.userID = this.user.id
    teamText.className = 'text'
    teamDiv.appendChild(teamText)
    console.log(this)

    teamText.innerHTML = `${this.name}`

    return teamDiv
  }

}
