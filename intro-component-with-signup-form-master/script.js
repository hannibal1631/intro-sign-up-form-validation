const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email-id');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submit');

// error-icons

const firstErrorIcon = document.getElementById('first-error-icon');
const lastErrorIcon = document.getElementById('last-error-icon');
const emailErrorIcon = document.getElementById('email-error-icon');
const passwordErrorIcon = document.getElementById('password-error-icon');

// error-msg

const firstErrorMsg = document.getElementById('first-name-msg');
const lastErrorMsg = document.getElementById('last-name-msg');
const emailErrorMsg = document.getElementById('email-msg');
const passwordErrorMsg = document.getElementById('password-msg');

// Email validation function
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Add event listener for the submit button
submitBtn.addEventListener('click', function () {
  let hasErrors = false;

  // Validate first name
  if (firstName.value.trim() === '') {
    firstErrorIcon.style.display = 'inline-block';
    firstErrorMsg.style.display = 'block';
    hasErrors = true;
  } else {
    firstErrorIcon.style.display = 'none';
    firstErrorMsg.style.display = 'none';
  }

  // Validate last name
  if (lastName.value.trim() === '') {
    lastErrorIcon.style.display = 'inline-block';
    lastErrorMsg.style.display = 'block';
    hasErrors = true;
  } else {
    lastErrorIcon.style.display = 'none';
    lastErrorMsg.style.display = 'none';
  }

  // Validate email
  if (email.value.trim() === '' || !isValidEmail(email.value.trim())) {
    emailErrorIcon.style.display = 'inline-block';
    emailErrorMsg.style.display = 'block';
    hasErrors = true;
  } else {
    emailErrorIcon.style.display = 'none';
    emailErrorMsg.style.display = 'none';
  }

  // Validate password
  if (password.value.trim() === '') {
    passwordErrorIcon.style.display = 'inline-block';
    passwordErrorMsg.style.display = 'block';
    hasErrors = true;
  } else {
    passwordErrorIcon.style.display = 'none';
    passwordErrorMsg.style.display = 'none';
  }

  // If there are no errors, we can proceed with form submission or any other logic
  if (!hasErrors) {
    console.log('Form is valid!');
  }
});
