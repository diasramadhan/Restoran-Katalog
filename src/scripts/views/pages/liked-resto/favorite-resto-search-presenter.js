class FavoriteRestoSearchPresenter {
  constructor({ favoriteResto }) {
    this._listenToSearchRequestByUser();
    this._favoriteResto = favoriteResto;
  }

  _listenToSearchRequestByUser() {
    this._queryElement = document.getElementById('query');
    this._queryElement.addEventListener('change', (event) => {
      this._latestQuery = event.target.value;
      this._favoriteResto.searchResto(this._latestQuery);
    });
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestoSearchPresenter;
