class FavoriteRestoSearchView {
  getTemplate() {
    return `
      <div id="resto-search-container">
        <input id="query" type="text">
        <div class="resto-result-container">
          <ul class="restos">
          </ul>
        </div>
      </div>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestos(restos) {
    let html;
    if (restos.length > 0) {
      html = restos.reduce(
        (carry, resto) =>
          carry.concat(
            `<li class="resto"><span class="resto__title">${resto.title || '-'}</span></li>`
          ),
        ''
      );
    } else {
      html = '<div class="restos__not__found">Resto tidak ditemukan</div>';
    }

    document.querySelector('.restos').innerHTML = html;

    document
      .getElementById('resto-search-container')
      .dispatchEvent(new Event('restos:searched:updated'));
  }
}

export default FavoriteRestoSearchView;
