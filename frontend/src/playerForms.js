let formPlacement = document.querySelector('div.form-placement')

const generatePlayerForm = (team) => {
  formPlacement.textContent = '';
  const form = document.createElement('form')
  form.setAttribute('data-id', team.id)
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

  // let captainCheck = document.createElement('input')
  // captainCheck.type = "checkbox"
  // captainCheck.name = "captain"
  // captainCheck.setAttribute('name', 'captain')
  // captainCheck.id = "captainCheck.id"
  // form.appendChild(captainCheck)
  //
  // let label = document.createElement('label')
  // label.htmlFor = "captainCheck.id";
  // label.appendChild(document.createTextNode('Team Captain'));
  // form.appendChild(label)



  form.appendChild(formSubmit)

  formPlacement.appendChild(form)
  playersContainer.appendChild(formPlacement)

  document.querySelector('#create-player').addEventListener("submit", handleFormSubmission)

  //append based on the ID of the DIV
  //each team should be wrapped in divs with their respective ID's
  //pass in team ID to query for each specific div
  //how do I hide the form on the second click?

}

function handleFormSubmission(e) {
  e.preventDefault();
  let playerData = {
    team_id: e.target.dataset.id,
    name: e.target.elements.name.value,
    position: e.target.elements.position.value,
    number: e.target.elements.number.value,
    hometown: e.target.elements.hometown.value,
  }

  savePlayer(playerData)

  e.target.elements.name.value = '';
  e.target.elements.position.value = '';
  e.target.elements.number.value = '';
  e.target.elements.hometown.value = '';

  addPlayer(playerData)
}

function addPlayer(player) {

  const h3 = document.createElement("h3")
  h3.innerHTML = `${player.name}`.charAt(0).toUpperCase() + `${player.name}`.slice(1) + ` #${player.number}`
  playersContainer.appendChild(playerWrapper)
  playerWrapper.appendChild(h3)

  const playerPositionEl = document.createElement("ul")
  playerPositionEl.innerHTML = "Position: " + `${player.position}`.charAt(0).toUpperCase() + `${player.position}`.slice(1)
  h3.appendChild(playerPositionEl)

  // const playerNumberEl = document.createElement("ul")
  // playerNumberEl.innerHTML = `Jersey Number: ${player.number}`
  // h3.appendChild(playerNumberEl)

  const playerHometownEl = document.createElement("ul")
  playerHometownEl.innerHTML = "Hometown: " + `${player.hometown}`.charAt(0).toUpperCase() + `${player.hometown}`.slice(1)
  h3.appendChild(playerHometownEl)

}
