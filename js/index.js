let timeLineMax = new TimelineMax({ paused: true });
timeLineMax.to(".one", 0.8, {
  y: 6,
  rotation: 45,
  ease: Expo.easeInOut
});

timeLineMax.to(".two", 0.8, {
  y: -6,
  rotation: -45,
  ease: Expo.easeInOut,
  delay: -0.8
});

timeLineMax.to(".menu", 0.5, {
  top: "0%",
  ease: Expo.easeInOut
});

timeLineMax.staggerFrom(".menu ul li", 0.5, { ease: Expo.easeOut }, 0.3);

timeLineMax.reverse();

let toggleButton = document.querySelector(".toggle-button");
toggleButton.addEventListener("click", () => {
  let menu = document.querySelector(".menu");
  menu.style.backgroundColor = "#990033";

  timeLineMax.reversed(!timeLineMax.reversed());
});

// Search Bar
let search = document.querySelector(".search");
search.addEventListener("click", () => {
  let searchInput = document.querySelector(".search-input");

  let body = document.querySelector("body");
  if (searchInput === null) {
    let input = document.createElement("input");
    input.classList.add("search-input");
    input.placeholder = "Search";
    body.prepend(input);
  } else {
    body.removeChild(searchInput);
  }
});
