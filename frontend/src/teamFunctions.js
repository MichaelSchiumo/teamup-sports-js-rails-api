let allTeams = [];
let allPlayers = [];

function fetchTeams() {
  return fetch(TEAMS_URL)
      .then(response => response.json())
      .then(json => {
        renderTeams(json)
      })
  };

  function renderTeams(json) {

    json.data.forEach(team => {
      let newTeam = new Team(team.attributes)

      let players = json.included.filter(player => {
        return player.attributes.team_id === newTeam.id
      })

      createPlayers(newTeam, players)

      addTeam(newTeam)
    })
  }

  function addTeam(team) {

    const h2 = document.createElement("h2");
    const h4 = document.createElement("h4")
    const a = document.createElement("a");
    a.setAttribute('href', '#')
    a.innerHTML = `${team.name}`

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
    teamColorEl.innerHTML = `Color: ${team.color}`
    h2.appendChild(teamColorEl)

    const teamRank = document.createElement("ul")
    teamRank.innerHTML = `Rank: ${team.rank}`
    h2.appendChild(teamRank)

  }

  function saveTeam(team) {
    // debugger
      return (
          fetch(TEAMS_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(team)
          })
      ).then(response => response.json())
      .then(json => {
        let newTeam = new Team(json.data.attributes)
        newTeam.render()
      })
  }
