const BASE_URL = "http://localhost:3000";
const TEAMS_URL = `${BASE_URL}/teams`;
const PlAYERS_URL = `${BASE_URL}/players`;

let teams = [];

document.addEventListener("DOMContentLoaded", function() {
  fetchTeams();
});


function fetchTeams() {
  const teamsURL = "http://localhost:3000/teams";

  return fetch('http://localhost:3000/teams')
      .then(response => response.json())
      //promise
      // .then(result => renderTeams(json))
      .then(json => {
        renderTeams(json);
        //here is where we fetch players
      })
  };

function renderTeams(teams) {
  for(team in teams) {
    const teamsContainer = document.getElementById("teams-container")
    const teamsDiv = document.createElement("div")
    const teamsSpan = document.createElement("span")
    const teamName = document.createElement("p")


    teamsContainer.innerHTML = 'My Teams Here'
    teamsDiv.className = "team";
    teamName.className = "team-name"

    teamsContainer.appendChild(teamsDiv);
    teamsContainer.appendChild(teamName);

    teamName.innerHTML = team.name;

    saveTeam(team)
  }
}

const getTeams = async () => {
    teams = await fetchTeams()
    renderTeams(teams)
}

const saveTeam = (team = null) => {
  if (team != null) {
      teams.push(team)
  } else {
      throw new Error("HALP ME")
  }
}


const generateTeamForm = () => {
    const form = document.createElement('teamForm')
    const formInput = document.createElement('input')
    const formSubmit = document.createElement('button')

    form.id = "create-todo"

    formInput.placeholder = "team text"
    formInput.id = "team-form-text"
    formInput.name = "formInput"

    formSubmit.textContent = "Submit"
    formSubmit.id = "form-submit"


    form.appendChild(formInput)
    form.appendChild(formSubmit)

    return form
}
