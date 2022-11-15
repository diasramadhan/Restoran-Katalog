import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { showCardResto } from '../templetes/template-creator';

const Favorite = {
  async render() {
    return `
      <section>
        <h2 class="title-favorite">Your Like Restaurant</h2>
        <div class="resto-list" id="resto-list"></div>
      </section>
    `;
  },

  async afterRender() {
    const restorans = await FavoriteRestoIdb.getAllResto();
    const restoList = document.getElementById('resto-list');
    const titleFavorite = document.querySelector('.title-favorite');

    if (restorans.length === 0) {
      titleFavorite.innerHTML = '<h2>Ups Belum ada restoran favorit nihh...</h2>';
    } else {
      let card = '';
      restorans.forEach((resto) => {
        card += showCardResto(resto);
      });

      restoList.innerHTML = card;
    }
  },
};

export default Favorite;
