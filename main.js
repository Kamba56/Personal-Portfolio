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


const modalCard = [
  {
    id: 1,
    title: 'Tonic',
    imageM: './images/PopUpmobile.svg',
    imageD: './images/PopUpdesktopcopy.svg',
    heading2: ['Canopy', 'Back End Dev', '2015'],
    cardDescriptionD:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea, languages: html, css, javascript",
    cardDescriptionM:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ",
    languagesD: ['github', 'ruby', 'Bootstrap'],
    languagesM: ['html', 'css', 'javascript'],
    linkLive: 'https://silviatofana.github.io/portfolio/',
    linkSource: 'https://github.com/silviatofana/portfolio/tree/popup-window',
  },
];

const modalCardDisplay = modalCard
  .map(
    (modeCard) => `

<div class="card-portfolio-1">

            <li class="pop-close"><i class="fa fa-times"></i></li>
                <h2 class="tonic-1">${modeCard.title}</h2>
                    <h5 class="heading-canopy"><b>CANOPY</b> <span>·</span><small> Back End Dev <span>·</span> 2015 </small> </h5>
         <div class="images">
         <img class="forD-1" src="${modeCard.imageD}" alt="Pop Up Desktop" >
      <img class="forM-1" src="${modeCard.imageM}" alt="Pop Up Mobile" >

         </div>    
      
      <div>
      <div class="row">
      <div class="column-left-1">
          <p class="forD-1">
              ${modeCard.cardDescriptionM}
          </p>
          <p class="forM-1">
              ${modeCard.cardDescriptionM}
          </p>

      </div>
      <div class="column-right-1">
          <ul class="modal-1">
              ${modeCard.languagesM
    .map((lang) => `<li class="modal-2">${lang}</li>`)
    .join('')}
          </ul>
          <ul id="miss" class="miss modal-1">
          ${modeCard.languagesD
    .map((lang) => `<li class="modal-2">${lang}</li>`)
    .join('')}
          
          </ul>
          <hr>
          <ul class="modal-1">
              <li class="modal-3" href="${
  modeCard.linkLive
}">See live <img class="btnimag" src="./images/icon/Icon.png"></li>
              <li class="modal-3" href="${
  modeCard.linkSource
}">See Source <i class="fa fa-github"></i></li>

          </ul>
      </div>
  </div>
      </div>
  </div>
`,
  )
  .join('');