//PASSWORD 
document.addEventListener("DOMContentLoaded", () => {
  // Get references to elements
  const passwordInput = document.getElementById("in2");
  const hideToggle = document.getElementById("hide");

  // Add event listener to the hide toggle
  hideToggle.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior

    // Toggle the password visibility
    if (passwordInput.type === "password") {
      passwordInput.type = "text"; // Show password
    } else {
      passwordInput.type = "password"; // Hide password
    }
  });
});
// Errors Sign In
document.addEventListener("DOMContentLoaded", () => {
  // Get references to elements
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("in2");
  const confirmPasswordInput = document.getElementById("in3");

  const error1 = document.getElementById("erro1"); // Empty email error
  const error2 = document.getElementById("erro2"); // Invalid email error
  const error5 = document.getElementById("erro5"); // Password length error
  const error6 = document.getElementById("erro6"); // Password mismatch error

  const continueButton = document.getElementById("continue"); // Ensure this matches your button's ID

  // Debugging: Check if elements are found
  if (!emailInput || !passwordInput || !confirmPasswordInput || !continueButton) {
    console.error("One or more elements not found. Check your HTML IDs.");
    return;
  }

  // Hide all error messages initially
  const hideErrors = () => {
    error1.style.display = "none";
    error2.style.display = "none";
    error5.style.display = "none";
    error6.style.display = "none";
  };

  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return emailRegex.test(email);
  };

  // Add event listener to the continue button
  continueButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission

    // Debugging: Check if the button click is detected
    console.log("Continue button clicked");

    // Hide all errors before validation
    hideErrors();

    let hasError = false;

    // Validate email
    const email = emailInput.value.trim();
    if (!email) {
      error1.style.display = "block"; // Show error1 if email is empty
      hasError = true;
    } else if (!validateEmail(email)) {
      error2.style.display = "block"; // Show error2 if email format is invalid
      hasError = true;
    }

    // Validate password length
    const password = passwordInput.value.trim();
    if (password.length < 8) {
      error5.style.display = "block"; // Show error5 if password is less than 8 characters
      hasError = true;
    }

    // Validate password match
    const confirmPassword = confirmPasswordInput.value.trim();
    if (password !== confirmPassword) {
      error6.style.display = "block"; // Show error6 if passwords do not match
      hasError = true;
    }

    // If no errors, proceed with form submission logic
    if (!hasError) {
      console.log("No errors, proceeding to the next page...");
      window.location.href = "continueSignUp.html";
      // Add your form submission logic here
    } else {
      console.log("Errors found, form submission halted.");
    }
  });
});
// Resend link
document.addEventListener('DOMContentLoaded', function () {
  const resendBtn = document.getElementById('resend');
  if (resendBtn) {
    resendBtn.addEventListener('click', function(event) {
      event.preventDefault();
      const signupForm = document.getElementById('signup-form');
      signupForm.style.display = 'block';
    });
  }
});

const signupBtn = document.getElementById("signupBtn");

signupBtn.addEventListener("click", function(e) {
  e.preventDefault();

  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Account created! You can now log in.");
      window.location.href = "log.html"; // Redirect to login page
    })
    .catch((error) => {
      alert("Sign up failed: " + error.message);
    });
});
