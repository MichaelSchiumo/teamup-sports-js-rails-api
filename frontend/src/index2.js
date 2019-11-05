const BASE_URL = "http://localhost:3000";
const TEAMS_URL = `${BASE_URL}/teams`;
const PlAYERS_URL = `${BASE_URL}/players`;

const teams = [];

document.addEventListener("DOMContentLoaded", function() {
  fetchTeams();
});


function fetchTeams() {
  return fetch(TEAMS_URL)
      .then(response => response.json())
      //promise
      // .then(result => renderTeams(json))
      .then(json => {
        renderTeams(json.data);
        console.log(json);
        //here is where we fetch players
      })
  };

function renderTeams(teamsArray) {
  teamsArray.forEach(team => {
    console.log(team)
  })
}


function saveTeam() {
  //post request with team data to store in backend

}

// return (
//     fetch("http://localhost:7000/toys", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify(toyData)
//     })
//   );

//
//
//
// const getTeams = async () => {
//     teams = await fetchTeams()
//     renderTeams(teams)
// }



function createTeam() {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    let teamData = {
      name: teamName,
      color: teamColor,
      rank: teamRank
    }
    return (
      fetch('http://localhost:3000/teams', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(teamData)
      })
    );
  })
};



const generateTeamForm = () => {
    const form = document.createElement('teamForm')
    const formInput = document.createElement('input')
    const formSubmit = document.createElement('button')

    form.id = "create-todo"

    formInput.placeholder = "team text"
    formInput.id = "team-form-text"
    formInput.name = "formInput"

    formSubmit.textContent = "Submit"
    formSubmit.id = "form-submit"


    form.appendChild(formInput)
    form.appendChild(formSubmit)

    return form
}
