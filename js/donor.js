gsap.registerPlugin(ScrollTrigger);

import { videoPlayer } from "./modules/player.js";
import { fadeInTransition } from "./modules/fadein.js";
import { navigationMenu } from "./modules/navigation.js"
import { generalCarousel } from "./modules/general-carousel.js";
import { milestoneCarousel } from "./modules/milestone-carousel.js";

console.log("Homepage JS is Connected");

// Initialize modules
videoPlayer();
fadeInTransition();
navigationMenu();
generalCarousel();
milestoneCarousel();