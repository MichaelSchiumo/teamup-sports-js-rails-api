const BASE_URL = "http://localhost:3000";
const TEAMS_URL = `${BASE_URL}/teams`;
const PlAYERS_URL = `${BASE_URL}/players`;


let teamsContainer = document.querySelector('div.teams-container')

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
    debugger
    const div = document.createElement("div");
    div.innerHTML = `${team.attributes.name}`
    teamsContainer.appendChild(div)
    const teamColorEl = document.createElement("h2")
    teamColorEl.innerHTML = `${team.attributes.color}`
    div.appendChild(teamColorEl)

  })
}


function renderTrainers(json) {
  const main = document.getElementsByTagName("main")[0];
  json.forEach(trainer => {
    const div = document.createElement("div");
    div.setAttribute("class", "card");
    div.setAttribute("data-id", `${trainer.id}`);
    main.appendChild(div);
    const p = document.createElement("p");
    p.textContent = `${trainer.name}`;
    div.appendChild(p);
    const addButton = document.createElement("button");
    addButton.setAttribute("data-trainer-id", `${trainer.id}`);
    addButton.textContent = "Add Pokemon";
    addButton.addEventListener("click", onClickAdd);
    div.appendChild(addButton);
    const ul = document.createElement("ul");
    div.appendChild(ul);
  });
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

    formInput.placeholder = "New Team"
    formInput.id = "team-form-text"
    formInput.name = "formInput"

    formSubmit.textContent = "Submit"
    formSubmit.id = "form-submit"


    form.appendChild(formInput)
    form.appendChild(formSubmit)

    return form
}



function newTeamButton() {
    let button = document.createElement('button')
    button.textContent = 'Create a Team'
    button.addEventListener('click', function() {
        teamsContainer.innerHTML = ''
        teamsContainer.appendChild(generateTeamForm())
    })
    return button
}
