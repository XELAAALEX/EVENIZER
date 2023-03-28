function reg(event) {
    event.preventDefault(); // Prevent form from submitting
  
    const emailInput = document.getElementById("mail");
    const passwordInput = document.getElementById("password");
    const password = document.getElementById("pass");

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

    if (passwordInput.value === password.value) {
        alert("Please enter a password that is same with the new password.");
        return;
    }
  
    // If email and password are valid, redirect to login.html
    window.location.href = "login.html";
}
  
function validateEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }
