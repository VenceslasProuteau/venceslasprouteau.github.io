function removeActiveTab() {
  tabs.forEach(tab => {
    tab.classList.remove("is-active");
  });
  sections.forEach(section => {
    section.classList.remove("is-active");
  });
}

function addActiveTab(tab) {
  tab.classList.add("is-active");
  const href = tab.querySelector("a").getAttribute("href");
  const matchingSection = document.querySelector(href);
  matchingSection.classList.add("is-active");
}

const tabs = document.querySelectorAll(".tabs li");
const sections = document.querySelectorAll(".tabs-container > section");

tabs.forEach(tab => {
  tab.addEventListener("click", e => {
    e.preventDefault();
    removeActiveTab();
    addActiveTab(tab);
  });
})

function toggleStickyNav() {
  const navList = header.children[0];
  header.classList.toggle('active');
  navList.classList.toggle('sticky-nav');
  document.body.classList.toggle('no-overflow')[0];
}

const toggleStickyNavBtn = document.querySelector('header > div.layout > button');
const header = document.querySelector('header');

toggleStickyNavBtn.addEventListener('click', toggleStickyNav);
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