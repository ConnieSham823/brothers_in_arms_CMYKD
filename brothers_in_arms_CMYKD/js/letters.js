gsap.registerPlugin(ScrollTrigger);

import { fadeInTransition } from "./modules/fadein.js";
import { navigationMenu } from "./modules/navigation.js";
import { generalCarousel } from "./modules/general-carousel.js";
import { lettersLightbox } from "./modules/letters-lightbox.js";

console.log("Homepage JS is Connected");

// Initialize modules
fadeInTransition();
navigationMenu();
generalCarousel();
lettersLightbox();

const app = Vue.createApp({
  created() {
    fetch(
      "http://localhost:8888/BrothersInArms/BrothersInArms_API/public/warletters"
    )
      .then((response) => response.json())
      .then((data) => {
        this.letters = data.map((letter) => ({
          letter_id: letter.letter_id || null,
          letter_name: letter.name || "Untitled",
          letter_date: letter.date || null,
          letter_location: letter.location || null,
          letter_content: letter.quote,
          letter_context: letter.context,
          loadingLetters: false,
        }));
        console.log("Raw API data:", data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  },
  data() {
    return {
      letters: [],
      loadingLetters: true,
    };
  },
}).mount("#app");
