const experiences = [
  {
    id: 'canal',
    title: 'CANAL+',
    date: 'July 2017 - Present',
    description: 'Frontend engineer working on customer care & sales applications / Sales app for CANAL+ distributors / TVI sales app. <br /> This is a summary of the stack we are using on these projects :',
    technologies: [{
      id: 'react',
      name: '<h2>React</h2>: using react & react-router-dom only, as our approach is to make apps that are the less possible framework dependant, in order to facilite future potential migrations.'
    }, {
      id: 'sass',
      name: '<h2>Sass</h2>',
    }, {
      id: 'webpack',
      name: '<h2>Webpack</h2>: used for dev server, and building of app',
    }, {
      id: 'gulp',
      name: '<h2>Gulp</h2>: used to orchestrate our tasks (launch local server, e2e, unit tests etc..)',
    }, {
      id: 'jest',
      name: '<h2>Jest</h2>: unit testing of all our components and services',
    }, {
      id: 'cypress',
      name: '<h2>Cypress</h2>: e2e testing off all apps pages, to avoid any css regressions on our pages'
    }]
  },
  {
    id: 'poliris',
    title: 'SeLoger',
    date: 'September 2013 - June 2017',
    description: 'Frontend engineer working on the development of Périclès Nomade & Avis de valeur, real estate agencies apps ',
    technologies: [{
      id: 'angularjs',
      name: '<h2>AngularJS</h2>'
    }, {
      id: 'sass',
      name: '<h2>Sass</h2>',
    }]
  }
];

function setContent(el) {
  const container = document.getElementById('experiences');
  const content = container.querySelector('div');

  container.querySelectorAll('li').forEach((item) => {
    item.classList.remove('active');
    if (item.id === el.target.id) {
      item.classList.add('active');
      content.replaceWith(getContent(el.target.id));
    }
  })
}

function getContent(id) {
  const experience = experiences.find((exp) => exp.id === id);
  const content = document.createElement('div');
  const title = document.createElement('h1');
  const description = document.createElement('p');
  const usedTechnos = document.createElement('ul');
  
  experience.technologies.forEach((t) => {
    const techno = document.createElement('li');
    techno.innerHTML = t.name;
    usedTechnos.append(techno);
  });

  description.innerHTML = experience.description;
  title.innerHTML = experience.date;

  content.append(title, description, usedTechnos);

  return content;
}

function init() {
  function getItem(exp, index) {
    const item = document.createElement('li');
    item.innerHTML = exp.title;
    item.id = exp.id;

    if (index === 0) {
      item.classList.add('active');
    }

    item.addEventListener('click', setContent);

    return item;
  }

  const element = document.getElementById('experiences');
  const listEl = document.createElement('ul');

  element.append(listEl);

  experiences.forEach((exp, index) => {
    element.children[0].appendChild(getItem(exp, index));
  });
  
  element.append(getContent(listEl.children[0].id));
}

function toggleStickyNav() {
  const navList = header.children[0];
  header.classList.toggle('active');
  navList.classList.toggle('sticky-nav');
  document.body.classList.toggle('no-overflow')[0];
}

const toggleMenuEl = document.querySelector('header > button');
const header = document.querySelector('header');

toggleMenuEl.addEventListener('click', toggleStickyNav);
document.querySelectorAll('header > nav > ul > li')
  .forEach((node) => {
    node.addEventListener('click', (e) => {
      if (header.children[0].classList.contains('sticky-nav')) {
        toggleStickyNav();
      }
    });
  });

const opts = {
  rootMargin: '-30px',
};

const cb = (e) => {
  const header = document.getElementsByTagName('header')[0];
  if (!e[0].isIntersecting) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

const observer = new IntersectionObserver(cb, opts);

const target = document.getElementsByTagName('section')[0];
observer.observe(target);

init();