// FaQ

export function faq() {
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
}