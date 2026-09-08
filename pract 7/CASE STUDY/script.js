<<<<<<< HEAD
const form = document.getElementById("registrationForm");
const formMessage = document.getElementById("formMessage");
const password = document.getElementById("password");
const rePassword = document.getElementById("rePassword");
const terms = document.getElementById("terms");
const day = document.getElementById("day");
const year = document.getElementById("year");

for (let number = 1; number <= 31; number += 1) {
    day.insertAdjacentHTML("beforeend", `<option value="${number}">${number}</option>`);
}

for (let value = new Date().getFullYear(); value >= 1900; value -= 1) {
    year.insertAdjacentHTML("beforeend", `<option value="${value}">${value}</option>`);
}

function showError(field, message) {
    const error = document.getElementById(`${field.id}Error`);
    field.classList.add("invalid");
    field.setAttribute("aria-invalid", "true");
    if (error) error.textContent = message;
    return false;
}

function clearError(field) {
    const error = document.getElementById(`${field.id}Error`);
    field.classList.remove("invalid");
    field.removeAttribute("aria-invalid");
    if (error) error.textContent = "";
}

function validateField(field) {
    clearError(field);

    if (field.type === "checkbox" && !field.checked) {
        return showError(field, "You must agree before registering.");
    }

    if (!field.value.trim() && field.type !== "checkbox") {
        return showError(field, "This field is required.");
    }

    if (!field.checkValidity()) {
        if (field.type === "email") return showError(field, "Enter a valid email address.");
        if (field.type === "url") return showError(field, "Enter a valid website URL.");
        if (field === password) return showError(field, "Password must contain at least 8 characters.");
    }

    if (field === rePassword && field.value !== password.value) {
        return showError(field, "Passwords do not match.");
    }

    return true;
}

form.querySelectorAll("input, select").forEach((field) => {
    field.addEventListener("focus", () => {
        field.classList.add("focused");
    });

    field.addEventListener("blur", () => {
        field.classList.remove("focused");
        validateField(field);
    });

    field.addEventListener("change", () => {
        validateField(field);
        if (field === password || field === rePassword) validateField(rePassword);
    });
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.textContent = "";

    const fields = [...form.querySelectorAll("input, select")];
    const isValid = fields.every(validateField) && password.value === rePassword.value;

    if (!isValid) {
        formMessage.textContent = "Please correct the highlighted fields.";
        formMessage.className = "form-message error-text";
        const firstInvalid = form.querySelector(".invalid");
        if (firstInvalid) firstInvalid.focus();
        return;
    }

    formMessage.textContent = "Registration successful! Your details have been submitted.";
    formMessage.className = "form-message success-text";
    form.reset();
    fields.forEach(clearError);
});
=======
const form = document.getElementById("registrationForm");
const formMessage = document.getElementById("formMessage");
const password = document.getElementById("password");
const rePassword = document.getElementById("rePassword");
const terms = document.getElementById("terms");
const day = document.getElementById("day");
const year = document.getElementById("year");

for (let number = 1; number <= 31; number += 1) {
    day.insertAdjacentHTML("beforeend", `<option value="${number}">${number}</option>`);
}

for (let value = new Date().getFullYear(); value >= 1900; value -= 1) {
    year.insertAdjacentHTML("beforeend", `<option value="${value}">${value}</option>`);
}

function showError(field, message) {
    const error = document.getElementById(`${field.id}Error`);
    field.classList.add("invalid");
    field.setAttribute("aria-invalid", "true");
    if (error) error.textContent = message;
    return false;
}

function clearError(field) {
    const error = document.getElementById(`${field.id}Error`);
    field.classList.remove("invalid");
    field.removeAttribute("aria-invalid");
    if (error) error.textContent = "";
}

function validateField(field) {
    clearError(field);

    if (field.type === "checkbox" && !field.checked) {
        return showError(field, "You must agree before registering.");
    }

    if (!field.value.trim() && field.type !== "checkbox") {
        return showError(field, "This field is required.");
    }

    if (!field.checkValidity()) {
        if (field.type === "email") return showError(field, "Enter a valid email address.");
        if (field.type === "url") return showError(field, "Enter a valid website URL.");
        if (field === password) return showError(field, "Password must contain at least 8 characters.");
    }

    if (field === rePassword && field.value !== password.value) {
        return showError(field, "Passwords do not match.");
    }

    return true;
}

form.querySelectorAll("input, select").forEach((field) => {
    field.addEventListener("focus", () => {
        field.classList.add("focused");
    });

    field.addEventListener("blur", () => {
        field.classList.remove("focused");
        validateField(field);
    });

    field.addEventListener("change", () => {
        validateField(field);
        if (field === password || field === rePassword) validateField(rePassword);
    });
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.textContent = "";

    const fields = [...form.querySelectorAll("input, select")];
    const isValid = fields.every(validateField) && password.value === rePassword.value;

    if (!isValid) {
        formMessage.textContent = "Please correct the highlighted fields.";
        formMessage.className = "form-message error-text";
        const firstInvalid = form.querySelector(".invalid");
        if (firstInvalid) firstInvalid.focus();
        return;
    }

    formMessage.textContent = "Registration successful! Your details have been submitted.";
    formMessage.className = "form-message success-text";
    form.reset();
    fields.forEach(clearError);
});
>>>>>>> 2cd5f03 (Update practical documentation to connected college format and add Practical 7 case study)
