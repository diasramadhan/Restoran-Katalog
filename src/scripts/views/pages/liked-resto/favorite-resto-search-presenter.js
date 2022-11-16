class FavoriteRestoSearchPresenter {
  constructor({ favoriteRestos }) {
    this._listenToSearchRequestByUser();
    this._favoriteRestos = favoriteRestos;
  }

  _listenToSearchRequestByUser() {
    this._queryElement = document.getElementById('query');
    this._queryElement.addEventListener('change', (event) => {
      this._searchRestos(event.target.value);
    });
  }

  _searchRestos(latestQuery) {
    this._latestQuery = latestQuery;
    this._favoriteRestos.searchRestos(this.latestQuery);
  }

  _showFoundRestos(restos) {
    const html = restos.reduce(
      (carry, resto) => carry.concat(
        `<li class="resto"><span class="resto__title">${resto.title || '-'}</span></li>`,
      ),
      '',
    );

    document.querySelector('.restos').innerHTML = html;
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestoSearchPresenter;
