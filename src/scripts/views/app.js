import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ menuBtn, nav, header }) {
    this._menuBtn = menuBtn;
    this._nav = nav;
    this._header = header;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      menuBtn: this._menuBtn,
      nav: this._nav,
      header: this._header,
    });

    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    const content = document.getElementById('maincontent');
    const header = document.querySelector('header');

    if (url === '/favorite') {
      const hero = document.querySelector('.hero-element');
      hero.style.display = 'none';
      header.className = 'solid';
      content.style.marginTop = '10rem';
    } else {
      header.classList.toggle('solid', window.scrollY > 300);
    }
    content.innerHTML = await page.render();
    await page.afterRender();
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#maincontent').focus();
    });
  }
}

export default App;
