const iconBars = document.querySelector('#toggle-menu');
const iconEx = document.querySelector('#toggle-menu-close')
const nav = document.querySelector('nav#navbar');
const body = document.querySelector('body');
const link = document.querySelectorAll('nav ul li a');
const navul = document.querySelector('ul.desktop-nav');

function openMenu() {
  nav.classList.replace('d-none', 'd-block');
  iconBars.classList.replace('d-block', 'd-none');
  iconEx.classList.replace('d-none', 'd-block');
  navul.classList.add('mobile-nav');
  body.style.position = 'fixed';
  body.style.top = '-${window.scrollY}px';
}

function closeMenu() {
  nav.classList.replace('d-block', 'd-none');
  iconBars.classList.replace('d-none', 'd-block');
  iconEx.classList.replace('d-block', 'd-none');
  navul.classList.remove('mobile-nav');
  scrollBodyToInitial();
}

function scrollBodyToInitial() {
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

iconBars.addEventListener('click', openMenu);
iconEx.addEventListener('click', closeMenu);