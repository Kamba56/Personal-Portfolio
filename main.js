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
const section = document.querySelector('#work .container');

const modalList = [
  {
    buttonId: '1',
    name: 'Keeping track of hundreds of components',
    image: './assets/img/Snapshoot-Portfolio.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['github', 'ruby', 'Bootstrap'],
    live: 'https://kamba56.github.io/Personal-Portfolio/',
    source: 'https://github.com/Kamba56/Personal-Portfolio.git',
  },
  {
    buttonId: '2',
    name: 'Keeping track of hundreds of components',
    image: './assets/img/Snapshoot-Portfolio.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea, languages: html, css, javascript",
    technologies: ['github', 'ruby', 'Bootstrap'],
    live: 'https://kamba56.github.io/Personal-Portfolio/',
    source: 'https://github.com/Kamba56/Personal-Portfolio.git',
  },
  {
    buttonId: '3',
    name: 'Keeping track of hundreds of components',
    image: './assets/img/Snapshoot-Portfolio.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea, languages: html, css, javascript",
    technologies: ['github', 'ruby', 'Bootstrap'],
    live: 'https://kamba56.github.io/Personal-Portfolio/',
    source: 'https://github.com/Kamba56/Personal-Portfolio.git',
  },
  {
    buttonId: '4',
    name: 'Keeping track of hundreds of components',
    image: './assets/img/Snapshoot-Portfolio.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea, languages: html, css, javascript",
    technologies: ['github', 'ruby', 'Bootstrap'],
    live: 'https://kamba56.github.io/Personal-Portfolio/',
    source: 'https://github.com/Kamba56/Personal-Portfolio.git',
  },
  {
    buttonId: '5',
    name: 'Keeping track of hundreds of components',
    image: './assets/img/Snapshoot-Portfolio.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea, languages: html, css, javascript",
    technologies: ['github', 'ruby', 'Bootstrap'],
    live: 'https://kamba56.github.io/Personal-Portfolio/',
    source: 'https://github.com/Kamba56/Personal-Portfolio.git',
  },
  {
    buttonId: '6',
    name: 'Keeping track of hundreds of components',
    image: './assets/img/Snapshoot-Portfolio.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea, languages: html, css, javascript",
    technologies: ['github', 'ruby', 'Bootstrap'],
    live: 'https://kamba56.github.io/Personal-Portfolio/',
    source: 'https://github.com/Kamba56/Personal-Portfolio.git',
  },
];

const workSection = document.createElement('div');
workSection.classList.add('work-grid');
const projectSection = modalList.map((project) => `<div class="grid-item">
  <figure>
    <img src="#" alt="Picture of my work" />
  </figure>

  <div class="work-desc flex-column">
    <h3 class="semi-bold center-text work-title">
      Multi-Post Stories Gain+Glory
    </h3>

    <ul class="language flex-row">
      <li>Ruby on rails</li>
      <li>Css</li>
      <li>Javascript</li>
      <li>HTML</li>
    </ul>

    <button type="button" id="${project.buttonId}" class="btn see-project-button">See Project</button>
  </div>
</div>`).join('');

workSection.innerHTML = projectSection;
section.appendChild(workSection);

const popupList = modalList.map((project) => `<div class="modal-back">
  <div class="modal flex-column">
    <button class="close-popup">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <figure>
      <img src="${project.image}" alt="Pictue of project">
    </figure>

    <div class="flex-column modal-flex">
      <h3 class="semi-bold work-title">${project.name}</h3>
      <ul class="language flex-row">
        ${project.technologies.map((lang) => `<li>${lang}</li>`).join('')}
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
</div>`);

const seeProjectButton = Array.from(document.querySelectorAll('.see-project-button'));

function checkButton(button) {
  if (button.id === '1') {
    return popupList[0];
  } if (button.id === '2') {
    return popupList[1];
  } if (button.id === '3') {
    return popupList[2];
  } if (button.id === '4') {
    return popupList[3];
  } if (button.id === '5') {
    return popupList[4];
  } if (button.id === '6') {
    return popupList[5];
  }
  return null;
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