const BASE_URL = "http://localhost:3000";
const TEAMS_URL = `${BASE_URL}/teams`;
const PlAYERS_URL = `${BASE_URL}/players`;


let teamsContainer = document.querySelector('div.teams-container')
let playersContainer = document.querySelector('div.players-container')
let teamWrapper = document.createElement("div")
let playerWrapper = document.createElement("div")
playerWrapper.id = 'player-wrapper'
teamWrapper.id = 'team-wrapper'

let homeButton = document.querySelector('#home')

  homeButton.addEventListener("click", function() {

    teamsContainer.textContent = ''
    pageLoad()
  })

function pageLoad() {
  teamsContainer.textContent = ''
  playersContainer.textContent = ''
  playerWrapper.textContent = ''
  teamWrapper.textContent = '';
  // formPlacement.remove();

  // document.addEventListener("DOMContentLoaded", function() {
  generateTeamForm();
  fetchTeams();
  // fetchPlayers();
  teamsContainer.appendChild(generateTeamForm());

  // playerWrapper.innerHTML = '';
  // playersContainer.appendChild(generatePlayerForm());

  document.querySelector('#create-team').addEventListener("submit", function(e) {
    e.preventDefault();

    let teamData = {
      name: e.target.elements.name.value,
      color:e.target.elements.color.value,
      rank: e.target.elements.rank.value
    }

//reset form fields upon submit
    e.target.elements.name.value = '';
    e.target.elements.color.value = '';
    e.target.elements.rank.value = '';


    saveTeam(teamData);
    addTeam(teamData);
  })

};

pageLoad()
