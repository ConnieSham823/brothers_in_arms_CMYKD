// Lightbox

export function lightBox() {
    const lightBoxData = [
        {
            title: "Company Sergeant Major Frederick Hall",
            desc: "(8th Battalion CEF, Royal Winnipeg Rifles – Ypres, April 1915)",
            img: "./images/frederick-hall.png",
            achievements: [
                "Risked his life repeatedly to rescue wounded soldiers from No Man's Land.",
                "Shot in the head while dragging a soldier to safety.",
                "Posthumously awarded the Victoria Cross for his sacrifice."
            ],
            flag: "./images/canada-flag.svg",
            country: "Canada"
        },
        {
            title: "Khudadad Khan",
            desc: "(129th Baluchis, First Battle of Ypres, October 1914)",
            img: "./images/khudadad-khan.jpg",
            achievements: [
                "Single-handedly manned a machine gun, holding off advancing German forces.",
                "Survived despite severe injuries and became the first Indian Victoria Cross recipient."
            ],
            flag: "./images/indian-flag.svg",
            country: "India"
        },
        {
            title: "Corporal Colin Barron",
            desc: "(3rd Battalion CEF, Passchendaele, November 1917)",
            img: "./images/colin-barron.png",
            achievements: [
                "Single-handedly took out three German machine-gun nests, saving his company.",
                "Captured enemy soldiers without reinforcements."
            ],
            flag: "./images/canada-flag.svg",
            country: "Canada"
        },
        {
            title: "Gobind Singh",
            desc: "(28th Light Cavalry, France, 1917)",
            img: "./images/gobind-singh.jpeg",
            achievements: [
                "Delivered vital messages under intense enemy fire, ensuring reinforcements arrived.",
                "Crossed No Man's Land three times while being targeted."
            ],
            flag: "./images/indian-flag.svg",
            country: "India"
        },
        {
            title: "Piper James Richardson",
            desc: "(16th Battalion CEF, Somme, October 1916)",
            img: "./images/james-richardson.png",
            achievements: [
                "Played his bagpipes under heavy fire, inspiring Canadian troops to victory.",
                "Returned to retrieve his bagpipes and was later found dead near a farmhouse."
            ],
            flag: "./images/canada-flag.svg",
            country: "Canada"
        },
        {
            title: "Naik Shahamad Khan",
            desc: "(89th Punjabis, Mesopotamia, April 1916)",
            img: "./images/naik-shahamad.jpg",
            achievements: [
                "Defended his post alone, fighting off overwhelming numbers of enemy soldiers."
            ],
            flag: "./images/indian-flag.svg",
            country: "India"
        },
        {
            title: "Lieutenant Wallace Algie",
            desc: "(20th Battalion CEF, Cambrai, October 1918)",
            img: "./images/wallace-algie.png",
            achievements: [
                "Single-handedly took out three German machine-gun nests, saving his company.",
                "Captured enemy soldiers without reinforcements."
            ],
            flag: "./images/canada-flag.svg",
            country: "Canada"
        },
        {
            title: "Karanbahadur Rana",
            desc: "(2nd Battalion, 3rd Queen Alexandra's Gurkha Rifles, 1918)",
            img: "./images/karanbahadur.jpg",
            achievements: [
                "Captured key enemy positions by charging into their trenches."
            ],
            flag: "./images/indian-flag.svg",
            country: "India"
        },
        {
            title: "Private Harry Brown",
            desc: "(10th Battalion CEF, Loos, August 1917)",
            img: "./images/harry-brown.png",
            achievements: [
                "Carried a crucial message through enemy fire, despite being critically wounded.",
                "Delivered his message before falling unconscious and later died from his injuries."
            ],
            flag: "./images/canada-flag.svg",
            country: "Canada"
        },
        {
            title: "Darwan Singh Negi",
            desc: "(39th Garhwal Rifles, November 1914)",
            img: "./images/darwan-singh.jpeg",
            achievements: [
                "Led his men through enemy fire, storming German trenches with bayonets.",
                "One of the first Indian soldiers to receive the Victoria Cross."
            ],
            flag: "./images/indian-flag.svg",
            country: "India"
        },
        {
            title: "Private John Pattison",
            desc: "(50th Battalion CEF, Vimy Ridge, July 1917)",
            img: "./images/john-pattison.png",
            achievements: [
                "Charged a machine-gun post alone, using grenades and a bayonet to neutralize the enemy.",
                "Killed all five machine gunners, securing a key victory at Vimy Ridge."
            ],
            flag: "./images/canada-flag.svg",
            country: "Canada"
        },
        {
            title: "Khudadad Khan",
            desc: "(129th Baluchis, First Battle of Ypres, October 1914)",
            img: "./images/khudadad-khan.jpg",
            achievements: [
                "Single-handedly manned a machine gun, holding off advancing German forces.",
                "Survived despite severe injuries and became the first Indian Victoria Cross recipient."
            ],
            flag: "./images/indian-flag.svg",
            country: "India"
        }
    ];
    
    const lightBox = document.querySelector("#lightbox");
    const lightBoxTitle = document.querySelector(".lightbox-title");
    const lightBoxDesc = document.querySelector(".lightbox-text");
    const heroImg = document.querySelector(".hero-img");
    const flagImg = document.querySelector(".flag");
    const achievementsList = document.querySelector(".achievements");
    const closeBtn = document.querySelector(".close");
    
    // Open Lightbox when clicking on a card
    document.querySelectorAll(".container-inline").forEach(card => {
        card.addEventListener("click", () => {
            const index = card.getAttribute("data-index");
            const selectedData = lightBoxData[index];

            lightBoxTitle.textContent = selectedData.title;
            lightBoxDesc.textContent = selectedData.desc;
            heroImg.src = selectedData.img;
            heroImg.alt = `Image of ${selectedData.title}`;

            flagImg.src = selectedData.flag;
            flagImg.alt = `Image of ${selectedData.country} Flag`;

            // Clear any previous list items
            achievementsList.innerHTML = '';

            // Populate Achievements
            selectedData.achievements.forEach(item => {
                const achievementsItem = document.createElement("li");
                achievementsItem.textContent = item;
                achievementsList.appendChild(achievementsItem);
            });

            lightBox.style.display = "flex";
        });
    });
    
    // Close 
    closeBtn.addEventListener("click", () => {
        lightBox.style.display = "none";
    });
    
    // Close when clicking outside 
    lightBox.addEventListener("click", (e) => {
        if (e.target === lightBox) {
            lightBox.style.display = "none";
        }
    });   
    
}