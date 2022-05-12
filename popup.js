const modal = document.querySelector('div.modal-back');
const body = document.querySelector('body');
const seeProjectButton = document.querySelector('.btn');
// const seeProjectButton = Array.from(document.querySelectorAll('.see-project-button'));
const close = document.querySelector('.close-popup');

function openModal() {
  body.style.position = 'fixed';
  body.style.top = `-${window.scrollY}px`;
  modal.classList.replace('d-none', 'd-block');
}

function scrollBodyToInitial() {
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
}

function closeModal() {
  modal.classList.replace('d-block', 'd-none');
  scrollBodyToInitial();
}
seeProjectButton.addEventListener('click', () => {seeProjectButton.style.background = "red";});
// seeProjectButton.forEach((x) => {
//   x.addEventListener('click', openModal);
// });

close.addEventListener('click', closeModal);