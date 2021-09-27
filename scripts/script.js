const root = document.getElementsByTagName('HTML')[0];
const body = document.getElementsByTagName('BODY')[0];

const nav = document.getElementById('navbar');

const navOpenClose = document.getElementById('nav-open-close');

navOpenClose.addEventListener('click', () => {
  nav.classList.toggle('mobile-open');
  navOpenClose.classList.toggle('open');
  root.classList.toggle('scroll-lock');
  body.classList.toggle('scroll-lock');
});
