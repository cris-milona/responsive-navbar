const menuBtn = document.querySelector('[data-menu-svg]');
const closeMenuBtn = document.querySelector('[data-close-menu-svg]');
const navbar = document.querySelector('[data-navbar]');

menuBtn.addEventListener('click', () => {
  navbar.classList.add('show-nav');
  closeMenuBtn.classList.add('show-svg');
  menuBtn.classList.remove('menu-svg');
});

closeMenuBtn.addEventListener('click', () => {
  navbar.classList.remove('show-nav');
  closeMenuBtn.classList.remove('show-svg');
  menuBtn.classList.add('menu-svg');
});
