# 🧾 Practical 2 — JavaScript Fundamentals: Variables, Operators & Data Types

> **JavaScript Lab · SIT Nagpur · Samruddhi Kalbande · PRN: 24070521278**

---

## 📌 Aim

To understand and apply JavaScript **variables**, **data types**, **operators**, and **arithmetic expressions** by building a real-world **Billing Calculator** with GST computation.

---

## 🎯 Objectives

- Declare and use variables using `const` and `let`
- Work with JavaScript **Number**, **String**, and **Boolean** data types
- Apply **arithmetic operators** (+, -, *, /) in practical calculations
- Use **destructuring assignment** to extract values from objects
- Build a fully functional billing receipt with GST calculation
- Implement form validation and user-friendly error feedback

---

## 📁 Folder Structure

```
pract 2/
├── PRACTICAL/
│   ├── index.html      # Billing Calculator UI
│   ├── script.js       # Billing logic with JS fundamentals
│   └── style.css       # Modern styling
└── CASE STUDY/
    ├── index.html      # ShopEasy — Online Shopping Billing
    ├── script.js       # Shopping cart bill generator
    └── style.css       # E-commerce styling
```

---

## 💻 Programs

### 🔹 Practical — Billing Calculator

**Files:** `PRACTICAL/index.html`, `PRACTICAL/script.js`, `PRACTICAL/style.css`

An interactive billing calculator that computes subtotal, GST, and the final payable amount for a customer order.

**Features:**
- Input: Customer Name, Item Name, Price (₹), Quantity
- Calculates: Subtotal, GST @ 18%, Total Payable
- Displays a formatted receipt card
- Input validation with error messaging
- Uses ES6 arrow functions and destructuring

**Key Code Concepts:**
```js
// Constants and variables
const taxRate = 0.18;
const formatCurrency = (amount) => `₹${amount.toFixed(2)}`;

// Arithmetic operations
const subtotal = price * quantity;
const gst = subtotal * taxRate;
const total = subtotal + gst;

// Object + Destructuring
const bill = { customerName, itemName, price, quantity, subtotal, gst, total };
const { customerName: billedTo, subtotal: billSubtotal, total: billTotal } = bill;
```

**Receipt Output:**
| Field | Value |
|-------|-------|
| Billed To | Customer Name |
| Item × Qty | ₹ calculated |
| Subtotal | ₹ subtotal |
| GST (18%) | ₹ gst amount |
| **Total Payable** | **₹ total** |

---

### 🔹 Case Study — ShopEasy Online Shopping

**Files:** `CASE STUDY/index.html`, `CASE STUDY/script.js`

A simple e-commerce page where customers can enter their name, choose product quantities (Laptop, Mobile, Headphones), and generate a full bill.

**Features:**
- Product catalog with 3 items: Laptop (₹50,000), Mobile (₹20,000), Headphones (₹2,000)
- Quantity input per item
- Generates bill with all selected items, total, and discount
- Membership-based discount tier logic
- Responsive header with navigation

**Key Code Concepts:**
```js
function calculateBill() {
    let lapQty = parseInt(document.getElementById("lapQty").value);
    let lapTotal = 50000 * lapQty;
    // Discount applied based on total amount
    if (total >= 50000) discount = total * 0.20;
    else if (total >= 20000) discount = total * 0.10;
}
```

---

## 🔑 Key JavaScript Concepts

| Concept | Used In |
|---------|---------|
| `const` / `let` | Both |
| Number data type | Both |
| String data type | Both |
| Arithmetic operators (`*`, `+`, `-`, `/`) | Both |
| `toFixed(2)` for decimal formatting | Practical |
| Arrow functions `=>` | Practical |
| Object literals `{}` | Practical |
| Destructuring assignment `{ }` | Practical |
| Template literals `` ` ` `` | Both |
| `Number.isFinite()`, `Number.isInteger()` | Practical |
| `document.getElementById()` | Both |
| `innerHTML` | Both |
| `addEventListener('submit')` | Practical |
| `preventDefault()` | Practical |

---

## 🖥️ How to Run

1. Open `PRACTICAL/index.html` in any browser
2. Enter customer name, item name, price, and quantity
3. Click **"Calculate bill →"** to see the receipt
4. For Case Study: Open `CASE STUDY/index.html`, set product quantities, click **"Generate Bill"**

---

## 👩‍💻 Developed By

| Field | Details |
|-------|---------|
| **Name** | Samruddhi Kalbande |
| **PRN** | 24070521278 |
| **Institute** | SIT Nagpur |
| **Subject** | JavaScript Lab |
