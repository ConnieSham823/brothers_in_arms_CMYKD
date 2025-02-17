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

// Current Page
const navLinks = document.querySelectorAll(".navlink");
console.log(navLinks);

function setActiveNav() {
    const currentPage = window.location.pathname.split("/").pop().split(".")[0];
    console.log(currentPage);
  
    navLinks.forEach(link => {
      const page = link.getAttribute("data-page");
      if (page === currentPage) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

setActiveNav();

// Hide Navbar when Scroll on Wider Screen
const mainHead = document.querySelector("#main-header");
let lastScrollY = window.scrollY;

function userScroll() {
  const scrollY = window.scrollY;

  if (window.innerWidth > 768) {
    mainHead.classList.toggle("hide-nav", scrollY > lastScrollY);
  }

  if (scrollY > lastScrollY) {
    mainHead.classList.add("hide-nav");
  } else {
    mainHead.classList.remove("hide-nav");
  }

  lastScrollY = scrollY;
}

window.addEventListener("scroll", userScroll);

// Carousel Blog Bullet Pagination
const carouselItem = document.querySelector(".carousel-item");
const bullets = document.querySelectorAll(".bullet");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;
let startingX = 0; 

function slide(index) {
    const slideWidth = slides[0].offsetWidth;
    gsap.to(carouselItem, {
        x: -index * slideWidth,
        duration: 0.8,
        ease: "power2.inOut",
    });
  
    // Active Bullet Indicator
    bullets.forEach((bullet, i) => {
      bullet.classList.toggle("active", i === index);
    });
  
    currentIndex = index;
}

function bulletClick(e) {
    const index = parseInt(e.target.getAttribute("data-index"));
    slide(index);
}

bullets.forEach((bullet) => {
    bullet.addEventListener("click", bulletClick);
});
  
// Start with first slide active
slide(currentIndex);

// Swipe variables
let startX = 0;
let endX = 0;

// Touch start
function touchStart(event) {
    startX = event.touches[0].clientX;
}

// Detect Swipe Event
function swipeMove(event) {
    endX = event.touches[0].clientX;
}

// Swipe End
function swipeEnd() {
    if (startX - endX > 50) {
        // Swiped left -> go to next slide
        if (currentIndex < slides.length - 1) {
            slide(currentIndex + 1);
        }
    } else if (endX - startX > 50) {
        // Swiped right -> go to previous slide
        if (currentIndex > 0) {
            slide(currentIndex - 1);
        }
    }
}

// Swipe Event Listeners -> Detect touch events
carouselItem.addEventListener("touchstart", touchStart, false);
carouselItem.addEventListener("touchmove", swipeMove, false);
carouselItem.addEventListener("touchend", swipeEnd, false);

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