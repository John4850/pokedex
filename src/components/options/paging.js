import Component from '../Component.js';
import hashStorage from '../../services/hash-storage.js';

class Paging extends Component {
    onRender(dom) {
        const prevButton = dom.querySelector('.prev');
        const nextButton = dom.querySelector('.next');
        
        if(!prevButton) {
            return;
        }
        
        const currentPage = this.props.currentPage || 1;
        
        function updatePage(increment) {
            hashStorage.set({ page: currentPage + increment });
        }
        
        prevButton.addEventListener('click', () => {
            updatePage(-1);
        });
        
        nextButton.addEventListener('click', () => {
            updatePage(1);
        });
        
    }
    renderHTML() {
        const currentPage = this.props.currentPage || 1;  //page on API
        const perPage = 20;  //perPage on API
        const totalCount = this.props.totalCount; //count from api
        if(!totalCount) {
            return /*html*/`
            <p class="paging">Your search yields No Results. . . </p>
            `;
        }
        const lastPage = Math.ceil(totalCount / perPage);
        
        return /*html*/`
        <section class="paging">
        <button class="prev" ${currentPage === 1 ? 'disabled' : ''}>◀</button>
        <span>Page ${currentPage} of ${lastPage}</span>
        <button class="next" ${currentPage === lastPage ? 'disabled' : ''}>▶</button>
        </section>
        `;
    }
}

export default Paging;