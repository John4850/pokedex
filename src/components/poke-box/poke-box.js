import Component from '../Component.js';
import Pokemon from '../poke-card/pokemon.js';


class NewComponent extends Component {
    renderHTML() {
        return /*html*/`
            <ul id="poke-box"></ul>
        `;
    }
}

export default NewComponent;