// TODO -
// style with css



// COMPLETED -
// View the roster.
// Observe a player's details.

const state = {}

const api = "https://fsa-puppy-bowl.herokuapp.com/api/2406-ftb-et-web-ft/players";

const getPlayers = async () => {
  try {
    const response = await fetch(api);
    const jsonResponse = await response.json();
    const playersArray = jsonResponse.data.players;
    

    playersArray.forEach(player => {
      const name = player.name
      state[name] = player;
    })
    
    displayPlayers();
    console.log(state);

  } catch (err) {
    alert(`Sorry! There has been an error!`)
    console.log(err)
  }  
}

const displayPlayers = () => {
  const main = document.querySelector("main");

  main.innerHTML = `
  <ol></ol>
  `;

  const ol = document.querySelector("ol");

  for (let player in state) {
    const li = document.createElement("li");
    const name = player;

    li.innerText = `${name}`;

    ol.append(li);
  }

  const allPlayers = document.querySelectorAll("li");

  allPlayers.forEach(player => {
    player.addEventListener("click", (event) => {
      const playerName = event.target.innerText;

      showPlayerDetails(playerName);
    })
  })
}

const showPlayerDetails = playerName => {
  const breed = state[playerName].breed;
  const status = state[playerName].status;
  const imageURL = state[playerName].imageUrl;

  const main = document.querySelector("main");

  main.innerHTML = `
  <section>
  <img src="${imageURL}" height=250px width=auto>
  <h2>${playerName}</h2>
  <ul>
    <li>${breed}</li>
    <li>${status}</li>
    <br>
    
  <button>Go Back to Roster</button>
  </ul>
  </section>
  `

  const button = document.querySelector("button");
  button.addEventListener("click", (event) => {
    displayPlayers();
  })
}



getPlayers();