const menu = document.querySelector('#toggle-menu');
const icon = document.querySelector('#toggle-menu i')
const nav = document.querySelector('nav#navbar');
const body = document.querySelector('body');
const link = document.querySelectorAll('nav ul li a');
const navul = document.querySelector('ul.desktop-nav');

function openMenu() {
  nav.classList.replace('d-none', 'd-block');
  icon.classList.replace('fa-bars', 'fa-xmark');e
}

menu.addEventListener('click', openMenu);