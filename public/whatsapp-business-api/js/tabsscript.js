function switchBroadcastTab(tabId) {
  // Hide all tab contents
  const contents = document.querySelectorAll(".broadcast-tab-content");
  contents.forEach((content) =>
    content.classList.remove("active-broadcast-content")
  );

  // Show the selected tab content
  document.getElementById(tabId).classList.add("active-broadcast-content");

  // Remove active class from all tabs
  const tabs = document.querySelectorAll(".broadcast-sidebar-tab");
  tabs.forEach((tab) => tab.classList.remove("active-broadcast-tab"));

  // Add active class to clicked tab
  event.currentTarget.classList.add("active-broadcast-tab");
}

const image = document.querySelector(".animated-image");

image.addEventListener("mousemove", (e) => {
  const { left, top, width, height } = image.getBoundingClientRect();
  const x = (e.clientX - left) / width - 0.5; // Normalize between -0.5 and 0.5
  const y = (e.clientY - top) / height - 0.5; // Normalize between -0.5 and 0.5

  const rotateX = y * -15; // Opposite direction for X
  const rotateY = x * 15; // Opposite direction for Y

  image.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
});

image.addEventListener("mouseleave", () => {
  image.style.transform =
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
});
