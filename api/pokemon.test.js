// file: pokemon.test.js

const fetchPokemon = require('./pokemon.js')

describe('fetchPokemon', () => {
  it('returns a promise of the useful pokemon data', (done) => {
    fetchPokemon('charizard')
      .then((data) => {
        expect(data.id).toEqual(6);
        done();
      });
  });
});
