document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('[data-aos]');
  
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        } else {
          entry.target.classList.remove('aos-animate');
        }
      });
    }, { threshold: 0.2 });
  
    elements.forEach(element => observer.observe(element));
  });
  

const menuToggle = document.createElement('i');
menuToggle.className = 'bx bx-menu menu-toggle';
document.querySelector('nav').appendChild(menuToggle);

const navUL = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navUL.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('nav')) {
    navUL.classList.remove('active');
  }
});