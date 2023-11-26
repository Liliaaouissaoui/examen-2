var burger = document.querySelector(".burger");

var menu = document.querySelector(".menu");

var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
  burger.classList.toggle("is-active");
};

burger.addEventListener("click", toggleMenu);

let textEl;

document.addEventListener("DOMContentLoaded", (e) => {
  textEl = document.querySelector(".animated-text");
});

//  ----

function onMouseMove(e) {
  const xRatio = e.x / window.innerWidth;
  const yRatio = e.y / window.innerHeight;

  const xPerc = 100 - xRatio * 100;
  const yPerc = 100 - yRatio * 100;

  textEl.style.backgroundPosition = `${xPerc}% ${yPerc}%`;
}

window.addEventListener("mousemove", onMouseMove);
