class Team {

  constructor(team) {
    this.id = team.id;
    this.name = team.name;
    this.color = team.color;
    this.rank = team.rank;
    this.players = [];
    allTeams.push(this)
  }


render() {
    const h2 = document.createElement("h2");
    const h4 = document.createElement("h4")
    const a = document.createElement("a");
    a.setAttribute('href', '#')
    a.innerHTML = `${this.name}`

    a.addEventListener("click", function(e) {
      teamsContainer.textContent = "";

      let teamFilter = allTeams.filter(function(team) {
        return e.target.innerText.toLowerCase() === team.name.toLowerCase()
      })

      teamFilter.forEach(team => {
        generatePlayerForm(team)
        // h2.appendChild(team.name)
        // teamsContainer.textContent = team.name
        h2.textContent = team.name
        h4.textContent = "Roster"
        teamsContainer.appendChild(h2)
        teamsContainer.appendChild(h4)

        listPlayers(team);
      })
    })

    h2.appendChild(a)


    teamsContainer.appendChild(teamWrapper)
    teamWrapper.appendChild(h2)

    const teamColorEl = document.createElement("ul")
    teamColorEl.innerHTML = `Color: ${this.color}`
    h2.appendChild(teamColorEl)

    const teamRank = document.createElement("ul")
    teamRank.innerHTML = `Rank: ${this.rank}`
    h2.appendChild(teamRank)
  }




}
