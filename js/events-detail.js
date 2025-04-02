gsap.registerPlugin(ScrollTrigger);

import { fadeInTransition } from "./modules/fadein.js";
import { navigationMenu } from "./modules/navigation.js";
import { generalCarousel } from "./modules/general-carousel.js";

// Initialize modules
fadeInTransition();
navigationMenu();
generalCarousel();

const app = Vue.createApp({
  data() {
    return {
      event: null,
    };
  },
  created() {
    const params = new URLSearchParams(window.location.search);
    const eventID = params.get("id");
    fetch(`http://localhost:8888/BrothersInArms_API/public/events/${eventID}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.event = {
          id: data.event_id || null,
          title: data.event_title || "Untitled",
          date: data.event_date || null,
          detail: data.event_detail || null,
          content: data.event_content || null,
          image: data.images[0].image_link || null,
          location: data.event_location || null,
        };
      })
      .catch((error) => {
        console.error("Error fetching event:", error);
      });
  },
}).mount("#app");
