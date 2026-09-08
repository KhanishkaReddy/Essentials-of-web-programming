function validateForm() {

    // Get values from the form
    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let email = document.getElementById("email").value.trim();
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;

    // First Name validation
    if (fname === "") {
        alert("Please enter your first name.");
        return false;
    }

    if (!/^[A-Za-z]+$/.test(fname)) {
        alert("First name should contain only alphabets.");
        return false;
    }

    // Last Name validation
    if (lname === "") {
        alert("Please enter your last name.");
        return false;
    }

    if (!/^[A-Za-z]+$/.test(lname)) {
        alert("Last name should contain only alphabets.");
        return false;
    }

    // Email validation
    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Username validation
    if (username === "") {
        alert("Please enter a username.");
        return false;
    }

    if (username.length < 4) {
        alert("Username must contain at least 4 characters.");
        return false;
    }

    // Password validation
    if (password === "") {
        alert("Please enter a password.");
        return false;
    }

    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        return false;
    }

    // Confirm password validation
    if (cpassword === "") {
        alert("Please confirm your password.");
        return false;
    }

    if (password !== cpassword) {
        alert("Passwords do not match.");
        return false;
    }

    // All validations passed
    alert("Registration successful!");

    return true;
}
