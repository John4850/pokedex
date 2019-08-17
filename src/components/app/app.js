import Component from '../../components/Component.js';
import Header from '../header/header.js';
import getPokemon from '../../services/services.js';


class App extends Component {

    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

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