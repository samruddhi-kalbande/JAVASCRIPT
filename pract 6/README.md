# 🔍 Practical 6 — String Methods & Regular Expressions

> **JavaScript Lab · SIT Nagpur · Samruddhi Kalbande · PRN: 24070521278**

---

## 📌 Aim

To understand and apply JavaScript **String Methods** and **Regular Expressions (RegEx)** for text processing, pattern matching, email validation, and information extraction.

---

## 🎯 Objectives

- Use JavaScript string methods: `split()`, `match()`, `replace()`, `indexOf()`, `reverse()`
- Write and apply **Regular Expressions** for pattern matching
- Validate email addresses using regex
- Extract specific data (emails, names, phone numbers) from raw text using regex
- Build a **Login System** with regex-based credential validation
- Build a **Student Information Extractor** using regex

---

## 📁 Folder Structure

```
pract 6/
├── PRACTICAL/
│   ├── index.html      # String Methods & RegEx Tool
│   ├── script.js       # processString() with all string methods
│   └── style.css       # Styling
├── CASE STUDY 1/
│   ├── index.html      # Sign In / Login Page
│   ├── regis.html      # Registration Page
│   ├── script.js       # Login/Register validation with regex
│   └── style.css       # Glassmorphism UI
└── CASE STUDY 2/
    ├── index.html      # Student Information Extractor
    ├── script.js       # Regex-based info extraction
    └── style.css       # Styling
```

---

## 💻 Programs

### 🔹 Practical — String Methods & Regular Expressions Tool

**Files:** `PRACTICAL/index.html`, `PRACTICAL/script.js`

An all-in-one string analysis tool that demonstrates multiple JavaScript string methods and regex operations on a paragraph of text.

**Features & Operations:**

| Operation | Method Used | Description |
|-----------|-------------|-------------|
| Word Count | `split(/\s+/)` | Splits paragraph by whitespace |
| Vowel Count | `match(/[aeiou]/gi)` | Finds all vowels using regex |
| Word Replace | `replace(/JavaScript/gi, ...)` | Replaces all occurrences |
| Word Search | `indexOf("powerful")` | Finds position of word |
| Email Validation | `/^[a-zA-Z0-9._%+-]+@.../` | Validates email format |
| Email Extraction | `match(/...email pattern.../g)` | Extracts all emails from text |
| Text Reversal | `split('').reverse().join('')` | Reverses the paragraph |

**Key Code Concepts:**
```js
function processString() {
    let paragraph = document.getElementById("paragraph").value.trim();

    // split() — count words
    let words = paragraph.split(/\s+/);

    // match() — count vowels
    let vowels = paragraph.match(/[aeiou]/gi);
    let vowelCount = vowels ? vowels.length : 0;

    // replace() — substitute text
    let replacedParagraph = paragraph.replace(/JavaScript/gi, "JavaScript Programming");

    // indexOf() — find position
    let position = paragraph.indexOf("powerful");

    // Email validation regex
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Email extraction regex
    let extractedEmails = emailText.match(
        /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g
    );

    // reverse() — reverse the paragraph
    let reversedParagraph = paragraph.split("").reverse().join("");
}
```

---

### 🔹 Case Study 1 — Sign In / Registration Portal

**Files:** `CASE STUDY 1/index.html`, `CASE STUDY 1/regis.html`, `CASE STUDY 1/script.js`

A two-page authentication system with **Login** and **Registration** pages, both using regex-based validation.

**Login Validation:**
- Email: must match standard email regex format
- Password: must meet strength requirements

**Registration Validation:**

| Field | Regex Rule |
|-------|-----------|
| Username | Alphanumeric, min 3 chars |
| Email | Standard email pattern |
| Password | Min 8 chars, uppercase, digit, special char |
| Confirm Password | Must match password field |

**Demo Credentials:** `user@example.com` / `Password@123`

**Key Code Concepts:**
```js
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

function validateLogin(email, password) {
    if (!emailRegex.test(email)) return "Invalid email format";
    if (!passwordRegex.test(password)) return "Password too weak";
    return null; // valid
}
```

---

### 🔹 Case Study 2 — Student Information Extractor

**Files:** `CASE STUDY 2/index.html`, `CASE STUDY 2/script.js`

A tool that uses **Regular Expressions** to extract student details (name, PRN, phone, email) from raw unstructured text.

**Features:**
- Paste raw student information text
- Automatically extracts:
  - Email addresses
  - Phone numbers (10-digit format)
  - PRN numbers
  - Names (pattern-based)
- Displays extracted data in a structured format

**Key Code Concepts:**
```js
function processText() {
    let text = document.getElementById("inputText").value;

    // Extract emails
    let emails = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);

    // Extract phone numbers
    let phones = text.match(/\b\d{10}\b/g);

    // Extract PRN (10-digit starting with 2407...)
    let prns = text.match(/\b2407\d{7}\b/g);
}
```

---

## 🔑 Key JavaScript Concepts

| Concept | Used In |
|---------|---------|
| `split()` string method | Practical |
| `match()` with regex | Practical & CS2 |
| `replace()` with regex flags | Practical |
| `indexOf()` | Practical |
| `reverse()` array method | Practical |
| `join()` | Practical |
| Regular Expressions (`/pattern/flags`) | All |
| Regex flags: `g` (global), `i` (case-insensitive) | All |
| `test()` for validation | CS1 |
| Lookahead in regex `(?=...)` | CS1 |
| Character classes `[aeiou]`, `[A-Z]`, `\d` | All |
| Anchors `^` and `$` | CS1 |
| Quantifiers `+`, `*`, `{n,m}` | All |

---

## 🖥️ How to Run

1. Open `PRACTICAL/index.html` — enter a paragraph and email, click **"Process"** to see all string operations
2. Open `CASE STUDY 1/index.html` — sign in with demo credentials or register a new account
3. Open `CASE STUDY 2/index.html` — paste student info text, click **"Extract Information"**

---

## 👩‍💻 Developed By

| Field | Details |
|-------|---------|
| **Name** | Samruddhi Kalbande |
| **PRN** | 24070521278 |
| **Institute** | SIT Nagpur |
| **Subject** | JavaScript Lab |
