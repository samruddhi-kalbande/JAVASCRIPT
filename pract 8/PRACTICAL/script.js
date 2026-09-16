// Name Validation (input event)
document.getElementById("name").addEventListener("input", function () {
    let name = this.value.trim();

    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name is required.";
    } else if (!/^[A-Za-z ]+$/.test(name)) {
        document.getElementById("nameError").innerHTML = "Only letters allowed.";
    } else {
        document.getElementById("nameError").innerHTML = "";
    }
});

// Age Validation (blur event)
document.getElementById("age").addEventListener("blur", function () {
    let age = this.value.trim();

    if (age === "") {
        document.getElementById("ageError").innerHTML = "Age is required.";
    } else if (Number(age) < 16 || Number(age) > 60) {
        document.getElementById("ageError").innerHTML = "Age must be between 16 and 60.";
    } else {
        document.getElementById("ageError").innerHTML = "";
    }
});

// Email Validation (input event)
document.getElementById("email").addEventListener("input", function () {
    let email = this.value.trim();
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        document.getElementById("emailError").innerHTML = "Email is required.";
    } else if (!pattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email format.";
    } else {
        document.getElementById("emailError").innerHTML = "";
    }
});

// Mobile Validation (input event)
document.getElementById("mobile").addEventListener("input", function () {
    let mobile = this.value.trim();

    if (mobile === "") {
        document.getElementById("mobileError").innerHTML = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(mobile)) {
        document.getElementById("mobileError").innerHTML = "Enter a valid 10-digit mobile number.";
    } else {
        document.getElementById("mobileError").innerHTML = "";
    }
});

// Membership Validation (change event)
document.getElementById("plan").addEventListener("change", function () {
    if (this.value === "") {
        document.getElementById("planError").innerHTML = "Please select a plan.";
    } else {
        document.getElementById("planError").innerHTML = "";
    }
});

// Form Submission (submit event)
document.getElementById("gymForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let plan = document.getElementById("plan").value;

    let isValid = true;

    // Validate Name
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name is required.";
        isValid = false;
    } else if (!/^[A-Za-z ]+$/.test(name)) {
        document.getElementById("nameError").innerHTML = "Only letters allowed.";
        isValid = false;
    } else {
        document.getElementById("nameError").innerHTML = "";
    }

    // Validate Age
    if (age === "") {
        document.getElementById("ageError").innerHTML = "Age is required.";
        isValid = false;
    } else if (Number(age) < 16 || Number(age) > 60) {
        document.getElementById("ageError").innerHTML = "Age must be between 16 and 60.";
        isValid = false;
    } else {
        document.getElementById("ageError").innerHTML = "";
    }

    // Validate Email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email format.";
        isValid = false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    // Validate Mobile
    if (mobile === "") {
        document.getElementById("mobileError").innerHTML = "Mobile number is required.";
        isValid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
        document.getElementById("mobileError").innerHTML = "Enter a valid 10-digit mobile number.";
        isValid = false;
    } else {
        document.getElementById("mobileError").innerHTML = "";
    }

    // Validate Plan
    if (plan === "") {
        document.getElementById("planError").innerHTML = "Please select a plan.";
        isValid = false;
    } else {
        document.getElementById("planError").innerHTML = "";
    }

    if (isValid) {
        document.getElementById("result").innerHTML = "Gym Admission Successful! Welcome aboard.";
    } else {
        document.getElementById("result").innerHTML = "";
    }
});
