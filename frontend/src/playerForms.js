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

  let captainCheck = document.createElement('input')
  captainCheck.type = "checkbox"
  captainCheck.name = "captain"
  captainCheck.setAttribute('name', 'captain')
  captainCheck.id = "captainCheck.id"
  form.appendChild(captainCheck)

  let label = document.createElement('label')
  label.htmlFor = "captainCheck.id";
  label.appendChild(document.createTextNode('Team Captain'));
  form.appendChild(label)

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
    hometown: e.target.elements.hometown.value
  }

  savePlayer(playerData)

  e.target.elements.name.value = '';
  e.target.elements.position.value = '';
  e.target.elements.number.value = '';
  e.target.elements.hometown.value = '';

  addPlayer(playerData)
}

function addPlayer(player) {

  const h2 = document.createElement("h2")
  h2.innerHTML = `Name: ${player.name}`
  playersContainer.appendChild(playerWrapper)
  playerWrapper.appendChild(h2)

  const playerPositionEl = document.createElement("h4")
  playerPositionEl.innerHTML = `Position: ${player.position}`
  h2.appendChild(playerPositionEl)

  const playerNumberEl = document.createElement("h4")
  playerNumberEl.innerHTML = `Jersey Number: ${player.number}`
  h2.appendChild(playerNumberEl)

  const playerHometownEl = document.createElement("h4")
  playerHometownEl.innerHTML = `Hometown: ${player.hometown}`
  h2.appendChild(playerHometownEl)

}
