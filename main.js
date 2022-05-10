let menu = document.querySelector('#toggle-menu');
let closeMenu = document.querySelector('#toggle-menu-close');
let body = document.querySelector('body');
let nav = document.querySelector('ul.desktop-nav');

function openMenu() {
  menu.classList.add('d-none');
  closeMenu.classList.remove('d-none');
  closeMenu.classList.add('d-block');
  nav.classList.remove('flex-row', 'd-none');
  nav.classList.add('flex-column', 'mobile-nav', 'd-block');
}

menu.addEventListener('click', openMenu);