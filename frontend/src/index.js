const BASE_URL = "http://localhost:3000";
const TEAMS_URL = `${BASE_URL}/teams`;
const PlAYERS_URL = `${BASE_URL}/players`;



document.addEventListener("DOMContentLoaded", function() {
  generateTeamForm();
  fetchTeams();
  teamsContainer.appendChild(generateTeamForm());
});


function fetchTeams() {
  return fetch(TEAMS_URL)
      .then(response => response.json())
      .then(json => {
        renderTeams(json.data);
        //here is where we fetch players
      })
  };

function renderTeams(teamsArray) {
  teamsArray.forEach(team => {
    console.log(team)

  })
}

// const getTeams = async () => {
//   teams = await fetchTeams()
//   renderTeams()
// }


function saveTeam() {
  //post request with team data to store in backend
  return (
        fetch("http://localhost:3000/teams", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(teamData)
        })
      )
}





const generateTeamForm = () => {
    const form = document.createElement('teamForm')
    const formInput = document.createElement('input')
    const formSubmit = document.createElement('button')

    form.id = "create-team"

    formInput.placeholder = "team text"
    formInput.id = "team-form-text"
    formInput.name = "formInput"

    formSubmit.textContent = "Submit"
    formSubmit.id = "form-submit"


    form.appendChild(formInput)
    form.appendChild(formSubmit)

    return form
}



const renderTeamForm = () => {
    const form = generateTeamForm()
    document.body.appendChild(form)

     form.addEventListener("submit", (e) => {
        e.preventDefault();

        newTodo = {
            text: e.target.elements.formInput.value,
            complete: false
        }

        form.remove()
    })
}

let teamsContainer = document.querySelector('div.teams-container')

function newTeamButton() {
    let button = document.createElement('button')
    button.textContent = 'Create a Team'
    button.addEventListener('click', function() {
        teamsContainer.innerHTML = ''
        teamsContainer.appendChild(generateTeamForm())
    })
    return button
}
