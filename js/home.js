gsap.registerPlugin(ScrollTrigger, TextPlugin);

import { videoPlayer } from "./modules/player.js";
import { fadeInTransition } from "./modules/fadein.js";
import { navigationMenu } from "./modules/navigation.js";
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

const app = Vue.createApp({
  created() {
    fetch("http://localhost:8888/BrothersInArms_API/public/blogs")
      .then((response) => response.json())
      .then((data) => {
        this.blogs = data
          .sort((a, b) => new Date(b.blog_date) - new Date(a.blog_date))
          .slice(0, 2);
        console.log("Fetched data:", this.blogs);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  },
  data() {
    return {
      blogs: [],
    };
  },
  methods: {
    getBlog(id) {
      fetch(`http://localhost:8888/BrothersInArms_API/public/blogs/${id}`)
        .then((response) => response.json())
        .then((data) => {
          this.blogs = data.slice(0, 2);
          console.log("Fetched data:", data);
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
        });
    },
  },
}).mount("#app");
