gsap.registerPlugin(ScrollTrigger);

import { videoPlayer } from "./modules/player.js";
import { fadeInTransition } from "./modules/fadein.js";
import { navigationMenu } from "./modules/navigation.js";
import { generalCarousel } from "./modules/general-carousel.js";

// Initialize modules
videoPlayer();
fadeInTransition();
navigationMenu();
generalCarousel();

const app = Vue.createApp({
  created() {
    fetch("http://localhost:8888/BrothersInArms_API/public/events")
      .then((response) => response.json())
      .then((data) => {
        this.events = data.slice(0, 2).map((event) => ({
          id: event.event_id || null,
          title: event.event_title || "Untitled",
          date: event.event_date || null,
          detail: event.event_detail || null,
          image: event.images[0].image_link || null,
          location: event.event_location || null,
        }));
      })
      .catch((er) => {
        console.error("Error fetching events:", er);
      });
  },
  data() {
    return {
      events: [],
    };
  },
}).mount("#app");

const app2 = Vue.createApp({
  created() {
    fetch("http://localhost:8888/BrothersInArms_API/public/events")
      .then((response) => response.json())
      .then((data) => {
        this.events = data.slice(0, 3).map((event) => ({
          id: event.event_id || null,
          title: event.event_title || "Untitled",
          date: event.event_date || null,
          detail: event.event_detail || null,
          image: event.images[0].image_link || null,
          location: event.event_location || null,
        }));
      })
      .catch((er) => {
        console.error("Error fetching events:", er);
      });
  },
  data() {
    return {
      events: [],
    };
  },
}).mount("#app2");
