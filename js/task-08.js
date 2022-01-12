const form = document.querySelector('.login-form');
// const emailInput = document.querySelector('[name="email"]');
// const passwordInput = document.querySelector('[name="password"]');

const formObj = {};

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
      if (value == "") { 
    alert("Все поля должны быть заполнены!");
  }
  });

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  formObj.email = email;
  formObj.password = password;

  console.log(formObj);

  form.reset();
}

