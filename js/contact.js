gsap.registerPlugin(ScrollTrigger);

import { videoPlayer } from "./modules/player.js";
import { fadeInTransition } from "./modules/fadein.js";
import { navigationMenu } from "./modules/navigation.js"
import { faq } from "./modules/faq.js";

console.log("Homepage JS is Connected");

// Initialize modules
videoPlayer();
fadeInTransition();
navigationMenu();
faq();