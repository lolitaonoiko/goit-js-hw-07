const textInput = document.querySelector("#name-input");
const textSpan = document.querySelector("#name-output");
textInput.addEventListener("input", (event) => {
  const inputEl = event.currentTarget.value;
  let trimmedText = inputEl.trim();
  if (trimmedText === "") {
    trimmedText = "Anonymous";
  }
  textSpan.textContent = trimmedText;
});
