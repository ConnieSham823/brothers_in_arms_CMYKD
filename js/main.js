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

// Dropdown Menu
const dropDown = document.querySelectorAll(".drop-down-toggle");

function dropdownToggle(e) {
    e.preventDefault();

    const parent = this.parentElement;
    parent.classList.toggle("active");
}

function closeDropdown(e) {
    if (!e.target.closest(".drop-down")) {
        document.querySelectorAll(".drop-down").forEach((dropdown) => {
            dropdown.classList.remove("active");
        });
    }
}

dropDown.forEach((toggle) => {
    toggle.addEventListener("click", dropdownToggle);
});

document.addEventListener("click", closeDropdown);


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

// General Carousel
const carousels = document.querySelectorAll(".carousel-cont");

function slideContent(carousel, index) {
    const carouselItem = carousel.querySelector(".carousel-item-gen");
    const slides = carousel.querySelectorAll(".carousel-slide");
    const bullets = carousel.querySelectorAll(".carousel-bullet");

    if (!carouselItem || slides.length === 0) return;

    const slideWidth = slides[0].getBoundingClientRect().width;
    console.log("Slide Width:", slideWidth);

    gsap.to(carouselItem, {
        x: -index * slideWidth - index * 48,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
            const newWidth = slides[0].getBoundingClientRect().width;
            console.log("After Animation - Slide Width:", newWidth);
        }
    });

    bullets.forEach((bullet, i) => {
        bullet.classList.toggle("active", i === index);
    });

    carousel.dataset.currentIndex = index;
}

function slideContentTwo(carousel, index) {
    const carouselItemTwo = carousel.querySelector(".carousel-item-gen-two");
    const slidesTwo = carousel.querySelectorAll(".carousel-slide-two");
    const bulletsTwo = carousel.querySelectorAll(".carousel-bullet-two");

    if (!carouselItemTwo || slidesTwo.length === 0) return;

    const slideWidth = slidesTwo[0].getBoundingClientRect().width;
    console.log("Slide Width:", slideWidth);

    gsap.to(carouselItemTwo, {
        x: -index * slideWidth - index * 48,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
            const newWidth = slidesTwo[0].getBoundingClientRect().width;
            console.log("After Animation - Slide Width:", newWidth);
        }
    });

    bulletsTwo.forEach((bullet, i) => {
        bullet.classList.toggle("active", i === index);
    });

    carousel.dataset.currentIndex = index;
}

function bulletClick(e) {
    const bullet = e.target;
    const carousel = bullet.closest(".carousel-cont");
    const index = parseInt(bullet.getAttribute("data-index"));
    slideContent(carousel, index);
}

function bulletClickTwo(e) {
    const bullet = e.target;
    const carousel = bullet.closest(".carousel-cont");
    const index = parseInt(bullet.getAttribute("data-index"));
    slideContentTwo(carousel, index);
}

function touchStart(e) {
    const carousel = e.currentTarget;
    carousel.dataset.startX = e.touches[0].clientX;
}

function swipeMove(e) {
    e.preventDefault(); 
    const carousel = e.currentTarget;
    carousel.dataset.endX = e.touches[0].clientX;
}

function swipeEnd(e) {
    const carousel = e.currentTarget;
    const slides = carousel.querySelectorAll(".carousel-slide");
    let currentIndex = parseInt(carousel.dataset.currentIndex || 0);
    let startX = parseFloat(carousel.dataset.startX || 0);
    let endX = parseFloat(carousel.dataset.endX || startX);

    if (startX - endX > 50 && currentIndex < slides.length - 1) {
        slideContent(carousel, currentIndex + 1);
    } else if (endX - startX > 50 && currentIndex > 0) {
        slideContent(carousel, currentIndex - 1);
    }
}

carousels.forEach((carousel) => {
    carousel.dataset.currentIndex = 0;

    const bullets = carousel.querySelectorAll(".carousel-bullet");
    const bulletsTwo = carousel.querySelectorAll(".carousel-bullet-two");
    bullets.forEach((bullet) => bullet.addEventListener("click", bulletClick));
    bulletsTwo.forEach((bulletTwo) => bulletTwo.addEventListener("click", bulletClickTwo));

    carousel.addEventListener("touchstart", touchStart, false);
    carousel.addEventListener("touchmove", swipeMove, false);
    carousel.addEventListener("touchend", swipeEnd, false);

    slideContent(carousel, 0);
});

// AUTO-RESIZE HANDLING
window.addEventListener("resize", () => {
    carousels.forEach((carousel) => {
        let currentIndex = parseInt(carousel.dataset.currentIndex || 0);
        slideContent(carousel, currentIndex);
    });
});

// Carousel Blog Bullet Pagination
const milestoneItem = document.querySelector(".milestone-item");
const bulletsPage = document.querySelectorAll(".bullet-page");
const slidesMilestone = document.querySelectorAll(".slide-milestone");
let currentIndex = 0;
let startingX = 0; 

function slide(index, carouselType) {
    if (carouselType === "milestone") {
        const slideWidthMilestone = slidesMilestone[0].offsetWidth;

        gsap.to(milestoneItem, {
             x: -index * slideWidthMilestone - index * 48,
             duration: 0.8,
             ease: "power2.inOut",
        });

        bulletsPage.forEach((bulletP, i) => {
             bulletP.classList.toggle("active", i === index);
         });
    }
  
    currentIndex = index;
}

function bulletClickMilestone(e) {
    const index = parseInt(e.target.getAttribute("data-index"));
    slide(index, "milestone");
}

bulletsPage.forEach((bulletP) => {
    bulletP.addEventListener("click", bulletClickMilestone);
});
  
// Start with first slide active
slide(currentIndex);

// // Swipe variables
let startX = 0;
let endX = 0;

// Touch start
function touchStart(event) {
    startX = event.touches[0].clientX;
}

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