function login(event) {
    event.preventDefault(); // Prevent form from submitting
  
    const emailInput = document.getElementById("mail");
    const passwordInput = document.getElementById("password");
  
    // Check if email is valid
    if (!validateEmail(emailInput.value)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    // Check if password is at least 8 characters long
    if (passwordInput.value.length < 8) {
      alert("Please enter a password that is at least 8 characters long.");
      return;
    }
  
    // If email and password are valid, redirect to main.html
    window.location.href = "main.html";
  }
  
  function validateEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }
  