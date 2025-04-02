gsap.registerPlugin(ScrollTrigger);

import { fadeInTransition } from "./modules/fadein.js";
import { navigationMenu } from "./modules/navigation.js";
import { generalCarousel } from "./modules/general-carousel.js";

console.log("Homepage JS is Connected");

// Initialize modules
fadeInTransition();
navigationMenu();
generalCarousel();

const app2 = Vue.createApp({
  created() {
    console.log("🔥 Vue #app2 created()");
    fetch(
      "http://localhost:8888/brothers_in_arms_CMYKD/BrothersInArms_API/public/blogs"
    )
      .then((response) => response.json())
      .then((data) => {
        this.blogs = data.slice(0, 3);
        const blogs = this.blogs;
      })
      .catch((err) => {
        console.error("❌ Error app2:", err);
      });
  },
  data() {
    return {
      blogs: [],
    };
  },
}).mount("#app2");

const app = Vue.createApp({
  created() {
    fetch(
      "http://localhost:8888/BrothersInArms/BrothersInArms_API/public/blogs"
    )
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
}).mount("#app");
