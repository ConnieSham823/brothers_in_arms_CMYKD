gsap.registerPlugin(ScrollTrigger);

import { fadeInTransition } from "./modules/fadein.js";
import { navigationMenu } from "./modules/navigation.js";
import { generalCarousel } from "./modules/general-carousel.js";

// Initialize modules
fadeInTransition();
navigationMenu();
generalCarousel();

const { createApp } = Vue;

createApp({
  data() {
    return {
      blog: {
        blog_id: null,
        blog_title: "",
        blog_tag: "",
        blog_date: "",
        blog_link: "",
        blog_content: "",
        blog_status: false,
        images: [],
      },
    };
  },
  mounted() {
    const params = new URLSearchParams(window.location.search);
    const blogId = params.get("id");

    if (!blogId) {
      this.blog = {
        blog_id: null,
        blog_title: "No Blog ID",
        blog_tag: "",
        blog_date: "N/A",
        blog_link: "",
        blog_content: "Please provide a blog ID in the URL (e.g., ?id=1)",
        blog_status: false,
        images: [],
      };
      return;
    }

    fetch(`http://localhost:8888/BrothersInArms_API/public/blogs/${blogId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Raw API data:", data);
        if (data) {
          this.blog = {
            blog_id: data.blog_id || null,
            blog_title: data.blog_title || "Untitled",
            blog_tag: data.blog_tag || "",
            blog_date: data.blog_date || "N/A",
            blog_link: data.blog_link || "",
            blog_content: data.blog_content || "No content available",
            blog_status: data.blog_status ?? false,
            images: Array.isArray(data.images) ? data.images : [],
          };
        } else {
          this.blog = {
            blog_id: null,
            blog_title: "Blog Not Found",
            blog_tag: "",
            blog_date: "N/A",
            blog_link: "",
            blog_content: "Content not available",
            blog_status: false,
            images: [],
          };
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        this.blog = {
          blog_id: null,
          blog_title: "Error Loading Blog",
          blog_tag: "",
          blog_date: "N/A",
          blog_link: "",
          blog_content: "Could not load the blog content.",
          blog_status: false,
          images: [],
        };
      });
  },
}).mount("#app");
