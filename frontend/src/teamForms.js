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

    const currentRoster = document.createElement('h2')
    currentRoster.textContent = "Current Rosters"

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

    form.appendChild(currentRoster)

    return form
}
