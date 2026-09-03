# 🛒 Practical 5 — Arrays & Array Methods

> **JavaScript Lab · SIT Nagpur · Samruddhi Kalbande · PRN: 24070521278**

---

## 📌 Aim

To understand and demonstrate JavaScript **Arrays** and built-in **array methods** (`forEach`, `map`, `filter`, `reduce`, `push`) through a real-world **Shopping Cart Calculator** and a **Students Marks Management System**.

---

## 🎯 Objectives

- Create and manage arrays of objects
- Use `push()` to add items to an array
- Use `forEach()` to iterate over array items
- Use `map()` to transform array data
- Use `filter()` to extract items matching a condition
- Use `reduce()` to compute aggregate totals
- Apply discount logic based on computed totals
- Build interactive UI that reflects array state in real-time

---

## 📁 Folder Structure

```
pract 5/
├── PRACTICAL/
│   └── index.html      # Shopping Cart Calculator (self-contained)
└── CASE STUDY/
    ├── index.html      # Students Marks Management System
    ├── script.js       # Array methods logic
    └── style.css       # Modern dashboard styling
```

---

## 💻 Programs

### 🔹 Practical — Shopping Cart Calculator

**Files:** `PRACTICAL/index.html`

An interactive shopping cart where users can add products dynamically and see the total bill with automatic discounts applied.

**Features:**
- Add products with: Name, Price (₹), Quantity
- Dynamic table rendering using `forEach()`
- Automatic discount tiers based on total:

| Total Amount | Discount |
|-------------|----------|
| ₹5,000 – ₹19,999 | 5% |
| ₹20,000 – ₹49,999 | 10% |
| ₹50,000+ | 20% |

- Item summary list using `map()`
- Expensive products list (price > ₹1000) using `filter()`
- Total calculation using `reduce()`

**Key Code Concepts:**
```js
let cart = []; // Array to store products

// push() — Add product object to array
cart.push({ id: cart.length + 1, name, price, quantity });

// forEach() — Display each item in table
cart.forEach(function(item) {
    table.innerHTML += `<tr><td>${item.name}</td><td>₹${item.price * item.quantity}</td></tr>`;
});

// reduce() — Calculate total
let total = cart.reduce(function(sum, item) {
    return sum + (item.price * item.quantity);
}, 0);

// map() — Create item summary
cart.map(function(item) {
    summary.innerHTML += `<li>${item.name} : ₹${item.price * item.quantity}</li>`;
});

// filter() — Find expensive products
let exp = cart.filter(function(item) {
    return item.price > 1000;
});
```

---

### 🔹 Case Study — Students Marks Management System

**Files:** `CASE STUDY/index.html`, `CASE STUDY/script.js`, `CASE STUDY/style.css`

A dashboard to add student records (name + marks) as objects to an array, and instantly compute the **maximum** and **minimum** marks in the class.

**Features:**
- Add multiple student records (name + marks 0–100)
- Dynamic table updating with `#` serial number and performance badge
- Live count of total students
- Identifies **Highest Marks** student using `Math.max()` + `reduce()`
- Identifies **Lowest Marks** student using `Math.min()` + `reduce()`
- Performance badge: Excellent (≥80), Good (≥60), Needs Improvement (<60)

**Key Code Concepts:**
```js
let students = []; // Array of student objects

// Add student record
students.push({ name: studentName, marks: studentMarks });

// find max marks using reduce
const maxStudent = students.reduce((best, s) => s.marks > best.marks ? s : best);
const minStudent = students.reduce((worst, s) => s.marks < worst.marks ? s : worst);

// Performance badge using conditional
function getPerformance(marks) {
    if (marks >= 80) return "Excellent";
    if (marks >= 60) return "Good";
    return "Needs Improvement";
}
```

---

## 🔑 Key JavaScript Concepts

| Concept | Used In |
|---------|---------|
| Array literals `[]` | Both |
| Object literals `{}` inside array | Both |
| `push()` — add to array | Both |
| `forEach()` — iterate | Practical |
| `map()` — transform | Practical |
| `filter()` — select subset | Practical |
| `reduce()` — aggregate | Both |
| `Math.max()` / `Math.min()` | Case Study |
| `parseFloat()` / `parseInt()` | Both |
| Dynamic table rendering | Both |
| Input validation | Both |
| Template literals | Both |

---

## 🖥️ How to Run

1. Open `PRACTICAL/index.html` in any browser
2. Enter a product name, price, and quantity → click **"Add Product"**
3. Watch the cart table update with totals and discounts
4. For Case Study: Open `CASE STUDY/index.html`, add student records and see min/max scores update live

---

## 👩‍💻 Developed By

| Field | Details |
|-------|---------|
| **Name** | Samruddhi Kalbande |
| **PRN** | 24070521278 |
| **Institute** | SIT Nagpur |
| **Subject** | JavaScript Lab |
