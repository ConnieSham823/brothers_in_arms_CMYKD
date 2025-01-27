(() => {
// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-menu');

function toggleHamburger() {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('show');
    console.log('Hamburger Button Toggled');
}

hamburger.addEventListener('click', toggleHamburger);

})();