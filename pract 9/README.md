# JavaScript Lab — Practical 9

**Course:** JavaScript Lab / Web Technology  
**Practical No.:** 09  
**Topic:** Web Storage API (`localStorage` & `sessionStorage`) & DOM Manipulation  
**Student Name:** Samruddhi Kalbande  
**PRN:** 24070521278  

---

## 📌 Aim & Objectives

1. Understand the concepts and implementation of the HTML5 **Web Storage API**.
2. Learn the differences between **`localStorage`** (persistent client-side storage) and **`sessionStorage`** (session-scoped client-side storage).
3. Implement theme preference persistence across browser reloads.
4. Implement a case study (**Seminar Schedule Planner**) that utilizes HTML table structures (`rowspan`, `colspan`), event listeners, interactive alerts, active selection states, and structured JSON data caching in Web Storage.

---

## 📂 Project Structure

```text
pract 9/
├── README.md                      # Comprehensive documentation of Practical 9
├── PRACTICAL/                     # Core Practical 9 implementation
│   └── index.html                 # Theme preference switcher (Light/Dark/Clear) using Web Storage
└── CASE STUDY/                    # Extended Case Study application
    ├── index.html                 # Seminar Schedule Planner UI with complex table & storage display
    ├── style.css                  # Modern UI styles, color-coded time badges, dark theme support
    └── script.js                  # Event listeners, Web Storage operations, JSON parsing, UI renderer
```

---

## 🔬 Theoretical Background

### Web Storage API Overview

HTML5 Web Storage enables web applications to store key-value data directly inside the user's browser securely and efficiently without sending data to the server on every HTTP request (unlike traditional HTTP cookies).

| Feature | `localStorage` | `sessionStorage` | Cookies |
| :--- | :--- | :--- | :--- |
| **Persistence** | Permanent until explicitly cleared | Cleared when browser tab/window closes | Set via expiration date |
| **Capacity** | ~5MB - 10MB per origin | ~5MB per origin | ~4KB |
| **Scope** | Shared across all tabs & windows of origin | Isolated to the specific browser tab | Sent with every HTTP request |
| **Access** | Client-side JavaScript | Client-side JavaScript | Server & Client-side |

### Key Storage Methods Used
- `Storage.setItem(key, value)`: Saves an item with a specified string key and value.
- `Storage.getItem(key)`: Retrieves the value associated with the specified key (returns `null` if not present).
- `Storage.removeItem(key)`: Deletes the specified key-value pair from storage.
- `JSON.stringify(obj)` & `JSON.parse(str)`: Serializes objects to strings and deserializes strings back to objects for complex data storage.

---

## 💻 Section 1: Core Practical (`PRACTICAL/index.html`)

### Objective
Create a theme preference manager allowing users to select between Light and Dark themes, persist the choice using `localStorage` and `sessionStorage`, and restore the theme automatically on page reload.

### Key Features
- **Light / Dark Theme Switching:** Toggles the `.dark` CSS class dynamically on the `<body>` element.
- **Persistent State:** Saves the selected theme in `localStorage.setItem('theme', theme)` so preferences persist even if the browser is closed and reopened.
- **Session Tracking:** Synchronously saves the active session preference using `sessionStorage.setItem('currentTheme', theme)`.
- **Reset Option:** `clearTheme()` deletes saved preferences via `localStorage.removeItem()` and reverts the UI to default.
- **Auto-Restore on Load:** `window.onload` checks `localStorage.getItem('theme')` and automatically applies the user's preferred visual theme.

---

## 🏢 Section 2: Case Study (`CASE STUDY/`)

### Application: Seminar Schedule Planner
An interactive schedule dashboard for technical seminars featuring XML, XPath, and XSL technologies.

### Key Components & Implementations

#### 1. Advanced HTML Table Design (`index.html`)
- Utilizes multi-level nested headers (`th` with `rowspan="3"` and `colspan="3"`).
- Uses `rowspan` for merged multi-hour slots (e.g., Monday 8:00 a.m. to 5:00 p.m., Tuesday XPath session).
- Employs semantic `data-*` attributes (`data-day`, `data-begin`, `data-end`, `data-topic`) to store seminar metadata cleanly inside DOM nodes.

