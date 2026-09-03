const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const message = document.getElementById("loginMessage");

        if (!emailRegex.test(email)) {
            message.textContent = "Please enter a valid email address.";
            message.style.color = "#d62828";
            return;
        }

        if (password.length < 6) {
            message.textContent = "Password must contain at least 6 characters.";
            message.style.color = "#d62828";
            return;
        }

        if (email === "user@example.com" &&
            password === "Password@123") {

            message.textContent = "Login successful!";
            message.style.color = "#1769d1";

        } else {

            message.textContent = "Invalid email or password.";
            message.style.color = "#d62828";
        }

    });
}


const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const firstName =
            document.getElementById("firstName").value.trim();

        const surname =
            document.getElementById("surname").value.trim();

        const email =
            document.getElementById("registerEmail").value.trim();

        const message =
            document.getElementById("registerMessage");

        if (firstName === "" || surname === "") {

            message.textContent =
                "Please enter your first name and surname.";

            message.style.color = "#d62828";
            return;
        }

        if (!emailRegex.test(email)) {

            message.textContent =
                "Please enter a valid email address.";

            message.style.color = "#d62828";
            return;
        }

        message.textContent =
            "Email is valid. Continuing to Email OTP...";

        message.style.color = "#1769d1";

    });
}


function goToRegister() {
    window.location.href = "register.html";
}