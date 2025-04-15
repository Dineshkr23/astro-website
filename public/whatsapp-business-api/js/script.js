document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide", {
    type: "loop",
    perPage: 4,
    focus: "center",
    autoplay: true,
    interval: 2000,
    flickMaxPages: 3,
    updateOnMove: true,
    pagination: false,
    padding: "10%",
    throttle: 300,
    breakpoints: {
      // 1440: {
      //   perPage: 4,
      //   padding: "30%",
      // },
      // 1024: {
      //   perPage: 3,
      //   padding: "30%",
      // },
      // 768: {̦
      //   perPage: 2,
      // },
      // 425: {
      //   perPage: 2,
      // },
    },
  }).mount();
});

// tbs script
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(
    ".workflow .test-content-scroll > .test-content-container-scroll > div"
  );
  const tabs = document.querySelectorAll(".nav-item-scroll");

  // Function to activate the correct tab
  function activateTab() {
    let currentSection = "";

    // Get the scroll position of the window
    let scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100; // Adjust offset if needed
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    // Loop through tabs and add/remove the active class based on the current section
    tabs.forEach((tab) => {
      if (
        currentSection !== "" &&
        tab.getAttribute("href").substring(1) !== currentSection
      ) {
        tab.classList.remove("active");
      }
      if (tab.getAttribute("href").substring(1) === currentSection) {
        tab.classList.add("active");
      }
    });
  }

  // Add event listener for scroll
  window.addEventListener("scroll", activateTab);

  // Call once to set the active tab on load
  activateTab();
});
