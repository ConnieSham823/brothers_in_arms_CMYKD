// Lightbox

export function lightBox() {
    const lightBox = document.querySelector("#lightbox");
    const lightBoxTitle = document.querySelector(".lightbox-title");
    const lightBoxDesc = document.querySelector(".lightbox-text");
    const heroImg = document.querySelector(".hero-img");
    const flagImg = document.querySelector(".flag");
    const achievementsList = document.querySelector(".achievements");
    const closeBtn = document.querySelector(".close");
  
    // Click Events
    document.addEventListener("click", (e) => {
      const card = e.target.closest(".container-inline");
      if (!card) return;
      
      console.log("✅ Card clicked!");
      const index = card.getAttribute("data-index");
      const victorias = window.victoriasData || [];
  
      const selectedData = victorias[index];
      if (!selectedData) {
        console.warn("⚠️ No data found for index", index);
        return;
      }

      console.log("🎯 Lightbox Data:", selectedData);
  
      // Fill in Lightbox content
      lightBoxTitle.textContent = selectedData.name;
      lightBoxDesc.textContent = selectedData.unit;
      heroImg.src = `./images/${selectedData.images[0].image_link}`;
      heroImg.alt = selectedData.image_alt;
  
      // Set flag based on country
      if (selectedData.country === "Canada") {
        flagImg.src = "./images/canada-flag.svg";
        flagImg.alt = "Canadian flag";
      } else if (selectedData.country === "India") {
        flagImg.src = "./images/indian-flag.svg";
        flagImg.alt = "Indian flag";
      } else {
        flagImg.src = "./images/default-flag.svg";
        flagImg.alt = "Default flag";
      }
  
      // Handle Achievements (if they exist in your API)
      achievementsList.innerHTML = "";
      if (selectedData.action && Array.isArray(selectedData.action)) {
        selectedData.action.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item;
          achievementsList.appendChild(li);
        });
      }
  
      lightBox.style.display = "flex";
    });
  
    // Close lightbox
    closeBtn.addEventListener("click", () => {
      lightBox.style.display = "none";
    });
  
    lightBox.addEventListener("click", (e) => {
      if (e.target === lightBox) {
        lightBox.style.display = "none";
      }
    });
  }
  