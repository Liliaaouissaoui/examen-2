function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
let textEl;

document.addEventListener("DOMContentLoaded", (e) => {
  textEl = document.querySelector(".animated-text");
});

function mousemoveHandler(e) {
  const width = this.offsetWidth;
  const xPos = e.pageX;
  const yPos = e.pageY;
  const xPos2 = e.pageX - nextBtn.offsetLeft - nextBtnChild.offsetWidth;

  if (xPos > width / 2) {
    prevBtn.classList.remove(isVisible);
    nextBtn.classList.add(isVisible);

    nextBtnChild.style.left = `${xPos2}px`;
    nextBtnChild.style.top = `${yPos}px`;
  } else {
    nextBtn.classList.remove(isVisible);
    prevBtn.classList.add(isVisible);

    prevBtnChild.style.left = `${xPos}px`;
    prevBtnChild.style.top = `${yPos}px`;
  }
}

function mouseleaveHandler() {
  prevBtn.classList.remove(isVisible);
  nextBtn.classList.remove(isVisible);
}

const listOfCardElements = document.querySelectorAll(".card");
const cardContainer = document.querySelector(".card-container");

listOfCardElements.forEach((cardElement, index) => {
  cardElement.addEventListener("click", () => {
    const scrollLeft = index * listOfCardElements[0].offsetWidth;
    cardContainer.scrollTo({ left: scrollLeft, behavior: "smooth" });
  });
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
