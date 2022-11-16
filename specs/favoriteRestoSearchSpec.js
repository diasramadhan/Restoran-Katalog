import FavoriteRestoSearchPresenter from '../src/scripts/views/pages/liked-resto/favorite-resto-search-presenter';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Searching restos', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="resto-search-container">
        <input id="query" type="text">
        <div class="resto-result-container">
          <ul class="restos">
          </ul>
        </div>
      </div>
    `;
  });

  it('should be able to capture the query typed by the user', () => {
    spyOn(FavoriteRestoIdb, 'searchRestos');
    const presenter = new FavoriteRestoSearchPresenter({ favoriteRestos: FavoriteRestoIdb });

    const queryElement = document.getElementById('query');
    queryElement.value = 'resto a';
    queryElement.dispatchEvent(new Event('change'));

    expect(presenter.latestQuery).toEqual('resto a');
  });

  it('should ask the model to search for liked restos', () => {
    spyOn(FavoriteRestoIdb, 'searchRestos');
    const presenter = new FavoriteRestoSearchPresenter({ favoriteRestos: FavoriteRestoIdb });

    const queryElement = document.getElementById('query');
    queryElement.value = 'resto a';
    queryElement.dispatchEvent(new Event('change'));

    expect(FavoriteRestoIdb.searchRestos).toHaveBeenCalledWith('resto a');
  });
});
