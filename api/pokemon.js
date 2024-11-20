// file: pokemon.js

// We're going to use the publicly available Pokémon API to create a Pokédex app, where we can store a 
// list of Pokémon we have caught, in our quest to be the very best, like no one ever was.

// Create a file which exports a function fetchPokemon. This function should:
// Take the name of a Pokémon as an argument
// Use fetch to make a HTTP request to https://pokeapi.co/api/v2/pokemon/<pokemonname>
// Once the fetch has completed, then convert the response to JSON
// Once the response is converted to JSON, then log out the data.


// Instead of console.loging the Pokémon data, we instead use it to create and return a new object, containing the following fields:
// name, the name of the Pokémon
// id, the id number of the Pokémon
// height
// weight
// (Bonus) types, what types the Pokémon is. This should be an array, such as ['electric'] or ['fire', flying']


const fetchPokemon = (pokemon) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => {
        if(!response.ok) {
            throw new Error(`Error fetching Pokemon: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        return {
            name: data.name,
            id: data.id,
            height: data.height,
            weight: data.weight,
        };
    });
} 

(async () => {
    try {
        const pokemon = await fetchPokemon('venusaur');
        console.log(pokemon);
    } catch (error) {
        console.error(error.message);
    }
})();

module.exports = fetchPokemon;