const BASE_URL = "http://localhost:3000";
const TEAMS_URL = `${BASE_URL}/teams`;
const PlAYERS_URL = `${BASE_URL}/players`;


let teamsContainer = document.querySelector('div.teams-container')
let playersContainer = document.querySelector('div.players-container')
let teamWrapper = document.createElement("div")
let playerWrapper = document.createElement("div")
playerWrapper.id = 'player-wrapper'
teamWrapper.id = 'team-wrapper'

document.addEventListener("DOMContentLoaded", function() {
  generateTeamForm();
  fetchTeams();
  teamsContainer.appendChild(generateTeamForm());
  fetchPlayers();
  playersContainer.appendChild(generatePlayerForm());

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

  document.querySelector('#create-player').addEventListener("submit", function(e) {
    e.preventDefault();

    let playerData = {
      name: e.target.elements.name.value,
      position: e.target.elements.position.value,
      number: e.target.elements.number.value,
      hometown: e.target.elements.hometown.value
    }

    e.target.elements.name.value = '';
    e.target.elements.position.value = '';
    e.target.elements.number.value = '';
    e.target.elements.hometown.value = '';

    savePlayer(playerData)
    addPlayer(playerData)
  })

});


function fetchTeams() {
  return fetch(TEAMS_URL)
      .then(response => response.json())
      .then(json => {
        renderTeams(json.data)
        //here is where we fetch players
      })
  };

function fetchPlayers() {
    console.log("test")
    return fetch(PlAYERS_URL)
      .then(response => response.json())
      .then(json => {
        renderPlayers(json.data)
      })
}


function renderTeams(teamsArray) {
  // let teamWrapper = document.createElement("div")
  // teamWrapper.id = 'team-wrapper'
  teamsArray.forEach(team => {
    let newTeam = new Team(team.attributes)
    addTeam(newTeam)

  })
}

function renderPlayers(playersArray) {
  playersArray.forEach(player => {
    let newPlayer = new Player(player.attributes)
    addPlayer(newPlayer)
  })
}

  function addTeam(team) {

    const h2 = document.createElement("h2");
    h2.innerHTML = `${team.name}`
    teamsContainer.appendChild(teamWrapper)
    teamWrapper.appendChild(h2)

    const teamColorEl = document.createElement("h4")
    teamColorEl.innerHTML = `Color: ${team.color}`
    h2.appendChild(teamColorEl)

    const teamRank = document.createElement("h4")
    teamRank.innerHTML = `Rank: ${team.rank}`
    h2.appendChild(teamRank)

  }

function addPlayer(player) {
  const h2 = document.createElement("h2")
  h2.innerHTML = `${player.name}`
  playersContainer.appendChild(playerWrapper)
  playerWrapper.appendChild(h2)

}


//what do we do after saveTeam?

function saveTeam(team) {
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

function savePlayer(player) {
  return (
    fetch(PlAYERS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(player)
    })
  )
}


const generateTeamForm = () => {
  //use css
    const form = document.createElement('form')
    // const formInput = document.createElement('input')
    const formSubmit = document.createElement('button')
    formSubmit.textContent = "Create Team"
    //write loop to create multiple inputs
    //append inputs to form
    form.id = "create-team"
    formSubmit.id = "form-submit"

    let nameInput = document.createElement("input")
    nameInput.setAttribute('name', 'name')
    nameInput.placeholder = "Team Name"
    form.appendChild(nameInput)

    let colorInput = document.createElement("input")
    colorInput.setAttribute('name', 'color')
    colorInput.placeholder = "Team Color"
    form.appendChild(colorInput)

    let rankInput = document.createElement("input")
    rankInput.setAttribute('name', 'rank')
    rankInput.placeholder = "Team Rank"
    form.appendChild(rankInput)

    form.appendChild(formSubmit)

    return form
}

const generatePlayerForm = () => {

  const form = document.createElement('form')

  const formSubmit = document.createElement('button')
  formSubmit.textContent = "Create Player"

  form.id = 'create-player'
  formSubmit.id = 'form-submit'

  let nameInput = document.createElement('input')
  nameInput.setAttribute('name', 'name')
  nameInput.placeholder = "Player Name"
  form.appendChild(nameInput)

  let positionInput = document.createElement('input')
  positionInput.setAttribute('name', 'position')
  positionInput.placeholder = "Player Position"
  form.appendChild(positionInput)

  let jerseyNumberInput = document.createElement('input')
  jerseyNumberInput.setAttribute('name', 'number')
  jerseyNumberInput.placeholder = "Jersey Number"
  form.appendChild(jerseyNumberInput)

  let hometownInput = document.createElement('input')
  hometownInput.setAttribute('name', 'hometown')
  hometownInput.placeholder = "Player's Hometown"
  form.appendChild(hometownInput)

  form.appendChild(formSubmit)

  return form
}
