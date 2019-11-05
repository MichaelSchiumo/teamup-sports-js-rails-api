const BASE_URL = "http://localhost:3000";
const TEAMS_URL = `${BASE_URL}/teams`;
const PlAYERS_URL = `${BASE_URL}/players`;

document.addEventListener("DOMContentLoaded", function() {
  fetchTeams();
});

function fetchTeams() {
  const teamsURL = "http://localhost:3000/teams";

  return fetch(teamsURL)
      .then(response => response.json())
      //promise
      // .then(result => renderTeams(json))
      .then(json => {
        renderTeams(json);
        //here is where we fetch players
      })
  };

function renderTeams(json) {
  for(let team in json) {
  const teamDiv = document.createElement('div')
  team.className = 'team-card'
  // teamDiv.dataset.id = this.id
  // teamDiv.dataset.userID = this.user.id
  // teamText.className = 'text'
  // teamDiv.appendChild(teamText)
  // console.log(this)

  // teamText.innerHTML = `${this.name}`

  return teamDiv
  console.log(teamDiv)
  }
}

const getTeams = async () => {
    teams = await fetchTeams()
    renderTeams(teams)
}
