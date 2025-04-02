// Milestoen Carousel

export function milestoneCarousel() {
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
}