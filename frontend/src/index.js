let data = {};

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
  fetchTeams();
})




// document.addEventListener('DOMContentLoaded', function() {
//   fetchTeams();
//   renderTeams();
// })


////////////////////////////////////////////////////////////////////////////












  //
  // function renderDogs(message) {
  //   //we pass in the array message in as an argument
  //    message.forEach(url => {
  //      //we iterate over each url in the array message
  //      let img = document.createElement("img");
  //      //create an image tag, "img"
  //      img.src = url;
  //      //set the image source equal to the url
  //      document.getElementById('dog-image-container').appendChild(img)
  //      //add the img variable (for each image) to the div(dog-image-container)
  //    })
  // };

  //
  //
  // function fetchBreeds(filter) {
  //   return fetch('https://dog.ceo/api/breeds/list/all')
  //   .then(response => response.json())
  //   .then(json => renderBreeds(json, filter))
  //   .then(json => data)
  // };
  //
  //
  // function changeColor(breed) {
  //     breed.style.color = "red";
  //     return false;
  // };
  //
  // function renderBreeds(json, filter) {
  //   for (var dogBreed in json.message) {
  //     let breed = document.createElement('li');
  //     breed.innerHTML = dogBreed;
  //     breed.onclick = () => changeColor(breed)
  //     breed.id = dogBreed;
  //     document.getElementById('dog-breeds').appendChild(breed);
  //   }
  // };

  //
  // document.addEventListener('DOMContentLoaded', function() {
  //   fetchDogs();
  //   fetchBreeds();
  //   document.getElementById('breed-dropdown').addEventListener('change', e => {
  //     fetchBreeds(e.target.value);
  //     console.log(e);
  //     console.log(data);
  //   });
  //
  // });
