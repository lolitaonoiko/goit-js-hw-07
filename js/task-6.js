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
  boxes.innerHTML = "";
  const array = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    array.push(
      `<div style="width:${size}px; height:${size}px; background-color:${getRandomHexColor()}"></div>`
    );
    size += 10;
  }

  boxes.insertAdjacentHTML("beforeend", `${array.join("")}`);
};

btn1.addEventListener("click", () => {
  if (1 <= inpt.value && inpt.value <= 100) {
    createBoxes(inpt.value);
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
