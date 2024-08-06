function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inpt = document.querySelector("#controls input");
const btn1 = document.querySelector("button[data-create]");
const btn2 = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

const createBoxes = (amount) => {
  amount = inpt.value;
  for (let i = 0; i < amount; i++) {
    boxes.insertAdjacentHTML("beforeend", `<div class='box-${i}'></div>`);
    const boxColored = document.querySelector(`.box-${i}`);
    boxColored.style.backgroundColor = getRandomHexColor();
    boxColored.style.width = 30 + i * 10 + "px";
    boxColored.style.height = 30 + i * 10 + "px";
  }
};

btn1.addEventListener("click", () => {
  if (1 <= inpt.value && inpt.value <= 100) {
    createBoxes();
    inpt.value = "";
  } else {
    alert("The number must be between 1 and 100");
  }
});

const destroyBoxes = () => {
  inpt.value = "";
  boxes.innerHTML = "";
};

btn2.addEventListener("click", destroyBoxes);
