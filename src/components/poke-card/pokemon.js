import Component from '../Component.js';

class Pokemon extends Component {
    renderHTML() {
        return /*html*/`
        <h2 id="pokemon">pichu</h2>
        <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png">
        <div id="type">type: electric</div>
        <div id="attack">attack: 35</div>
        <div id="defense">defense: 35</div>
        `;
    }
}

export default Pokemon;