export function lettersLightbox() {
    // Variables
    const cards = document.querySelectorAll(".card-letter");
    const lightbox = document.querySelector(".letters-lightbox-cont");
    const overlay = document.querySelector(".letters-lightbox");
    const lightboxContent = document.querySelector(".letters-lightbox-cont .content");
    const closeButton = document.querySelector(".letters-lightbox-close");
    
    // Functions
    function openLightbox(e) {
        lightboxContent.innerHTML = e.currentTarget.innerHTML;
        overlay.style.display = "flex";
        lightbox.style.display = "flex";
    }
    
    function closeLightbox() {
        overlay.style.display = "none";
        lightbox.style.display = "none";
    }
    
    // Event Listeners
    cards.forEach(card => card.addEventListener("click", openLightbox)); 
    closeButton.addEventListener("click", closeLightbox);
    overlay.addEventListener("click", closeLightbox);
    
    closeLightbox();
}