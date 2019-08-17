import Component from '../../components/Component.js';
import Header from '../header/header.js';
import getPokemon from '../../services/services.js';
import PokemonBox from '../poke-box/poke-box.js';
// import hashStorage from '../../services/hash-storage.js';


class App extends Component {

    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const pokemonBox = new PokemonBox({ pokemonList: [] });
        const main = dom.querySelector('#main');
        main.appendChild(pokemonBox.renderDOM());

        function loadPokemon() {
            // const options = hashStorage.get();
            getPokemon()
                .then(data => {
                    const pokemonList = data.results.results;
                    pokemonBox.update({ pokemonList: pokemonList });
                });

        }
        loadPokemon();
    }


    renderHTML() {
        return /*html*/`
            <div>
               <!-- header goes here --> 
                <main id="main">
                    
                </main>

            </div> 
        `;
    }


}

export default App;