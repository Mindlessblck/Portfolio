// Observador de intersección para animaciones al scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scroll-animate');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observar todos los elementos con la clase 'animate-on-scroll'
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  animateElements.forEach(el => observer.observe(el));
});
