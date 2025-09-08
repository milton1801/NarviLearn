
  function handleCredentialResponse(response) {
    const jwt = response.credential;
    // Decode the JWT if you want user info
    const payload = JSON.parse(atob(jwt.split('.')[1]));
    console.log("User email:", payload.email);
    console.log("Full payload:", payload);
  }
// EDIT link
document.addEventListener("DOMContentLoaded", () => {
  const editMail = document.getElementById('edit'); 

  if (editMail) {
    editMail.addEventListener('click', (event) => {
      event.preventDefault(); 
      const inputField = document.getElementById('in1'); 
      if (inputField) {
        inputField.value = ""; 
      }
    });
  }
});
//PASSWORD 
const hide = document.getElementById('hide');

// Handle password masking for the "Password" input
const password = document.getElementById('in2');
if (password && hide) {
  hide.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default behavior

    // Toggle the password visibility
    if (password.type === "password") {
      password.type = "text"; // Show the actual password
    } else {
      password.type = "password"; // Mask the password
    }
  });
}
// Error log in
const error1 = document.getElementById('erro1'); // Error for empty email
const error2 = document.getElementById('erro2'); // Error for invalid email format
const error3 = document.getElementById('erro3'); // Error for empty password
const error4 = document.getElementById('erro4'); // Error for invalid password
const loginButton = document.querySelector('#log button'); // Log In button

if (loginButton) {
  loginButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('in1').value.trim();
    const password = document.getElementById('in2').value.trim();

    // Reset all error messages
    if (error1) error1.style.display = 'none';
    if (error2) error2.style.display = 'none';
    if (error3) error3.style.display = 'none';
    if (error4) error4.style.display = 'none';

    // Email validation
    if (!email) {
      if (error1) {
        error1.style.display = 'block'; // Show error1 for empty email
      }
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
      if (!emailRegex.test(email)) {
        if (error2) {
          error2.style.display = 'block'; // Show error2 for invalid email format
        }
      }
    }

    // Password validation
    if (!password) {
      if (error3) {
        error3.style.display = 'block'; // Show error3 for empty password
      }
    } else if (password.length < 6) {
      if (error4) {
        error4.style.display = 'block'; // Show error4 for invalid password
      }
    }
  });
}
// Toggle Dark Mode and Save Preference
function toggleDarkMode() {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isDark);
}

// Apply saved preference on load
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }

  // If there's a dark mode toggle switch, connect it
  const toggleSwitch = document.getElementById('darkModeToggle');
  if (toggleSwitch) {
    toggleSwitch.checked = localStorage.getItem('darkMode') === 'true';
    toggleSwitch.addEventListener('change', toggleDarkMode);
  }
});


