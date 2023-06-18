const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const user = {};
  const currForm = event.currentTarget;
  for (let index = 0; index < currForm.elements.length - 1; index += 1) {
    if (!currForm.elements[index].value) {
      alert("Всі поля повинні бут заповнені!");
      return;
    } else {
      user[currForm.elements[index].name] = currForm.elements[index].value;
    }
  }

  console.log(user);
  currForm.reset();
}
