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
  playerHometownEl.innerHTML = `${player.hometown}`
  h2.appendChild(playerHometownEl)

}
