const BASE_URL = "http://localhost:3000";
const TEAMS_URL = `${BASE_URL}/teams`;
const PlAYERS_URL = `${BASE_URL}/players`;



document.addEventListener("DOMContentLoaded", function() {
  fetchTeams();
});


function fetchTeams() {
  const teamsURL = "http://localhost:3000/teams";

  return fetch(teamsURL)
      .then(response => response.json())
      //promise
      // .then(result => renderTeams(json))
      .then(json => {
        renderTeams(json);
        console.log(json)
        //here is where we fetch players
      })
  };

function renderTeams(json) {
  json.forEach(team => {
    const teamsContainer = document.getElementById("div.teams-container");
    const teamsDiv = document.createElement("div");
    const teamNameEl = document.createElement("h2");

    teamsDiv.className = "team";
    teamName.className = "team-name";

    console.log(team)


  })
}

function renderToys(toys){
  toys.forEach(toy => {
    let cardEl = document.createElement("div");
    let toyNameEl = document.createElement("h2");
    let imgEl = document.createElement("img");
    let toyLikesEl = document.createElement("p");
    let likeBtnEl = document.createElement("button");

    cardEl.className = "card";

    imgEl.src = toy.image;

    imgEl.className = "toy-avatar";

    likeBtnEl.className = "like-btn";

    toyLikesEl.className = `${toy.name}-likes-container`;


    cardEl.appendChild(toyNameEl);
    cardEl.appendChild(imgEl);
    cardEl.appendChild(toyLikesEl);
    cardEl.appendChild(likeBtnEl);

    toyCollection.appendChild(cardEl);

    toyNameEl.innerText = toy.name;

    toyLikesEl.innerText = toy.likes;

    likeBtnEl.innerText = "Like This Toy!";

    likeBtnEl.addEventListener("click",function() {increaseToyLikes(toy)});


  })
};














const getTeams = async () => {
    teams = await fetchTeams()
    renderTeams(teams)
}

// const saveTeam = (team = null) => {
//   if (team != null) {
//       teams.push(team)
//   } else {
//       throw new Error("HALP ME")
//   }
// }

// function createTeam() {
//   form.addEventListener("submit", function(e) {
//     e.preventDefault();
//
//     let teamData = {
//       name: teamName,
//       color: teamColor,
//       rank: teamRank
//     }
//     return (
//       fetch('http://localhost:3000/teams', {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json"
//         },
//         body: JSON.stringify(teamData)
//       })
//     );
//   })
// };



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
