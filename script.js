// navigation bar
const navbar = document.querySelector('.navbar');
const toggleIcon = document.querySelector('.toggle-icon');

toggleIcon.addEventListener('click', () => {
  navbar.classList.toggle('expanded');
});

// Scroll Animation
const scrollElements = document.querySelectorAll('.scroll-animation');

const elementInView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight);
};

const displayScrollElement = (element) => {
  element.classList.add('visible');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el)) {
      displayScrollElement(el);
    }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

// Initial check on page load
handleScrollAnimation();