let download = document.querySelector("#download");
download.addEventListener("click", () => {
  window.location.href = "https://www.uetmardan.edu.pk/uetm/Download ";
});
let home = document.querySelector("#home");
home.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/index.html";
});
let contact = document.querySelector("#contact");
contact.addEventListener("click", () => {
  window.location.href = "https://www.uetmardan.edu.pk/uetm/Contact";
});
// activities cards
const glance = ["labs", "sports", "societies", "facilities"];
const links = [
    "https://www.uetmardan.edu.pk/uetm/Glance/labs",
    "https://www.uetmardan.edu.pk/uetm/Glance/sports",
    "https://www.uetmardan.edu.pk/uetm/Glance/societies",
    "https://www.uetmardan.edu.pk/uetm/Glance/facilities"
];

// Use the index (i) from forEach to match the tag with the correct link
glance.forEach((tag, i) => {
    const element = document.querySelector(`#${tag}`);
    if (element) {
        element.addEventListener("click", () => {
            window.location.href = links[i];
        });
    }
});

// swiper
var swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },

  loop: true,

  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});
// navbar animations
const menuMap = [
  { trigger: "#about", dropdown: "#intro" },
  { trigger: "#admit", dropdown: "#admission" },
  { trigger: "#academic", dropdown: "#academics" },
  { trigger: "#qec", dropdown: "#qecs" },
  { trigger: "#student", dropdown: "#students" },
];

menuMap.forEach((item) => {
  const triggerEl = document.querySelector(item.trigger);
  const dropdownEl = document.querySelector(item.dropdown);

  if (!triggerEl || !dropdownEl) return;

  // show dropdown
  function showDropdown() {
    dropdownEl.classList.remove("invisible", "opacity-0", "translate-y-2");
    dropdownEl.classList.add("visible", "opacity-100", "translate-y-0");
  }

  // hide dropdown
  function hideDropdown() {
    dropdownEl.classList.add("invisible", "opacity-0", "translate-y-2");
    dropdownEl.classList.remove("visible", "opacity-100", "translate-y-0");
  }

  // hover on trigger → show
  triggerEl.addEventListener("mouseenter", showDropdown);

  // hover on dropdown → keep showing
  dropdownEl.addEventListener("mouseenter", showDropdown);

  // leave trigger → hide only if not going into dropdown
  triggerEl.addEventListener("mouseleave", (e) => {
    if (!dropdownEl.contains(e.relatedTarget)) {
      hideDropdown();
    }
  });

  // leave dropdown → hide only if not going back to trigger
  dropdownEl.addEventListener("mouseleave", (e) => {
    if (!triggerEl.contains(e.relatedTarget)) {
      hideDropdown();
    }
  });
});
// ----------------------------- Event animation -------------------------------------
gsap.registerPlugin(ScrollTrigger);
gsap.from("#events", {
  x: -100,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#events",
    scroller: "body",
    start: "top 65%",
    end: "top 40%",
    scrub: 2,
  },
});

// back to top scroll
document.getElementById('backToTop').addEventListener('click', function(e) {
    e.preventDefault();
    
    const duration = 2000; // Total time: 2 seconds
    const startPos = window.pageYOffset;
    const startTime = performance.now();

    function scrollStep(currentTime) {
        const elapsed = currentTime - startTime;
        
        // Progress goes from 0 to 1
        const progress = Math.min(elapsed / duration, 1);
        
        // LINEAR CALCULATION: 
        // No easing function means no "speed up" or "slow down"
        window.scrollTo(0, startPos * (1 - progress));

        if (elapsed < duration) {
            requestAnimationFrame(scrollStep);
        }
    }

    requestAnimationFrame(scrollStep);
});
