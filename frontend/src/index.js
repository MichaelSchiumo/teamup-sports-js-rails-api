let teams = [];

function fetchTeams() {
    return fetch('http://localhost:3000/teams')
      .then(response => response.json())
      //promise
      // .then(result => renderTeams(json))
      .then(result => console.log(result))
  };


function renderTeams(json, filter) {
  for (team in json) {
    let name = document.createElement('')

  }
}

const getTeams = async () => {
  teams = await fetchTeams()
  renderTeams(teams)
}

document.addEventListener('DOMContentLoaded', function() {
  generateForm();
  fetchTeams();
})






const generateForm = () => {
  let form =  document.createElement('form')
  let formInput = document.createElement('input')
  let formSubmit = document.createElement('button')

  // nameInput.setAttribute('name', 'name')
  //   <input name='name' value=''/>

  form.id = "create-team"

  formInput.placeholder = "Team Text"
  formInput.id = "form-text"
  formInput.name = "formInput"

  formSubmit.textContent = "Submit"
  formSubmit.id = "form-submit"

  form.appendChild(formInput)
  form.appendChild(formSubmit)

  return form

}
