// Mobile Menu

export function navigationMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-menu');

    function toggleHamburger() {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('show');
        console.log('Hamburger Button Toggled');
    }

    hamburger.addEventListener('click', toggleHamburger);

    // Dropdown Menu
    const dropDown = document.querySelectorAll(".drop-down-toggle");

    function dropdownToggle(e) {
        e.preventDefault();

        const parent = this.parentElement;
        parent.classList.toggle("active");
    }

    function closeDropdown(e) {
        if (!e.target.closest(".drop-down")) {
            document.querySelectorAll(".drop-down").forEach((dropdown) => {
                dropdown.classList.remove("active");
            });
        }
    }

    dropDown.forEach((toggle) => {
        toggle.addEventListener("click", dropdownToggle);
    });

    document.addEventListener("click", closeDropdown);

    // Current Page
    const navLinks = document.querySelectorAll(".navlink");
    console.log(navLinks);

    function setActiveNav() {
        const currentPage = window.location.pathname.split("/").pop().split(".")[0];
        console.log(currentPage);
    
        navLinks.forEach(link => {
        const page = link.getAttribute("data-page");
        if (page === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
        });
    }

    setActiveNav();

    // Hide Navbar when Scroll on Wider Screen
    const mainHead = document.querySelector("#main-header");
    let lastScrollY = window.scrollY;

    function userScroll() {
    const scrollY = window.scrollY;

    if (window.innerWidth > 768) {
        mainHead.classList.toggle("hide-nav", scrollY > lastScrollY);
    }

    if (scrollY > lastScrollY) {
        mainHead.classList.add("hide-nav");
    } else {
        mainHead.classList.remove("hide-nav");
    }

    lastScrollY = scrollY;
    }

    window.addEventListener("scroll", userScroll);
}