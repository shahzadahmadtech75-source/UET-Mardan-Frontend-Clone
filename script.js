

// swiper
var swiper = new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true
    },

    loop: true,

    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    }
});
// navbar animations
const menuMap = [
  { trigger: "#about", dropdown: "#intro" },
  { trigger: "#admit", dropdown: "#admission" },
  { trigger: "#academic", dropdown: "#academics" },
  { trigger: "#qec", dropdown: "#qecs" },
  { trigger: "#student", dropdown: "#students" }
];

menuMap.forEach(item => {
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
gsap.from("#events",{
    x : -100,
    duration : 1,
    opacity : 0,
    scrollTrigger : {
        trigger : "#events",
        scroller : "body",
        start : "top 65%",
        end : "top 40%",
        scrub : 2
    }
})

