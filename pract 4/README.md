# 🔤 Practical 4 — Functions: Palindrome Checker & Vehicle Registration Validator

> **JavaScript Lab · SIT Nagpur · Samruddhi Kalbande · PRN: 24070521278**

---

## 📌 Aim

To understand and implement **JavaScript functions** — including function declarations, arrow functions, and try-catch error handling — through practical applications like a **Palindrome Checker** and a **Vehicle Registration Validator**.

---

## 🎯 Objectives

- Define and call JavaScript functions
- Use functions to modularize and reuse logic
- Implement **try-catch** for error handling inside functions
- Use **Regular Expressions** inside functions for pattern matching
- Build a **Palindrome Checker** using string manipulation functions
- Build a **Vehicle Registration Validator** using format rules

---

## 📁 Folder Structure

```
pract 4/
├── PRACTICAL/
│   ├── index.html      # Palindrome Checker UI
│   ├── script.js       # isPalindrome() function + event handlers
│   └── style.css       # Styling
└── CASE STUDY/
    ├── index.html      # Vehicle Registration Validator UI
    ├── script.js       # validateVehicleReg() function
    └── styles.css      # Styling
```

---

## 💻 Programs

### 🔹 Practical — Palindrome Checker

**Files:** `PRACTICAL/index.html`, `PRACTICAL/script.js`, `PRACTICAL/style.css`

A tool to check whether a word or sentence is a **palindrome** (reads the same forwards and backwards, ignoring spaces and case).

**Examples:**

| Input | Result |
|-------|--------|
| `racecar` | ✅ Palindrome |
| `A man a plan a canal Panama` | ✅ Palindrome |
| `hello` | ❌ Not a Palindrome |
| `Madam` | ✅ Palindrome |

**Features:**
- Case-insensitive comparison
- Ignores non-alphanumeric characters
- Supports both button click and **Enter key** press
- Displays result with color-coded feedback (green/red)
- Error handled with try-catch

**Key Code Concepts:**
```js
function isPalindrome(text) {
    try {
        // Clean: lowercase + remove non-alphanumeric characters
        const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, '');
        // Reverse the cleaned string
        const reversed = cleaned.split('').reverse().join('');
        return cleaned === reversed;
    } catch (error) {
        return false;
    }
}

function showResult(message, isPalindromeText) {
    resultBox.textContent = message;
    resultBox.className = `result ${isPalindromeText ? 'success' : 'error'}`;
}

// Event listener for Enter key
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { /* check */ }
});
```

---

### 🔹 Case Study — Vehicle Registration Validator

**Files:** `CASE STUDY/index.html`, `CASE STUDY/script.js`

A portal that validates Indian vehicle registration numbers against the official **10-character format**.

**Indian Vehicle Registration Format:**

```
MH  12  AB  1234
↑   ↑   ↑   ↑
State District Series Vehicle No.
Code  Code
(2)  (2)  (2)   (4)
```

**Validation Rules:**

| Position | Characters | Rule |
|----------|------------|------|
| 1–2 | State Code | Uppercase letters (A-Z) |
| 3–4 | District Code | Digits (0-9) |
| 5–6 | Series | Uppercase letters (A-Z) |
| 7–10 | Vehicle No. | Digits (0-9) |
| Total length | 10 | Exactly 10 characters |

**Key Code Concepts:**
```js
function validateVehicleReg(reg) {
    if (!reg) return { valid: false, msg: "Registration number is required." };
    if (reg.length !== 10) return { valid: false, msg: "Length must be exactly 10 characters." };

    const stateCode = reg.slice(0, 2);
    const districtCode = reg.slice(2, 4);
    const series = reg.slice(4, 6);
    const vehicleNo = reg.slice(6, 10);

    if (!/^[A-Z]{2}$/.test(stateCode)) return { valid: false, msg: "Invalid State Code." };
    if (!/^\d{2}$/.test(districtCode)) return { valid: false, msg: "Invalid District Code." };
    if (!/^[A-Z]{2}$/.test(series)) return { valid: false, msg: "Invalid Series." };
    if (!/^\d{4}$/.test(vehicleNo)) return { valid: false, msg: "Invalid Vehicle Number." };

    return { valid: true, msg: `Valid registration: ${reg}` };
}
```

---

## 🔑 Key JavaScript Concepts

| Concept | Used In |
|---------|---------|
| Function declarations | Both |
| Arrow functions `=>` | Practical |
| Return values from functions | Both |
| `try-catch` error handling | Practical |
| `.toLowerCase()` string method | Practical |
| `.replace()` with regex | Practical |
| `.split('').reverse().join('')` | Practical |
| Regular expressions (`/pattern/`) | Both |
| `.test()` regex method | Case Study |
| `.slice()` string method | Case Study |
| `addEventListener()` | Both |
| Keyboard events (`keydown`) | Practical |
| DOM class manipulation | Practical |

---

## 🖥️ How to Run

1. Open `PRACTICAL/index.html` in any browser
2. Type any word or sentence in the text box
3. Click **"Check"** or press **Enter** — result appears with color feedback
4. For Case Study: Open `CASE STUDY/index.html`, enter a 10-character vehicle number like `MH12AB1234`

---

## 👩‍💻 Developed By

| Field | Details |
|-------|---------|
| **Name** | Samruddhi Kalbande |
| **PRN** | 24070521278 |
| **Institute** | SIT Nagpur |
| **Subject** | JavaScript Lab |
