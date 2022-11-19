import CONFIG from '../../globals/config';

const showCardResto = (resto) => `
  <article class="resto-item">
    <div class="resto-thumb">
      <img src="${CONFIG.MEDIUM_BASE_IMAGE_URL}${resto.pictureId || '-'}" alt="${
  resto.name || 'resto-picture'
}" />
      <p class="resto-rating">
        <i class="fas fa-star"></i>${resto.rating || '-'}
      </p>
      <p class="resto-location">
        <i class="fa-sharp fa-solid fa-location-dot"></i>${resto.city || '-'}
      </p>
    </div>

    <div class="resto-content">
      <a href="/#/detail/${resto.id}" class="resto-title resto__title">${resto.name || '-'}</a>
      <p>
        ${resto.description || '-'}
      </p>
    </div>
  </article>
  `;

const sectionDetail = (resto) => `
  <section class="detail">
    <article class="description-detail">
      <h3 class="resto__title">${resto.name}</h3>
      <div class="desc__content">
        <div class="thumbnail">
          <div class="resto-img">
            <img src="${CONFIG.MEDIUM_BASE_IMAGE_URL}${resto.pictureId}" alt="${resto.name}">
          </div>
        </div>
        <p>${resto.description}</p>
      </div>
    </article>
  </section>
`;

const kategoriMenu = (kategori) => {
  let kat = '';
  kategori.forEach((resto) => {
    kat += `<li>${resto.name}</li>`;
  });

  return kat;
};

const makananMenu = (foods) => {
  let emptyFood = '';
  foods.forEach((food) => {
    emptyFood += `<li>${food.name}</li>`;
  });

  return emptyFood;
};

const minumanMenu = (drinks) => {
  let emptyDrink = '';
  drinks.forEach((drink) => {
    emptyDrink += `<li>${drink.name}</li>`;
  });

  return emptyDrink;
};

const listReviewCustomer = (reviews) => {
  let emptyReview = '';

  reviews.forEach((review) => {
    emptyReview += `
    <li class="review_item">
      <img src="./images/user.png" alt="${review.name}" width="48" height="48" class="reviewer_photo">
      <div class="review_content">
        <p class="review_name">${review.name}</p>
        <p class="review_date">${review.date}</p>
        <p>${review.review}</p>
      </div>
    </li>
    `;
  });

  return emptyReview;
};

const sectionFormReview = () => `
  <h2>Form Add Review</h2>
  <section class="review-form">
    <picture>
      <source type="image/webp" srcset="./images/user.webp">
      <img src="./images/user.png" alt="Foto akun Anda" width="48" height="48" class="reviewer_photo">
    </picture>
    <form id="review-form" autocomplete="off">
      <input type="text" id="input-name" name="name" placeholder="Masukkan nama Kamu...">
      <textarea name="review" id="input-review" rows="5" placeholder="Masukkan review Kamu..."></textarea>
      <button type="submit" aria-label="Submit review" id="button-submit">
        <span class="btn__loading"></span>
        <span>Submit</span>
      </button>
    </form>
  </section>
`;

const sectionInformasi = (resto) => `
  <section class="info">
    <article class="main-info">
      <h2>Informasi</h2>
      <h3>Alamat</h3>
      <p>${resto.address}</p>
      <h3>Kota</h3>
      <p>${resto.city}</p>
      <h3>Rating</h3>
      <p>${resto.rating}</p>
      <h3>Ketegori Menu</h3>
      <ul>
        ${kategoriMenu(resto.categories)}
      </ul>
    </article>
    <article class="resto-menus">
      <h2>Daftar Menu</h2>
      <div class="menus">
        <div>
          <h3>Makanan</h3>
          <ul>
            ${makananMenu(resto.menus.foods)}
          </ul>
        </div>
        <div>
          <h3>Minuman</h3>
          <ul>
            ${minumanMenu(resto.menus.drinks)}
          </ul>
        </div>
      </div>
    </article>
  </section>
`;

const sectionReviewCustomer = (resto) => `
  <section class="reviews">
    <h2>Review Pelanggan</h2>
    <ul>
      ${listReviewCustomer(resto.customerReviews)}
    </ul>
  </section>
`;

const createRestoDetailTemplate = (resto) => `
  <h2>Detail Restoran</h2>
  <div class="resto-details">
    <div class="resto-info">
      ${sectionDetail(resto)}

      ${sectionInformasi(resto)}
    </div>
    <div class="resto-review">
      ${sectionReviewCustomer(resto)}

      ${sectionFormReview()}
    </div>
  </div>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  showCardResto,
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
