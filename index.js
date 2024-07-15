// TODO -
// Observe a player's details.



// COMPLETED -
// View the roster.

const state = {}

const baseAPI = "https://fsa-puppy-bowl.herokuapp.com/api/2406-ftb-et-web-ft/players";

const getPlayers = async () => {
  try {
    const response = await fetch(baseAPI);
    const jsonResponse = await response.json();
    const playersArray = jsonResponse.data.players;
    

    playersArray.forEach(player => {
      const name = player.name
      state[name] = player;
    })
    
    displayPlayers();

  } catch (err) {
    alert(`Sorry! There has been an error!`)
    console.log(err)
  }  
}

const displayPlayers = () => {
  const ol = document.querySelector("ol");

  for (let player in state) {
    const li = document.createElement("li");
    const name = player;

    li.innerHTML = `
    ${name}
    `;

    ol.append(li);
  }

  const allPlayers = document.querySelectorAll("li");

  allPlayers.forEach(player => {
    player.addEventListener("click", (event) => {
      console.log(event.target.innerText)
      const playerName = event.target.innerText;
    })
  })
}

getPlayers();