import Component from '../../components/Component.js';
import Header from '../header/header.js';
import getPokemon from '../../services/services.js';
import PokemonBox from '../poke-box/poke-box.js';
import hashStorage from '../../services/hash-storage.js';
import Search from '../options/search.js';
import Paging from '../options/paging.js';


class App extends Component {

    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const searchSection = dom.querySelector('.search-section');
        const search = new Search();
        searchSection.appendChild(search.renderDOM());

        const pagingSection = dom.querySelector('.paging-section');
        const paging = new Paging();
        pagingSection.appendChild(paging.renderDOM());

        const pokemonBox = new PokemonBox({ pokemonList: [] });
        const main = dom.querySelector('#main');
        main.appendChild(pokemonBox.renderDOM());

        function loadPokemon() {
            const options = hashStorage.get();
            getPokemon(options)
                .then(data => {
                    const pokemonList = data.results.results;
                    const totalCount = data.results.count;
                    pokemonBox.update({ pokemonList: pokemonList });
                    paging.update({
                        totalCount: totalCount,
                        currentPage: +options.page
                    });
                });

        }
        loadPokemon();
        window.addEventListener('hashchange', () => {
            loadPokemon();
        });
    }


    renderHTML() {
        return /*html*/`
            <div>
               <!-- header goes here --> 
                <main id="main">
                
                <section class="search-section">
                <section class="paging-section">
                
                    
                </main>

            </div> 
        `;
    }


}

export default App;