gsap.registerPlugin(ScrollTrigger);

import { fadeInTransition } from "./modules/fadein.js";
import { navigationMenu } from "./modules/navigation.js";
import { generalCarousel } from "./modules/general-carousel.js";
import { lightBox } from "./modules/lightbox.js";

console.log("Homepage JS is Connected");

// Initialize modules
fadeInTransition();
navigationMenu();
generalCarousel();
lightBox();

const app = Vue.createApp({
  created() {
    console.log("🔥 Vue #app created()");

    fetch(
      "http://localhost:8888/brothers_in_arms_CMYKD/BrothersInArms_API/public/victorias"
    )
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        this.victorias = data;
        window.victoriasData = data;
        console.log("Fetched data:", this.victorias);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  },
  data() {
    return {
      victorias: [],
    };
  },
}).mount("#app");
