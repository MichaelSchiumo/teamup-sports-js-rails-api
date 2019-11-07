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

      console.log(team.attributes)
      addTeam(newTeam)
    })
  }

  function addTeam(team) {

    const h3 = document.createElement("h3");
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
        h3.textContent = team.name
        teamsContainer.appendChild(h2)

        listPlayers(team);
      })
    })

    h3.appendChild(a)


    teamsContainer.appendChild(teamWrapper)
    teamWrapper.appendChild(h3)

    const teamColorEl = document.createElement("ul")
    teamColorEl.innerHTML = `Color: ${team.color}`
    h3.appendChild(teamColorEl)

    const teamRank = document.createElement("ul")
    teamRank.innerHTML = `Rank: ${team.rank}`
    h3.appendChild(teamRank)

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
      )

  }
