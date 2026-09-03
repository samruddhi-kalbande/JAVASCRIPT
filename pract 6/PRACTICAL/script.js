function processString() {

    let paragraph = document.getElementById("paragraph").value.trim();
    let email = document.getElementById("email").value.trim();

    let words = paragraph.split(/\s+/);

    let vowels = paragraph.match(/[aeiou]/gi);
    let vowelCount = vowels ? vowels.length : 0;

    let replacedParagraph = paragraph.replace(
        /JavaScript/gi,
        "JavaScript Programming"
    );

    let searchWord = "powerful";
    let position = paragraph.indexOf(searchWord);

    let emailPattern =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let emailResult;

    if (emailPattern.test(email)) {
        emailResult = "Valid Email";
    } else {
        emailResult = "Invalid Email";
    }

    let emailText =
        "For queries, contact student@example.com or admin@college.edu";

    let extractedEmails = emailText.match(
        /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g
    );

    let reversedParagraph = paragraph
        .split("")
        .reverse()
        .join("");

    document.getElementById("output").innerHTML = `
        <p><b>Words in Paragraph:</b> ${words.length}</p>

        <p><b>Vowel Count:</b> ${vowelCount}</p>

        <p><b>Replaced Paragraph:</b> ${replacedParagraph}</p>

        <p>
            <b>Position of "${searchWord}":</b>
            ${position !== -1 ? position : "Not Found"}
        </p>

        <p>
            <b>Email Validation Result:</b>
            ${emailResult}
        </p>

        <p>
            <b>Extracted Emails:</b>
            ${extractedEmails
                ? extractedEmails.join(", ")
                : "No Emails Found"}
        </p>

        <p><b>Reversed Paragraph:</b> ${reversedParagraph}</p>
    `;
}