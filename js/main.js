// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu a');

menuBtn?.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  menuBtn.classList.toggle('active');
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// Nav scroll effect
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Reveal on scroll
const reveals = document.querySelectorAll('.p-card, .work-card, .service, .about-text, .about-visual, .section-header, .contact-inner');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.classList.add('reveal');
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

reveals.forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Smooth active nav (optional)
const sections = document.querySelectorAll('section[id], header[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop;
    if (scrollY >= top - 120) {
      current = section.getAttribute('id');
    }
  });
});
