
let scrollPos = 0;
const mainNav = document.querySelector('.main-nav');

function checkPosition() {
    let windowY = window.scrollY;
    if (scrollPos !== windowY) {
        mainNav.classList.add('main-nav-shrink');
    }
    scrollPos = windowY;
    if (windowY === 0) {
        mainNav.classList.remove('main-nav-shrink');
    }
  }
  
  window.addEventListener('scroll', checkPosition);
  