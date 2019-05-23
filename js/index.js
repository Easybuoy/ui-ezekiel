// Initialize AOC plugin
AOS.init({
  duration: 1500
});

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

timeLineMax.staggerFrom(".menu ul li", 0.5, { ease: Expo.easeOut }, 0.1);

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

  let header = document.querySelector("header");
  if (searchInput === null) {
    let div = document.createElement("div");
    div.classList.add("search-div");
    let input = document.createElement("input");
    input.classList.add("search-input");
    input.placeholder = "Search";
    
    let button = document.createElement('button');
    button.classList.add('search-button');
    let i = document.createElement('i');
    i.classList.add('fas');
    i.classList.add('fa-times');
    i.classList.add('fa-3x');
    button.appendChild(i);
    button.onclick = () => {
      return removeSearch();
    };
    div.appendChild(input);
    div.appendChild(button);
    header.prepend(div);
  }
});

const removeSearch = () => {
  let header = document.querySelector("header");
  let searchInput = document.querySelector(".search-div");
  header.removeChild(searchInput);
}
