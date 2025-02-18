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

// Carousel Blog Bullet Pagination
const carouselItem = document.querySelector(".carousel-item");
const bullets = document.querySelectorAll(".bullet");
const slides = document.querySelectorAll(".slide");
const carouselItemSocmed = document.querySelector(".carousel-item-socmed");
const bulletsSocmed = document.querySelectorAll(".bullet-socmed");
const slidesSocmed = document.querySelectorAll(".slide-socmed");
const milestoneItem = document.querySelector(".milestone-item");
const bulletsPage = document.querySelectorAll(".bullet-page");
const slidesMilestone = document.querySelectorAll(".slide-milestone");
let currentIndex = 0;
let startingX = 0; 

function slide(index, carouselType) {
    if (carouselType === "blog") {
        const slideWidth = slides[0].offsetWidth;

        gsap.to(carouselItem, {
            x: -index * slideWidth,
            duration: 0.8,
            ease: "power2.inOut",
        });

        // Active Bullet Blog Indicator
        bullets.forEach((bullet, i) => {
            bullet.classList.toggle("active", i === index);
        });
    } else if (carouselType === "socmed") {
        const slideWidthSocmed = slidesSocmed[0].offsetWidth;

        gsap.to(carouselItemSocmed, {
            x: -index * slideWidthSocmed - index * 48,
            duration: 0.8,
            ease: "power2.inOut",
        });

        bulletsSocmed.forEach((bulletS, i) => {
            bulletS.classList.toggle("active", i === index);
        });
    } else if (carouselType === "milestone") {
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

function bulletClick(e) {
    const index = parseInt(e.target.getAttribute("data-index"));
    slide(index, "blog");
}

function bulletClickSocmed(e) {
    const index = parseInt(e.target.getAttribute("data-index"));
    slide(index, "socmed");
}

function bulletClickMilestone(e) {
    const index = parseInt(e.target.getAttribute("data-index"));
    slide(index, "milestone");
}

bullets.forEach((bullet) => {
    bullet.addEventListener("click", bulletClick);
});

bulletsSocmed.forEach((bulletS) => {
    bulletS.addEventListener("click", bulletClickSocmed);
});

bulletsPage.forEach((bulletP) => {
    bulletP.addEventListener("click", bulletClickMilestone);
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