// Text Changing

export function textChange() {
    const textElement = document.querySelector("#changing-text");
    const texts = [
        { text: "Honor", color: "#D80522" },
        { text: "Remember", color: "#D9B595" }
    ];
    let index = 0;

    function animateText() {
        gsap.to(textElement, {
            opacity: 1,
            duration: 1,
            onComplete: () => {
                index = (index + 1) % texts.length;
                textElement.style.color = texts[index].color;
                gsap.to(textElement, {
                    text: texts[index].text,
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    onComplete: () => setTimeout(animateText, 1000)
                });
            }
        });
    }

    setTimeout(animateText, 1000);
}