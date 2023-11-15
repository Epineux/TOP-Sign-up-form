const submitButton = document.querySelector('button');
const emailField = document.querySelector('.email');
const telField = document.querySelector('.tel');
const passwordField = document.querySelector('.password');
const passwordConfirmation = document.querySelector('.password-confirmation');
const emailMessage = document.querySelector('.email-message');
const telMessage = document.querySelector('.tel-message');
const passwordMessage = document.querySelector('.password-message');
const confirmationMessage = document.querySelector('.confirmation-message');
let isHovering = false;

function showEmailError() {
  if (!emailField.checkValidity() &&
  emailField.value !== '') {
    emailMessage.textContent = "*Must be an email format";
  } else {
    emailMessage.textContent = '';
  }
}

function showTelError() {
  if (!telField.checkValidity() && 
  telField.value !== '') {
    telMessage.textContent = "*Must be valid phone number";
  } else {
    telMessage.textContent = '';
  }
}

function checkPasswordsMatch() {
  if (passwordConfirmation.value == passwordField.value) {
    submitButton.disabled = false;
    confirmationMessage.textContent = '';
  } else {
    submitButton.disabled = true;
    if(passwordConfirmation.value !== '') {
      confirmationMessage.textContent = "*Passwords do not match";
    } else {
      confirmationMessage.textContent = '';
    }
  }
}

function checkPasswordLength() {
  if (!passwordField.checkValidity() &&
  passwordField.value !== '') {
    passwordMessage.textContent = "Must at least contain 8 characters";
  } else {
    passwordMessage.textContent = '';
  }
}

function showPasswordError() { // to explain they can't submit if password don't match
  if(submitButton.disabled &&
    confirmationMessage.textContent !== "*Passwords do not match" &&
    isHovering) {
      confirmationMessage.textContent = "*You must fill this field";
  }
}

emailField.addEventListener('blur', showEmailError);
telField.addEventListener('blur', showTelError);
passwordField.addEventListener('blur', () => {
  checkPasswordsMatch();
  checkPasswordLength();
});
passwordConfirmation.addEventListener('blur', checkPasswordsMatch);
submitButton.addEventListener('mouseover', () => {
  isHovering = true;
  setTimeout(showPasswordError, "2000")
});
submitButton.addEventListener('mouseout', () => isHovering = false);

// submitButton.addEventListener('click', ()=> {
//   if(passwordField.textContent !== passwordConfirmation.textContent) {
//     console.log('hello');
//   }
// });