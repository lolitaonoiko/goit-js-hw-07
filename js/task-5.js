function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColor = document.querySelector("body");
const spanColor = document.querySelector(".color");
const btn = document.querySelector(".change-color");
btn.addEventListener("click", (event) => {
  changeColor.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = changeColor.style.backgroundColor;
});
