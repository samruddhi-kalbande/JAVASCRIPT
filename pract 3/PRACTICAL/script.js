function gradeSystem() {
    var name = document.getElementById("name").value.trim();
    var marks = document.getElementById("marks").value.trim();

    if (!name || !marks) {
        alert("Please enter both student name and marks.");
        return;
    }

    var numericMarks = Number(marks);
    if (isNaN(numericMarks) || numericMarks < 0 || numericMarks > 100) {
        alert("Please enter a valid marks value between 0 and 100.");
        return;
    }

    var grade;
    if (numericMarks >= 80) {
        grade = "A";
    } else if (numericMarks >= 60) {
        grade = "B";
    } else {
        grade = "C";
    }

    alert("Student: " + name + "\nGrade: " + grade);
}