import Component from '../Component.js';
import Pokemon from '../poke-card/pokemon.js';


class PokemonBox extends Component {

    onRender(dom) {
        const pokemonList = this.props.pokemonList;
        pokemonList.forEach(pokemon => {
            const props = { pokemon: pokemon };
            const pokemonCard = new Pokemon(props);
            const pokemonCardDOM = pokemonCard.renderDOM();
            dom.appendChild(pokemonCardDOM);
                
        });


    }


    renderHTML() {
        return /*html*/`
            <section class="poke-box"></section>
        `;
    }
}

export default PokemonBox;