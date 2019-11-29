
let scrollPos = 0;
const mainNav = document.querySelector('.main-nav');
const date = document.querySelector('.date');
const weather = document.querySelector('.weather');
const signInButton = document.querySelector('.sign-in-button');
const subscribeButton = document.querySelector('.subscribe-button');
const hamburger = document.querySelector('.hamburger-link');


function checkPosition() {
    let windowY = window.scrollY;
    if (scrollPos !== windowY) {
        mainNav.classList.add('main-nav-shrink');
        date.classList.add('hide');
        weather.classList.add('hide');
        subscribeButton.classList.add('hide');
        signInButton.classList.add('hide');
        hamburger.classList.remove('hide');

    }
    scrollPos = windowY;
    if (windowY === 0) {
        mainNav.classList.remove('main-nav-shrink');
        date.classList.remove('hide');
        weather.classList.remove('hide');
        subscribeButton.classList.remove('hide');
        signInButton.classList.remove('hide');
    }
  }
  
  window.addEventListener('scroll', checkPosition);
  