#### 2. Interactive Event Handling (`script.js`)
- **Click Listener on Topic Cells:** Clicking any topic cell retrieves schedule data directly from `cell.getAttribute()`.
- **Alert Dialog:** Displays formatted seminar information in an alert prompt:
  ```text
  Seminar Schedule Details:
  ------------------------------------
  Day     : Monday
  Time    : 8:00 a.m. to 5:00 p.m.
  Topic   : Introduction to XML
  ------------------------------------
  Saved to Local Storage!
  ```

#### 3. Dual Storage Architecture
- **`localStorage` (`selectedSeminar`):**
  - Serializes full seminar objects into JSON strings:
    ```javascript
    const scheduleData = {
        day: day,
        begin: begin,
        end: end,
        topic: topic,
        savedAt: new Date().toLocaleString()
    };
    localStorage.setItem('selectedSeminar', JSON.stringify(scheduleData));
    ```
  - Displays selected seminar details in the "Storage Info" dashboard card.
  - Highlights the selected seminar cell on the table with an active outline (`.active-selected`).
- **`sessionStorage` (`viewedTopics`):**
  - Keeps an array of unique seminar topics clicked during the active browsing session.
  - Automatically resets when the browser tab is closed.
- **Theme Persistence (`themePreference` & `sessionTheme`):**
  - Dedicated Light / Dark theme controls with independent persistence.

#### 4. User Controls & Actions
- **Clear Saved Schedule:** Clears `selectedSeminar` from `localStorage` and resets the dashboard to its empty state.
- **Reload from Storage:** Reads and re-renders the latest state directly from storage.
- **Reset Theme:** Clears saved theme preferences and restores default styling.

---

## 📊 Storage Keys Reference

| Storage Engine | Key Name | Data Type | Description |
| :--- | :--- | :--- | :--- |
| `localStorage` | `selectedSeminar` | JSON Object (stringified) | Currently selected seminar details and timestamp |
| `localStorage` | `themePreference` | String (`"light"` \| `"dark"`) | Global persisted UI theme preference |
| `sessionStorage` | `viewedTopics` | JSON Array (stringified) | List of seminar topics accessed in current session |
| `sessionStorage` | `sessionTheme` | String (`"light"` \| `"dark"`) | Active session theme tracking |
| `localStorage` (Practical) | `theme` | String (`"light"` \| `"dark"`) | Saved theme for core practical |
| `sessionStorage` (Practical) | `currentTheme` | String (`"light"` \| `"dark"`) | Session theme for core practical |

---

## 🚀 How to Run

1. **Clone or Open Folder:**
   Open the folder `pract 9` in Visual Studio Code or any modern web browser.
2. **Run Core Practical:**
   - Navigate to `PRACTICAL/index.html`.
   - Double click or right click and choose **Open with Live Server** (or open in any browser).
   - Click **Dark Theme**, refresh the browser tab, and observe that the dark mode remains active.
   - Click **Clear Preference** to reset.
3. **Run Case Study:**
   - Navigate to `CASE STUDY/index.html`.
   - Open the file in your browser.
   - Click on any seminar topic (e.g., *XPath*, *XSL Transformations*, or *Introduction to XML*).
   - Notice the alert box, the table cell highlight, and the updated "Storage Info" card.
   - Open Developer Tools (`F12` -> **Application** / **Storage** tab -> **Local Storage** & **Session Storage**) to inspect the stored key-value pairs live.

---

## 🎯 Learning Outcomes

- Successfully utilized HTML5 Web Storage API (`localStorage` and `sessionStorage`) for persistent and session-based state management.
- Understood object serialization and deserialization using `JSON.stringify()` and `JSON.parse()`.
- Implemented real-time DOM updates and event handling coupled with browser storage.
- Built accessible, responsive user interfaces with dark mode toggles and semantic HTML tables.

---

## 👤 Developer Information

- **Name:** Samruddhi Kalbande
- **PRN:** 24070521278
- **Lab:** JavaScript Lab
