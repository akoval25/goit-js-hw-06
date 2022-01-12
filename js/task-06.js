const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const text = event.currentTarget.value;
 const test = textInput.getAttribute("data-length");
   if (text.length === +test) { 
    textInput.classList.add('valid');
    textInput.classList.remove('invalid');
  } else { 
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
  }
}