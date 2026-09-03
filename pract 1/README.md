# 🌐 Practical 1 — Introduction to JavaScript

> **JavaScript Lab · SIT Nagpur · Samruddhi Kalbande · PRN: 24070521278**

---

## 📌 Aim

To understand and demonstrate the three ways of including JavaScript in a web page — **Inline**, **Internal**, and **External** — and to explore JavaScript's **console methods** for debugging.

---

## 🎯 Objectives

- Understand how to embed JavaScript in HTML using inline, internal, and external methods
- Use `console.log()`, `console.warn()`, `console.info()`, and `console.error()` for debugging
- Build an interactive **Student Information Form** that collects and displays student details
- Use **template literals** for dynamic string formatting
- Attach event listeners using `addEventListener()`

---

## 📁 Folder Structure

```
pract 1/
├── PRACTICAL/
│   ├── index.html          # Main student info form (inline + internal + external JS)
│   ├── script.js           # External JavaScript file
│   ├── styles.css          # Styling
│   ├── function.js         # Additional JS functions
│   └── SITNAGPUR WEBPAGE.html  # SIT Nagpur branded page
└── CASE STUDY/
    ├── user-info.html      # Student info case study (inline JS)
    ├── function.js         # Greeting function
    └── styles.css          # Styling
```

---

## 💻 Programs

### 🔹 Practical — Student Information Form

**Files:** `PRACTICAL/index.html`, `PRACTICAL/script.js`, `PRACTICAL/styles.css`

A form-based web application that demonstrates all three JavaScript embedding methods:

| Method | Description |
|--------|-------------|
| **Inline** | `onload="internalWelcome()"` on `<body>` tag |
| **Internal** | `<script>` block in `<head>` with `internalWelcome()` function |
| **External** | `<script src="script.js">` linked at bottom of body |

**Features:**
- Collects Name, Age, PRN, Contact, Email, and Address
- On submit, logs student data to console using `console.log()`
- Demonstrates `console.warn()` and `console.info()`
- Uses ES6 **template literals** for dynamic greeting
- Form validation and user feedback via `alert()`

**Key Code Concepts:**
```js
const greet = `Welcome, ${name}! Glad to see you.`;


console.log('External script loaded');
console.warn('This demonstrates console.warn');
console.info('Internal script: page is loading');
```

---

### 🔹 Case Study — User Info Display (Inline JS)

**Files:** `CASE STUDY/user-info.html`, `CASE STUDY/function.js`

A single-file web page that uses **inline JavaScript** to collect and display student information dynamically using `innerHTML`.

**Features:**
- All JavaScript written within `<script>` tag inside `<head>` (internal) and `onclick` (inline)
- Displays: Name, Age, PRN, Contact, Email, Address
- Uses all four console methods: `log`, `info`, `warn`, `error`
- Styled with glassmorphism UI and SIT Nagpur branding

**Key Code Concepts:**
```js
function showWelcome() {
    let StudentName = document.getElementById("name").value;
    document.getElementById("output").innerHTML =
        "<h2>Welcome, " + StudentName + "!</h2>";
    console.log("User Name: " + StudentName);
    console.warn("This is a warning message");
    console.error("This is an error message");
}
```

---

## 🔑 Key JavaScript Concepts

| Concept | Used In |
|---------|---------|
| Inline JS (`onclick`) | Case Study |
| Internal JS (`<script>` in head) | Practical & Case Study |
| External JS (`<script src="">`) | Practical |
| `console.log()` | Both |
| `console.warn()` | Both |
| `console.info()` | Both |
| `console.error()` | Case Study |
| Template Literals `` ` ` `` | Practical |
| `addEventListener()` | Practical |
| `innerHTML` | Case Study |
| `document.getElementById()` | Both |

---

## 🖥️ How to Run

1. Open `PRACTICAL/index.html` or `CASE STUDY/user-info.html` in any browser
2. Open **DevTools → Console** (F12) to see console messages
3. Fill in the form and click Submit to see the output

---

## 👩‍💻 Developed By

| Field | Details |
|-------|---------|
| **Name** | Samruddhi Kalbande |
| **PRN** | 24070521278 |
| **Institute** | SIT Nagpur |
| **Subject** | JavaScript Lab |
