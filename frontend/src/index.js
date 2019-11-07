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
    console.log("click")
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
    console.log("checking")
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


  // function fetchPokemonAdd(id) {
  //   let data = { trainer_id: id };
  //   let configObj = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: JSON.stringify(data)
  //   };
  //   return fetch("http://localhost:3000/pokemons", configObj)
  //     .then(response => response.json())
  //     .then(object => {
  //       console.log(object);
  //       renderPokemons([object]);
  //     });
  // }




// function renderTeams(teamsArray) {
//   // let teamWrapper = document.createElement("div")
//   // teamWrapper.id = 'team-wrapper'
//   console.log(teamsArray)
//   teamsArray.forEach(team => {
//     let newTeam = new Team(team.attributes)
//     addTeam(newTeam)
//
//   })
// }



// function addPlayer(player) {
//   const h2 = document.createElement("h2")
//   h2.innerHTML = `Name: ${player.name}`
//   playersContainer.appendChild(playerWrapper)
//   playerWrapper.appendChild(h2)
//
//   const playerPositionEl = document.createElement("h4")
//   playerPositionEl.innerHTML = `Position: ${player.position}`
//   h2.appendChild(playerPositionEl)
//
//   const playerNumberEl = document.createElement("h4")
//   playerNumberEl.innerHTML = `Jersey Number: ${player.number}`
//   h2.appendChild(playerNumberEl)
//
//   const playerHometownEl = document.createElement("h4")
//   playerHometownEl.innerHTML = `${player.hometown}`
//   h2.appendChild(playerHometownEl)
//
// }


//what do we do after saveTeam?

// function saveTeam(team) {
//   // debugger
//     return (
//         fetch(TEAMS_URL, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//           },
//           body: JSON.stringify(team)
//         })
//     )
//
// }

// function savePlayer(player) {
//   return (
//     fetch(PlAYERS_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify(player)
//     })
//   )
// }
