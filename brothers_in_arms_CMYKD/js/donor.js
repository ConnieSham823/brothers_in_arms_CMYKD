gsap.registerPlugin(ScrollTrigger);

import { videoPlayer } from "./modules/player.js";
import { fadeInTransition } from "./modules/fadein.js";
import { navigationMenu } from "./modules/navigation.js";
import { generalCarousel } from "./modules/general-carousel.js";
import { milestoneCarousel } from "./modules/milestone-carousel.js";

// Initialize modules
videoPlayer();
fadeInTransition();
navigationMenu();
generalCarousel();
milestoneCarousel();

const AmountApp = Vue.createApp({
  created() {
    fetch(
      "http://localhost:8888/brothers_in_arms_CMYKD/BrothersInArms_API/public/donations"
    )
      .then((response) => response.json())
      .then((data) => {
        this.donation = data;
      })
      .catch((er) => {
        console.error("Error fetching events:", er);
      });
  },
  data() {
    return {
      donation: [],
    };
  },
}).mount("#AmountApp");

const DonorApp = Vue.createApp({
  created() {
    fetch(
      "http://localhost:8888/brothers_in_arms_CMYKD/BrothersInArms_API/public/donations"
    )
      .then((response) => response.json())
      .then((data) => {
        this.donor = data.top_spender.map((donor) => ({
          name: donor.full_name || "Untitled",
          donate_amount: donor.total_amount || null,
        }));
      })
      .catch((er) => {
        console.error("Error fetching events:", er);
      });
  },
  data() {
    return {
      donor: [],
    };
  },
}).mount("#DonorApp");

const SponsorApp = Vue.createApp({
  created() {
    fetch(
      "http://localhost:8888/brothers_in_arms_CMYKD/BrothersInArms_API/public/sponsorships"
    )
      .then((response) => response.json())
      .then((data) => {
        this.sponsor = data;
        console.log("Fetched data:", this.sponsor);
        console.log("Sponsor data:", this.sponsor[0].images[0].image_link);
      })
      .catch((er) => {
        console.error("Error fetching events:", er);
      });
  },
  data() {
    return {
      sponsor: [],
    };
  },
}).mount("#SponsorApp");
