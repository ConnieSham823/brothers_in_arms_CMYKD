gsap.registerPlugin(ScrollTrigger);

import { fadeInTransition } from "./modules/fadein.js";
import { navigationMenu } from "./modules/navigation.js"
import { generalCarousel } from "./modules/general-carousel.js";
import { lettersLightbox } from "./modules/letters-lightbox.js";

console.log("Homepage JS is Connected");

// Initialize modules
fadeInTransition();
navigationMenu();
generalCarousel();
lettersLightbox();