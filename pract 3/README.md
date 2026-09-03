# 🎓 Practical 3 — Control Structures: Conditional Statements & Loops

> **JavaScript Lab · SIT Nagpur · Samruddhi Kalbande · PRN: 24070521278**

---

## 📌 Aim

To understand and implement JavaScript **control flow** through `if-else` conditional statements and demonstrate their use in real-world scenarios like a **Student Grading System** and **Password Verification Portal**.

---

## 🎯 Objectives

- Use `if`, `else if`, and `else` statements for decision making
- Validate user inputs before processing
- Build a **Student Grading System** that assigns grades based on marks
- Build a **Password Verification System** with real-time strength checking
- Work with `Number()` type conversion and validation (`isNaN`)

---

## 📁 Folder Structure

```
pract 3/
├── PRACTICAL/
│   ├── index.html      # Student Grading System
│   ├── script.js       # Grading logic
│   └── style.css       # Styling
└── CASE STUDY/
    ├── index.html      # Password Verification Portal
    ├── script.js       # Password strength checker
    └── styles.css      # Styling
```

---

## 💻 Programs

### 🔹 Practical — Student Grading System

**Files:** `PRACTICAL/index.html`, `PRACTICAL/script.js`

A web application that accepts a student's name and marks, then assigns a grade using `if-else` conditional logic.

**Grade Criteria:**

| Marks Range | Grade |
|-------------|-------|
| 80 – 100 | A |
| 60 – 79 | B |
| 0 – 59 | C |

**Features:**
- Input validation: checks for empty fields and invalid mark ranges
- Converts input string to number using `Number()`
- Validates that marks are between 0 and 100
- Displays grade via `alert()` dialog

**Key Code Concepts:**
```js
function gradeSystem() {
    var name = document.getElementById("name").value.trim();
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
```

---

### 🔹 Case Study — Password Verification Portal

**Files:** `CASE STUDY/index.html`, `CASE STUDY/script.js`

A secure registration portal that validates password strength in real-time using **regular expressions** and **conditional logic**.

**Password Requirements:**

| Requirement | Rule |
|-------------|------|
| Minimum 8 characters | `length >= 8` |
| At least 1 uppercase letter | `/[A-Z]/` regex |
| At least 1 lowercase letter | `/[a-z]/` regex |
| At least 1 digit | `/[0-9]/` regex |
| At least 1 special character | `/[@$!%*?&]/` regex |

**Features:**
- Real-time password strength bar (visual feedback)
- Strength levels: Too Weak → Weak → Medium → Strong
- Password confirmation match check
- Displays requirement checklist to guide the user

**Key Code Concepts:**
```js
function checkStrength(password) {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[@$!%*?&]/.test(password)) score++;
    return score; // 0-5 scale
}
```

---

## 🔑 Key JavaScript Concepts

| Concept | Used In |
|---------|---------|
| `if` / `else if` / `else` | Both |
| `Number()` type conversion | Practical |
| `isNaN()` validation | Practical |
| Input `.trim()` | Both |
| `alert()` dialog | Practical |
| Regular Expressions (`/pattern/`) | Case Study |
| `.test()` regex method | Case Study |
| Real-time event handling (`input` event) | Case Study |
| DOM manipulation | Both |
| Form validation | Both |

---

## 🖥️ How to Run

1. Open `PRACTICAL/index.html` in any browser
2. Enter a student name and marks (0–100)
3. Click **"Calculate Grade"** to see the grade via alert
4. For Case Study: Open `CASE STUDY/index.html`, type a username and password to see real-time strength feedback

---

## 👩‍💻 Developed By

| Field | Details |
|-------|---------|
| **Name** | Samruddhi Kalbande |
| **PRN** | 24070521278 |
| **Institute** | SIT Nagpur |
| **Subject** | JavaScript Lab |
