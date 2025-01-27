(() => {
    // Plyr Video Player
    const player = new Plyr('video');
})();

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

// FaQ Function
const faqQuest = document.querySelectorAll('.faq-question');
const faqItems = document.querySelectorAll('.faq-item');

function toggleFaqItem(clicked) {
    // Open Faq Item
    clicked.classList.toggle('open');

    // Close other
    faqItems.forEach((item) =>{
        if (item !== clicked) {
            item.classList.remove('open');
        }
    });
}

function toggleFaq(e) {
    const faqItem = e.currentTarget.parentElement;
    toggleFaqItem(faqItem);
}

faqQuest.forEach((toggle) => {
    toggle.addEventListener('click', toggleFaq);
});

})();