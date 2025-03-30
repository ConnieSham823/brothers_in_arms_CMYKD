gsap.registerPlugin(ScrollTrigger);

import { videoPlayer } from "./modules/player.js";
import { fadeInTransition } from "./modules/fadein.js";
import { navigationMenu } from "./modules/navigation.js";
import { generalCarousel } from "./modules/general-carousel.js";
import { imgZoom } from "./modules/img-zoom.js";

console.log("Homepage JS is Connected");

// Initialize modules
videoPlayer();
fadeInTransition();
navigationMenu();
generalCarousel();
imgZoom();

const app = Vue.createApp({
  created() {
    fetch("http://localhost:8888/BrothersInArms_API/public/blogs")
      .then((response) => response.json())
      .then((data) => {
        this.blogs = data;
        this.title = data.title;
        this.isLoading = false;
        console.log("Connected", data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  },
  data() {
    return {
      blogs: [],
      title: "",
      isLoading: true,
    };
  },
  methods: {},
}).mount("#app");
