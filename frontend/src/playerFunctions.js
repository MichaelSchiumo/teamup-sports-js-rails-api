
function savePlayer(playerData) {

  let player = {
    team_id: playerData.team_id,
    name: playerData.name,
    hometown: playerData.hometown,
    number: playerData.number,
    position: playerData.position
  }

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(player)
  };

  return fetch(PlAYERS_URL, configObj)
  .then(response => response.json())
  .then(object => {
    // renderPlayers(object)
    console.log(object)
  })
}

function renderPlayers(playersArray, team_id) {
  playersArray.forEach(player => {
    let newPlayer = new Player(player)

    // addPlayer(newPlayer)
  })
  // console.log(allPlayers)
}


function createPlayers(team, playersArray) {
  playersArray.forEach(player => {
    let newPlayer = new Player(player);
    team.players.push(newPlayer)
  })
}

function fetchPlayers(team_id) {
  return fetch(PlAYERS_URL)
  .then(response => response.json())
  .then(player => {
    renderPlayers(player.data, team_id);
  })
}

function listPlayers(team) {
  playerWrapper.textContent = '';
  team.players.forEach(player => {
    //generate HTML
    addPlayer(player)
  })
}
