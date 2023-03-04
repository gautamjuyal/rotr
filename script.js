const container = document.querySelector(".container");
const menuItems = document.querySelectorAll(".menu ul li");

container.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

window.addEventListener("load", () => {
  const audio = document.createElement("audio");
  audio.src = "assets/og-music.mp3";
  audio.play();
});

const arrowElement = document.createElement("img");
arrowElement.src = "assets/triangle.png";
arrowElement.classList.add("triangle");

for (const item of menuItems) {
  item.addEventListener("mouseover", () => {
    item.prepend(arrowElement);
  });
  item.addEventListener("mouseout", () => {
    item.hasChildNodes(arrowElement) && item.removeChild(arrowElement);
  });
}
