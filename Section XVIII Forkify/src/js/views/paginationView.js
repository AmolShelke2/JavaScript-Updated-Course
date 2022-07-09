import View from './view';
import icons from 'url:../../img/icons.svg';

class paginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      console.log(goToPage);

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // page 1 and there are other pages.
    if (curPage === 1 && numPages > 1) {
      return `
       <p style="text-align: center; color: #000; font-size: 2rem">Num Pages ${numPages}</p>
        <button data-goto="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
           </svg>
        </button>

      `;
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return `
      <p style="text-align: center; color: #000; font-size: 2rem">Num Pages ${numPages}</p>
       <button data-goto="${
         curPage - 1
       }"class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
       </button>
      `;
    }

    // Other page.
    if (curPage < numPages) {
      return `
      <p style="text-align: center; color: #000; font-size: 2rem">Num Pages ${numPages}</p>
       <button data-goto="${
         curPage - 1
       }" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
       </button>
        <button data-goto="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
          </svg>
      </button>
      `;
    }

    // page 1 and there are no other pages.
    `<p style="text-align: center; color: #000; font-size: 2rem">Num Page ${numPages}</p>`;
    return '';
  }
}

export default new paginationView();
