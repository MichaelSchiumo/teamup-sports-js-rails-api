const BASE_URL = "http://localhost:3000";
const TEAMS_URL = `${BASE_URL}/teams`;
const PlAYERS_URL = `${BASE_URL}/players`;


let teamsContainer = document.querySelector('div.teams-container')

document.addEventListener("DOMContentLoaded", function() {
  generateTeamForm();
  fetchTeams();
  teamsContainer.appendChild(generateTeamForm());
  document.querySelector('#create-team').addEventListener("submit", function(e) {
    e.preventDefault();
    saveTeam(e.target.elements);
    document.querySelector('#team-wrapper').innerHTML = '';
    // teamsContainer.innerHTML = '';
    fetchTeams();

  })
});


function fetchTeams() {
  return fetch(TEAMS_URL)
      .then(response => response.json())
      .then(json => {
        renderTeams(json.data);
        //here is where we fetch players
      })
  };

//take our teamsArray, pass it to the buildTeamObjects function, and access the data as team.name, team.color etc.

function renderTeams(teamsArray) {
  let teamWrapper = document.createElement("div")
  teamWrapper.id = 'team-wrapper'
  teamsArray.forEach(team => {

    // let newTeam = new Team(team)

    const h2 = document.createElement("h2");
    h2.innerHTML = `${team.attributes.name}`
    teamsContainer.appendChild(teamWrapper)
    teamWrapper.appendChild(h2)

    const teamColorEl = document.createElement("h4")
    teamColorEl.innerHTML = `Color: ${team.attributes.color.charAt(0).toUpperCase() +
      team.attributes.color.slice(1)}`
    h2.appendChild(teamColorEl)

    const teamRank = document.createElement("h4")
    teamRank.innerHTML = `Rank: ${team.attributes.rank}`
    h2.appendChild(teamRank)
    //edit button
    // teamWrapper.appendChild(h2)

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


// const getTeams = async () => {
//   teams = await fetchTeams()
//   renderTeams()
// }


//what do we do after saveTeam?

function saveTeam(team) {
  //post request with team data to store in backend
  //assign team
  //get each individual string

  let teamData = {
    name: team.name.value,
    color: team.color.value,
    rank: team.rank.value
  }

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
