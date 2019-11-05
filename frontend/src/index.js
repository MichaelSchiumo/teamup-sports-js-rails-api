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

    const h2 = document.createElement("h2");
    h2.innerHTML = `${team.attributes.name}`
    teamsContainer.appendChild(h2)

    const teamColorEl = document.createElement("h4")
    teamColorEl.innerHTML = `Color: ${team.attributes.color.charAt(0).toUpperCase() + team.attributes.color.slice(1)}`
    h2.appendChild(teamColorEl)

    const teamRank = document.createElement("h4")
    teamRank.innerHTML = `Rank: ${team.attributes.rank}`
    h2.appendChild(teamRank)
    //edit button

  })
}

// function onClickAdd(event) {
//   const newTeamButton = event.currentTarget;
//   const teamId = newTeamButton.getAttribute('data-team-id');
//   fetchTeamAdd();
// }


// function onClickAdd(event) {
//   const addButton = event.currentTarget;
//   const list = addButton.parentElement.getElementsByTagName("li");
//   if (list.length < 6) {
//     const trainerId = addButton.getAttribute("data-trainer-id");
//     fetchPokemonAdd(trainerId);
//   } else {
//     alert("Stop being so greedy!");
//   }
// }





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
    colorInput.setAttribute('color', 'color')
    colorInput.placeholder = "Team Color"
    form.appendChild(colorInput)

    let rankInput = document.createElement("input")
    rankInput.setAttribute('rank', 'rank')
    rankInput.placeholder = "Team Rank"
    form.appendChild(rankInput)

    // formInput.id = "team-form-text"
    // formInput.name = "formInput"



    // form.appendChild(formInput)
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
