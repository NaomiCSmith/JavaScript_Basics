// file: pokemon.js

// We're going to use the publicly available Pokémon API to create a Pokédex app, where we can store a 
// list of Pokémon we have caught, in our quest to be the very best, like no one ever was.

// Create a file which exports a function fetchPokemon. This function should:
// Take the name of a Pokémon as an argument
// Use fetch to make a HTTP request to https://pokeapi.co/api/v2/pokemon/<pokemonname>
// Once the fetch has completed, then convert the response to JSON
// Once the response is converted to JSON, then log out the data.

const fetchPokemon = (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    });
} 

module.exports = fetchPokemon;