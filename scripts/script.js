const root = document.getElementsByTagName('HTML')[0];
const body = document.getElementsByTagName('BODY')[0];

const nav = document.getElementById('navbar');

const navOpen = document.getElementById('nav-open');
const navClose = document.getElementById('nav-close');

navOpen.addEventListener('click', () => {
  nav.classList.add('mobile-open');
  root.classList.add('scroll-lock');
  body.classList.add('scroll-lock');
});

navClose.addEventListener('click', () => {
  nav.classList.remove('mobile-open');
  root.classList.remove('scroll-lock');
  body.classList.remove('scroll-lock');
});
