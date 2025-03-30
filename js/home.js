gsap.registerPlugin(ScrollTrigger, TextPlugin);

import { videoPlayer } from "./modules/player.js";
import { fadeInTransition } from "./modules/fadein.js";
import { navigationMenu } from "./modules/navigation.js"
import { generalCarousel } from "./modules/general-carousel.js";
import { imgZoom } from "./modules/img-zoom.js";
import { textChange } from "./modules/text-changing.js";

console.log("Homepage JS is Connected");

// Initialize modules
videoPlayer();
fadeInTransition();
navigationMenu();
generalCarousel();
imgZoom();
textChange();