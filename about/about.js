// Add scroll animations using Intersection Observer
const scrollAnimations = document.querySelectorAll('.scroll-animation');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 } // Trigger when 20% of the element is visible
);

scrollAnimations.forEach((element) => {
  observer.observe(element);
});

// Optional: GSAP for advanced animations
gsap.registerPlugin(ScrollTrigger);

gsap.from('.about-image', {
  scrollTrigger: {
    trigger: '.about-image',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none none',
  },
  opacity: 0,
  x: -50,
  duration: 1,
});

gsap.from('.about-content', {
  scrollTrigger: {
    trigger: '.about-content',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none none',
  },
  opacity: 0,
  x: 50,
  duration: 1,
});