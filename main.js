const iconBars = document.querySelector('#toggle-menu');
const iconEx = document.querySelector('#toggle-menu-close');
const nav = document.querySelector('nav#navbar');
const body = document.querySelector('body');
const link = Array.from(document.querySelectorAll('nav ul li a'));
const navul = document.querySelector('ul.desktop-nav');

function openMenu() {
  nav.classList.replace('d-none', 'd-block');
  iconBars.classList.replace('d-block', 'd-none');
  iconEx.classList.replace('d-none', 'd-block');
  navul.classList.add('mobile-nav');
  body.style.position = 'fixed';
  body.style.top = `-${window.scrollY}px`;
}

function scrollBodyToInitial() {
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
}

function closeMenu() {
  nav.classList.replace('d-block', 'd-none');
  iconBars.classList.replace('d-none', 'd-block');
  iconEx.classList.replace('d-block', 'd-none');
  navul.classList.remove('mobile-nav');
  scrollBodyToInitial();
}

iconBars.addEventListener('click', openMenu);
iconEx.addEventListener('click', closeMenu);
link.forEach((x) => {
  x.addEventListener('click', closeMenu);
});


const modal = document.querySelector('div.modal-back');
// const body = document.querySelector('body');
// const seeProjectButton = document.querySelector('.see-project-button');
const seeProjectButton = Array.from(document.querySelectorAll('.see-project-button'));
const close = document.querySelector('.close-popup');

function openModal() {
  
  modal.classList.replace('d-none', 'd-block');
  // body.style.position = 'fixed';
  // body.style.top = `-${window.scrollY}px`;
}

function scrollBodyToInitial() {
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
}

function closeModal() {
  modal.classList.replace('d-block', 'd-none');
  // scrollBodyToInitial();
}
// seeProjectButton.addEventListener('click', () => {seeProjectButton.style.background = "red";});
seeProjectButton.forEach((x) => {
  x.addEventListener('click', openModal);
});

close.addEventListener('click', closeModal);