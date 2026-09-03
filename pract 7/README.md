# ✅ Practical 7 — DOM Manipulation: To-Do List Application

> **JavaScript Lab · SIT Nagpur · Samruddhi Kalbande · PRN: 24070521278**

---

## 📌 Aim

To understand and demonstrate **DOM (Document Object Model) Manipulation** in JavaScript by building a fully interactive **To-Do List** application that allows users to add, edit, and delete tasks dynamically.

---

## 🎯 Objectives

- Create, modify, and delete HTML elements dynamically using JavaScript
- Use `document.createElement()` to build DOM elements programmatically
- Use `appendChild()` and `removeChild()` to modify the DOM tree
- Use `replaceChild()` to swap elements during edit mode
- Handle multiple event listeners on dynamically created elements
- Build a **fully functional To-Do List** with add, edit, and delete features

---

## 📁 Folder Structure

```
pract 7/
├── PRACTICAL/
│   ├── index.html      # To-Do List App UI
│   ├── script.js       # DOM manipulation logic
│   └── style.css       # Styling
└── CASE STUDY/
    └── (empty)         # Reserved for future case study
```

---

## 💻 Programs

### 🔹 Practical — To-Do List Application

**Files:** `PRACTICAL/index.html`, `PRACTICAL/script.js`, `PRACTICAL/style.css`

A complete task management application where all list items are created and managed entirely through JavaScript DOM manipulation — no tasks are hard-coded in HTML.

**Features:**
- ➕ **Add Task** — Type a task and click "Add" to create a new list item
- ✏️ **Edit Task** — Click "Edit" to switch to edit mode, then "Save" to update
- 🗑️ **Delete Task** — Click "Delete" to permanently remove a task
- Validation: Shows alert if task input is empty
- All list items, buttons, and inputs are created dynamically

**App Walkthrough:**

```
User types: "Study JavaScript"
            ↓ clicks Add
[Study JavaScript] [Edit] [Delete]   ← Added to list

User clicks Edit:
[________________] [Save] [Delete]   ← Input field replaces text

User types: "Study JavaScript DOM"
            ↓ clicks Save
[Study JavaScript DOM] [Edit] [Delete]  ← Updated in list

User clicks Delete:
                                        ← Item removed from DOM
```

**Key Code Concepts:**
```js
addBtn.addEventListener("click", function() {
    let task = input.value;
    if (task == "") { alert("Enter a task"); return; }

    // Create DOM elements dynamically
    let li = document.createElement("li");
    let span = document.createElement("span");
    let editBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");

    span.innerText = task;
    editBtn.innerText = "Edit";
    editBtn.className = "edit";
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete";

    // Edit functionality — toggle between edit and save modes
    editBtn.addEventListener("click", function() {
        if (editBtn.innerText === "Edit") {
            let inputField = document.createElement("input");
            inputField.type = "text";
            inputField.value = span.innerText;
            li.replaceChild(inputField, span);   // swap span → input
            editBtn.innerText = "Save";
        } else {
            let inputField = li.querySelector("input");
            span.innerText = inputField.value;
            li.replaceChild(span, inputField);   // swap input → span
            editBtn.innerText = "Edit";
        }
    });

    // Delete functionality
    deleteBtn.addEventListener("click", function() {
        li.remove();   // removes the entire list item
    });

    // Build the list item and append to list
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    input.value = "";  // clear input
});
```

---

## 🔑 Key JavaScript Concepts

| Concept | Used In |
|---------|---------|
| `document.createElement()` | Practical |
| `appendChild()` | Practical |
| `replaceChild()` | Practical (edit mode) |
| `li.remove()` | Practical (delete) |
| `li.querySelector()` | Practical |
| `element.innerText` | Practical |
| `element.className` | Practical |
| `addEventListener('click')` | Practical |
| Nested event listeners | Practical |
| Input validation | Practical |
| Toggle logic (Edit ↔ Save) | Practical |
| DOM traversal | Practical |

---

## 🖥️ How to Run

1. Open `PRACTICAL/index.html` in any browser
2. Type a task in the input box (e.g., "Complete Lab Assignment")
3. Click **"Add"** — task appears in the list
4. Click **"Edit"** next to any task — type a new name → click **"Save"**
5. Click **"Delete"** — task is removed from the list

---

## 📝 DOM Methods Reference

| Method | Description |
|--------|-------------|
| `document.createElement(tag)` | Creates a new HTML element |
| `parent.appendChild(child)` | Adds child element to parent |
| `parent.replaceChild(new, old)` | Replaces one child with another |
| `element.remove()` | Removes element from DOM |
| `parent.querySelector(selector)` | Finds first matching child element |
| `element.innerText` | Gets/sets text content |
| `element.className` | Gets/sets CSS class name |

---

## 👩‍💻 Developed By

| Field | Details |
|-------|---------|
| **Name** | Samruddhi Kalbande |
| **PRN** | 24070521278 |
| **Institute** | SIT Nagpur |
| **Subject** | JavaScript Lab |
