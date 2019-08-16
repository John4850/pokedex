import Component from '../Component.js';

class Header extends Component {
    onRender() {
    
    }


    renderHTML() {
        return /*html*/`
        <header>
            <img src="./assets/PokeballLogo.png">
            <h1>PokéDex</h1>
            <img src="./assets/PokeballLogo.png">
        </header>
        `;
    }
}

export default Header;