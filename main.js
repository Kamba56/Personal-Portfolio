const iconBars = document.querySelector('#toggle-menu');
const iconEx = document.querySelector('#toggle-menu-close');
const nav = document.querySelector('nav#navbar');
const body = document.querySelector('body');
const link = Array.from(document.querySelectorAll('nav ul li a'));
const navul = document.querySelector('ul.desktop-nav');


// Mobile MEnu
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


// Modal Functionalities
const seeProjectButton = Array.from(document.querySelectorAll('.see-project-button'));


const modalList = [
  {
    title: 'Keeping track of hundreds of components',
    image: './images/PopUpmobile.svg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    languages: ['github', 'ruby', 'Bootstrap'],
    live: 'https://silviatofana.github.io/portfolio/',
    source: 'https://github.com/silviatofana/portfolio/tree/popup-window',
  },
  {
    title: 'Keeping track of hundreds of components',
    image: './images/PopUpmobile.svg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea, languages: html, css, javascript",
    languages: ['github', 'ruby', 'Bootstrap'],
    live: 'https://silviatofana.github.io/portfolio/',
    source: 'https://github.com/silviatofana/portfolio/tree/popup-window',
  },
  {
    title: 'Keeping track of hundreds of components',
    image: './images/PopUpmobile.svg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea, languages: html, css, javascript",
    languages: ['github', 'ruby', 'Bootstrap'],
    live: 'https://silviatofana.github.io/portfolio/',
    source: 'https://github.com/silviatofana/portfolio/tree/popup-window',
  },
  {
    title: 'Keeping track of hundreds of components',
    image: './images/PopUpmobile.svg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea, languages: html, css, javascript",
    languages: ['github', 'ruby', 'Bootstrap'],
    live: 'https://silviatofana.github.io/portfolio/',
    source: 'https://github.com/silviatofana/portfolio/tree/popup-window',
  },
  {
    title: 'Keeping track of hundreds of components',
    image: './images/PopUpmobile.svg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea, languages: html, css, javascript",
    languages: ['github', 'ruby', 'Bootstrap'],
    live: 'https://silviatofana.github.io/portfolio/',
    source: 'https://github.com/silviatofana/portfolio/tree/popup-window',
  },
  {
    title: 'Keeping track of hundreds of components',
    image: './images/PopUpmobile.svg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea, languages: html, css, javascript",
    languages: ['github', 'ruby', 'Bootstrap'],
    live: 'https://silviatofana.github.io/portfolio/',
    source: 'https://github.com/silviatofana/portfolio/tree/popup-window',
  }
];

const popupList = modalList.map((project) => 
  `<div class="modal-back">
  <div class="modal flex-column">
    <button class="close-popup">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <figure>
      <img src="${project.image}" alt="Pictue of project">
    </figure>

    <div class="flex-column modal-flex">
      <h3 class="semi-bold work-title">${project.title}</h3>
      <ul class="language flex-row">
        ${project.languages.map((lang) => 
            `<li>${lang}</li>`
          ).join('')}
      </ul>
      <p>${project.description}</p>

      <div class="popup-buttons">
        <a href="${project.live}" class="btn">See Live
          <i class="fa-brands"></i>
        </a>
        <a href="${project.source}" class="btn">Source
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  </div>
</div>`
);


function checkButton(button) {
  if(button.id == '1') {
    return popupList[0];
  }
  else if(button.id == '2') {
    return popupList[1];
  }
  else if(button.id == '3') {
    return popupList[2];
  }
  else if(button.id == '4') {
    return popupList[3];
  }
  else if(button.id == '5') {
    return popupList[4];
  }
  else if(button.id == '6') {
    return popupList[5];
  }
}
function closeModal() {
  const close = document.querySelector('.close-popup');
  const modal = document.querySelector('div.modal-back');
  close.addEventListener('click', () => {
    modal.remove();
  });
}
seeProjectButton.forEach((button) => {
  button.addEventListener('click', () => {
      document.querySelector('#modal-container').innerHTML += checkButton(button);
      closeModal();
  });
});