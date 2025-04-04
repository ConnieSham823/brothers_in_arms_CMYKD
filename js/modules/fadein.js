// Fade In Transition

export function fadeInTransition() {
    const fadeIn = document.querySelectorAll('.fade-in');

    fadeIn.forEach((fade) => {
        if (fade.classList.contains('hidden')) {
            
        }
        
        gsap.fromTo(
            fade,
            {autoAlpha: 0, y: 30},

            {
                autoAlpha: 1,
                y: 0,
                duration: 1,
                ease: "power1.out",

                scrollTrigger: {
                trigger: fade,
                start: "top 80%",
                toggleActions: "play none none none",
                markers: false
                }
            }
        );
    });
}