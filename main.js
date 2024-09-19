const form = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('errorMessage');
const container = document.getElementById('container');
const successContainer = document.getElementById('successContainer');
const emailDisplay = document.getElementById('emailDisplay');
const dismissButton = document.getElementById('dismissButton');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  const emailValue = emailInput.value;
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; // Basic email validation pattern

  if (!emailPattern.test(emailValue) || emailValue == "") {
    // Show the error message and add error styles if the email is invalid
    errorMessage.classList.add('visible');
    emailInput.classList.add('error');
  } else {
    // Hide the error message and remove error styles if the email is valid
    errorMessage.classList.remove('visible');
    emailInput.classList.remove('error');

    // Set the entered email into the success message
    emailDisplay.textContent = emailValue;

    // Hide the initial container and show the success container
    container.style.display = 'none'; // Hide the form container
    successContainer.style.display = 'block'; // Show the success container
  }
});

dismissButton.addEventListener('click', function () {
  // Hide the success container
  successContainer.style.display = 'none';
  
  // Show the form container again
  container.style.display = 'flex';

  // Optionally, reset the form if you want to clear the email input
  form.reset(); // Clears the form input field if necessary
});



// || emailValue == ""