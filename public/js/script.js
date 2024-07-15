// navbar fixed
window.onscroll = function () {
  const header = this.document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

// hamburger menu
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  menu.classList.toggle('hidden');
});
