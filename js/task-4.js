const form = document.querySelector(".form-login");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const { email, password } = form.elements;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (!emailValue || !passwordValue) {
    alert("All form fields must be filled in");
    return;
  }

  const formInfo = {
    email: email.value,
    password: password.value,
  };

  console.log(formInfo);

  form.reset();
});
