import Component from '../Component.js';

class Pokemon extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;

        return /*html*/`
        <div class="poke-card">
        <h2 id="pokemon">${pokemon.pokemon}</h2>
        <img src=${pokemon.url_image}>
        <div id="type">type: ${pokemon.type_1}</div>
        <div id="attack">attack: ${pokemon.attack}</div>
        <div id="defense">defense: ${pokemon.defense}</div>
        </div>
        `;
    }
}

export default Pokemon;