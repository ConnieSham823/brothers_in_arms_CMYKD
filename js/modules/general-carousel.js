// Mobile Menu

export function generalCarousel() {
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
}