const refs = {
  menuOpenBtn: document.querySelector('.js-open-menu'),
  menuCloseBtn: document.querySelector('.js-close-menu'),
  menuContainer: document.querySelector('.js-menu-container'),
  menuCloseListen: document.querySelector('.js-close'),
};

const toggleMenu = () => {
  refs.menuOpenBtn.setAttribute('aria-expanded', true);
  refs.menuContainer.classList.toggle('menu-container--is-open');
};

refs.menuOpenBtn.addEventListener('click', toggleMenu);
refs.menuCloseBtn.addEventListener('click', toggleMenu);
refs.menuCloseListen.addEventListener('click', toggleMenu);

