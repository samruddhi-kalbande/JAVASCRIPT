const students = [];
const studentForm = document.getElementById("studentForm");

studentForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const nameInput = document.getElementById("studentName");
	const marksInput = document.getElementById("studentMarks");
	const name = nameInput.value.trim();
	const marks = Number(marksInput.value);
	const message = document.getElementById("message");

	if (!name || !Number.isInteger(marks) || marks < 0 || marks > 100) {
		message.textContent = "Enter a student name and marks between 0 and 100.";
		return;
	}

	students.push({ name, marks });
	renderStudents();
	updateRange();
	message.textContent = `${name} was added successfully.`;
	studentForm.reset();
	nameInput.focus();
});

function renderStudents() {
	const table = document.getElementById("studentTable");
	const count = document.getElementById("studentCount");
	count.textContent = `${students.length} ${students.length === 1 ? "student" : "students"}`;

	table.innerHTML = "";
	students.forEach((student, index) => {
		const row = document.createElement("tr");
		const performance = student.marks >= 75 ? "Excellent" : student.marks >= 50 ? "Pass" : "Needs support";
		row.innerHTML = `<td class="index">${String(index + 1).padStart(2, "0")}</td><td>${student.name}</td><td class="marks">${student.marks}</td><td><span class="performance">${performance}</span></td>`;
		table.appendChild(row);
	});
}

function updateRange() {
	if (students.length === 0) return;

	const marksList = students.map((student) => student.marks);
	const minimum = Math.min(...marksList);
	const maximum = Math.max(...marksList);
	const minimumStudent = students.find((student) => student.marks === minimum);
	const maximumStudent = students.find((student) => student.marks === maximum);

	document.getElementById("minimumMarks").textContent = minimum;
	document.getElementById("minimumStudent").textContent = minimumStudent.name;
	document.getElementById("maximumMarks").textContent = maximum;
	document.getElementById("maximumStudent").textContent = maximumStudent.name;
}
