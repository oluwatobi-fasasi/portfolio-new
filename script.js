const menu = document.querySelector('.menu');
const twoShape = document.getElementById('two-shape');
const nav = document.querySelector('nav');
const cancel = document.querySelector('.cancel-button');
const home = document.querySelector('.home');
const portfolio = document.querySelector('.portfolio');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');

menu.addEventListener('click', () => {
  menu.style.display = 'none';
  twoShape.style.display = 'none';
  nav.style.display = 'flex';

  cancel.addEventListener('click', () => {
    menu.style.display = 'inline-block';
    twoShape.style.display = 'inline-block';
    nav.style.display = 'none';
  });

  home.addEventListener('click', () => {
    menu.style.display = 'inline-block';
    twoShape.style.display = 'inline-block';
    nav.style.display = 'none';
  });

  contact.addEventListener('click', () => {
    menu.style.display = 'inline-block';
    twoShape.style.display = 'inline-block';
    nav.style.display = 'none';
  });

  portfolio.addEventListener('click', () => {
    menu.style.display = 'inline-block';
    twoShape.style.display = 'inline-block';
    nav.style.display = 'none';
  });

  about.addEventListener('click', () => {
    menu.style.display = 'inline-block';
    twoShape.style.display = 'inline-block';
    nav.style.display = 'none';
  });
});

const projects = [
  {
    id: 1,
    name: 'Tech Talk Website',
    stack: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript',
    ],
    image: './images/Rectangle 21.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.<br><br>  Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    alt: 'project1',
    liveVersion: '#',
    source: '#',
  },

  {
    id: 2,
    name: 'Tech Talk Website',
    stack: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript',
    ],
    image: './images/Rectangle 21 (1).png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.<br><br>  Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    alt: 'project2',
    liveVersion: '#',
    source: '#',
  },
  {
    id: 3,
    name: 'Tech Talk Website',
    stack: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript',
    ],
    image: './images/Rectangle 21 (2).png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.<br><br>  Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    alt: 'project3',
    liveVersion: '#',
    source: '#',
  },
  {
    id: 4,
    name: 'Tech Talk Website',
    stack: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript',
    ],
    image: './images/Rectangle 21 (3).png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.<br><br>  Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    alt: 'project4',
    liveVersion: '#',
    source: '#',
  },
  {
    id: 5,
    name: 'Tech Talk Website',
    stack: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript',
    ],
    image: './images/Rectangle 21 (4).png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.<br><br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    alt: 'project5',
    liveVersion: '#',
    source: '#',
  },
  {
    id: 6,
    name: 'Tech Talk Website',
    stack: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript',
    ],
    image: './images/Rectangle 21 (5).png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.<br><br>  Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    alt: 'project6',
    liveVersion: '#',
    source: '#',
  },
];

const works = document.querySelector('.works');
projects.forEach((project, index) => {
  const grid = document.querySelector(`.grid${index + 1}`);
  const content = `<img
    src="${project.image}"
    alt="${project.alt}"
    class="loto${index + 1}"
  />
  <div class="card${index + 1}">
    <p class="project-name">${project.name}</p>
    <ul>
      <li>${project.stack[0]}</li>
      <li>${project.stack[1]}</li>
      <li>${project.stack[2]}</li>
    </ul>
    <a href="#" class="go-to-project"
       onClick = "shoW(${index})">Visit this project <img src="images/Union.png" alt="arrow"
    /></a>
  </div>`;

  grid.innerHTML = content;
  works.appendChild(grid);
});

/* eslint-disable no-unused-vars */
function shoW(id) {
  const popUpSection = document.querySelector('.pop-up-section');
  popUpSection.style.display = 'block';
  const bodyCont = `<div class="pop-up-container">
    <div class="bord">
    <img src="images/cancel.png" alt="close" class="pop-up-cancel-button">
    <div class="pop-up-card">
      <h3>${projects[id].name}</h3>
      <ul>
        <li>${projects[id].stack[0]}</li>
        <li>${projects[id].stack[1]}</li>
        <li>${projects[id].stack[2]}</li>
      </ul>
      <img
        src="${projects[id].image}"
        alt="website-picture"
        class="loto1"
      />
      <p>${projects[id].description}</p>
      <div class="live-source">
      <a href="https://microverse.org" class="see-live"
      >See live
      <img src="images/ic_link.png" alt="cv" class="cv-arrow"
    /></a>
    <a href="https://microverse.org" class="see-source"
      >See source
      <img src="images/ic_github_white.png" alt="cv" class="cv-arrow git-color"/>
      <img src="images/ic_github.svg" alt="cv" class="cv-arrow git-white"/>
    </a>
  </div>
    </div>
    </div>
  </div>`;

  popUpSection.innerHTML = bodyCont;

  const closPop = document.querySelector('.pop-up-cancel-button');
  closPop.addEventListener('click', () => {
    popUpSection.style.display = 'none';
  });
}

const form = document.querySelector('form');
const showError = document.getElementById('show-error');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (document.querySelector('#email').value.match(/[A-Z]/)) {
    showError.innerHTML = 'Please enter a valid email in lowercase';
    showError.style.display = 'block';
  } else {
    form.submit();
  }
});
