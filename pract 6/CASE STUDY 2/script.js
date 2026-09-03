function processText() {

    let text = document.getElementById("inputText").value;

    let nameMatch = text.match(/student\s+name\s+is\s+([A-Za-z ]+)/i);
    let rollMatch = text.match(/roll\s+number\s+is\s+(\d+)/i);
    let phoneMatch = text.match(/phone\s+number\s+is\s+(\d{10})/i);
    let emailMatch = text.match(/email\s+id\s+is\s+([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/i);
    let departmentMatch = text.match(/department\s+is\s+(.+)/i);

    let name = nameMatch ? nameMatch[1].trim() : "Not Found";
    let roll = rollMatch ? rollMatch[1].trim() : "Not Found";
    let phone = phoneMatch ? phoneMatch[1].trim() : "Not Found";
    let email = emailMatch ? emailMatch[1].trim() : "Not Found";
    let department = departmentMatch ? departmentMatch[1].trim() : "Not Found";

    let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    let phoneRegex = /^\d{10}$/;

    let emailStatus = emailRegex.test(email) ? "Valid" : "Invalid";
    let phoneStatus = phoneRegex.test(phone) ? "Valid" : "Invalid";

    let words = text.trim().split(/\s+/);
    let totalWords = text.trim() === "" ? 0 : words.length;

    let totalCharacters = text.replace(/\s/g, "").length;

    let lowerText = text.toLowerCase();

    let replacedText = text.replace(
        /computer\s+science/gi,
        "Information Technology"
    );

    document.getElementById("result").innerHTML = `
        <h2>Extracted Information</h2>

        <p>
            <b>Student Name:</b> ${name}
        </p>

        <p>
            <b>Roll Number:</b> ${roll}
        </p>

        <p>
            <b>Phone Number:</b> ${phone}
        </p>

        <p>
            <b>Phone Validation:</b>
            <span class="${phoneStatus == "Valid" ? "valid" : "invalid"}">
                ${phoneStatus}
            </span>
        </p>

        <p>
            <b>Email Address:</b> ${email}
        </p>

        <p>
            <b>Email Validation:</b>
            <span class="${emailStatus == "Valid" ? "valid" : "invalid"}">
                ${emailStatus}
            </span>
        </p>

        <p>
            <b>Department:</b> ${department}
        </p>

        <hr>

        <p>
            <b>Total Words:</b> ${totalWords}
        </p>

        <p>
            <b>Total Characters:</b> ${totalCharacters}
        </p>

        <p>
            <b>Lowercase Text:</b><br>
            ${lowerText}
        </p>

        <p>
            <b>After Replacement:</b><br>
            ${replacedText}
        </p>
    `;
}