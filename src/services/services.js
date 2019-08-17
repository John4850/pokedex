const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

export default function getPokemon() {
    return fetch(URL)
        .then(response => response.json())
        .then(results => {
            return {
                results: results
            };
        });
}