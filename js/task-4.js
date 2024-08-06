const formArea = document.querySelector(".login-form");
formArea.addEventListener("submit", (event) => {
  event.preventDefault();
  const objValues = {
    email: formArea.elements.email.value.trim(),
    password: formArea.elements.password.value.trim(),
  };
  if (objValues.email === "" || objValues.password === "") {
    return alert("All form fields must be filled in");
  }
  console.log(objValues);
  formArea.reset();
});
