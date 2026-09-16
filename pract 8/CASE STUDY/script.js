const form = document.getElementById("gymForm");
const nameInput = document.getElementById("name");
const eyeColor = document.getElementById("eyeColor");
const ability = document.getElementById("ability");

nameInput.addEventListener("input", function () {

    let name = this.value.trim();

    if (name === "") {
        document.getElementById("nameError").innerHTML =
            "Name is required.";
    }
    else if (!/^[A-Za-z ]+$/.test(name)) {
        document.getElementById("nameError").innerHTML =
            "Only letters and spaces are allowed.";
    }
    else {
        document.getElementById("nameError").innerHTML = "";
    }

});

eyeColor.addEventListener("change", function () {

    if (this.value === "") {
        document.getElementById("eyeError").innerHTML =
            "Please select an eye color.";
    }
    else {
        document.getElementById("eyeError").innerHTML = "";
    }

});

ability.addEventListener("input", function () {

    if (this.value.trim() === "") {
        document.getElementById("abilityError").innerHTML =
            "Please describe your athletic ability.";
    }
    else {
        document.getElementById("abilityError").innerHTML = "";
    }

});

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let valid = true;
    let name = nameInput.value.trim();
    let selectedSex =
        document.querySelector('input[name="sex"]:checked');

    if (name === "" || !/^[A-Za-z ]+$/.test(name)) {
        document.getElementById("nameError").innerHTML =
            "Please enter a valid name.";
        valid = false;
    }
    else {
        document.getElementById("nameError").innerHTML = "";
    }

    if (!selectedSex) {
        document.getElementById("sexError").innerHTML =
            "Please select your sex.";
        valid = false;
    }
    else {
        document.getElementById("sexError").innerHTML = "";
    }

    if (eyeColor.value === "") {
        document.getElementById("eyeError").innerHTML =
            "Please select an eye color.";
        valid = false;
    }
    else {
        document.getElementById("eyeError").innerHTML = "";
    }

    if (ability.value.trim() === "") {
        document.getElementById("abilityError").innerHTML =
            "Please describe your athletic ability.";
        valid = false;
    }
    else {
        document.getElementById("abilityError").innerHTML = "";
    }

    if (valid) {
        document.getElementById("result").innerHTML =
            "Gym Admission Successful!";
    }
    else {
        document.getElementById("result").innerHTML = "";
        alert("Please correct the errors before submitting.");
    }

});