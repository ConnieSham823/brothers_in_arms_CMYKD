// Img Zoom

export function imgZoom() {
    window.addEventListener("load", () => {
        ScrollTrigger.refresh(); 
    });

    const imgs = document.querySelectorAll("#hero img");

    imgs.forEach((img) => {
        gsap.fromTo(img, 
            {
                scale: 1,
                filter: "blur(0px)",
                opacity: 1
            }, 
            {
                scale: 2.5,
                filter: "blur(1px)",
                opacity: 0.5,
                scrollTrigger: {
                    trigger: "#hero",
                    start: "top 25%",
                    end: "bottom top",
                    scrub: 1,
                    // markers: true
                }
            }
        );
    });
}