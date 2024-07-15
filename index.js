// View the roster.
// Observe a player's details.



const baseAPI = "https://fsa-puppy-bowl.herokuapp.com/api/2406-ftb-et-web-ft/players";

const getPlayers = async () => {
  const response = await fetch(baseAPI);
  const jsonResponse = await response.json();
  const players = jsonResponse.data.players;

  console.log(players)
}

getPlayers();