import {
    classTime,
    dateKey,
    formatCountdown,
    formatTime,
    overlaps,
    parseDate,
    statusOf
} from "./scheduler.js";

const STORAGE_KEY = "class-scheduler-classes";
const form = document.querySelector("#classForm");
const list = document.querySelector("#scheduleList");
const message = document.querySelector("#message");
const upNext = document.querySelector("#upNext");
const clock = document.querySelector("#clock");
const selectedDate = document.querySelector("#selectedDate");
const classDate = document.querySelector("#classDate");
let selectedDay = new Date();
let successTimeout;
let classes = loadClasses();

function setMessage(text, clearAfter = false) {
    window.clearTimeout(successTimeout);
    message.textContent = text;
    if (clearAfter) {
        successTimeout = window.setTimeout(() => {
            message.textContent = "";
        }, 3000);
    }
}

function loadClasses() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : sampleClasses();
    } catch (error) {
        console.error("Could not load saved classes.", error);
        setMessage("Could not load saved classes from this browser.");
        return [];
    }
}

function sampleClasses() {
    const date = dateKey(new Date());
    return [
        { id: "sample-1", subject: "Mathematics", room: "Room 12", date, start: "09:00", end: "10:00" },
        { id: "sample-2", subject: "Computer Science", room: "Lab 2", date, start: "10:30", end: "11:30" },
        { id: "sample-3", subject: "English", room: "Room 5", date, start: "13:00", end: "14:00" }
    ];
}

function saveClasses() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(classes));
        return true;
    } catch (error) {
        console.error("Could not save classes.", error);
        setMessage("Could not save your class. Check your browser storage settings.");
        return false;
    }
}

function render() {
    const now = new Date();
    clock.textContent = new Intl.DateTimeFormat(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    }).format(now);

    const today = dateKey(now);
    const selectedKey = dateKey(selectedDay);
    const dayOffset = Math.round((parseDate(selectedKey) - parseDate(today)) / 86400000);
    const dateLabel = selectedDay.toLocaleDateString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric"
    });
    const relativeDay = dayOffset === 0 ? "Today" : dayOffset === 1 ? "Tomorrow" : dayOffset === -1 ? "Yesterday" : "";
    selectedDate.textContent = relativeDay ? `${relativeDay} · ${dateLabel}` : dateLabel;

    const dayClasses = classes
        .filter((item) => item.date === selectedKey)
        .sort((first, second) => first.start.localeCompare(second.start));
    list.replaceChildren();
    const nextClass = dayClasses.find((item) => statusOf(item, now) !== "Completed");
    const dayDescription = dayOffset === 1 ? " tomorrow" : dayOffset > 1 ? ` on ${dateLabel}` : "";
    upNext.textContent = nextClass
        ? nextClass.subject + (statusOf(nextClass, now) === "In progress"
            ? ` is in progress${dayDescription} · ends ${formatTime(nextClass.end)}`
            : ` starts${dayDescription} at ${formatTime(nextClass.start)}`)
        : "No upcoming classes.";

    if (dayClasses.length === 0) {
        const empty = document.createElement("p");
        empty.className = "empty-message";
        empty.textContent = "No classes for this day. Add one below.";
        list.append(empty);
    }

    dayClasses.forEach((item) => list.append(createRow(item, now)));
}

function createRow(item, now) {
    const row = document.createElement("article");
    row.className = "class-row";
    row.dataset.id = item.id;
    row.dataset.status = statusOf(item, now);

    const details = document.createElement("div");
    const name = document.createElement("p");
    name.className = "class-name";
    name.textContent = item.subject;
    const info = document.createElement("span");
    info.className = "class-info";
    info.textContent = `${formatTime(item.start)}–${formatTime(item.end)} · ${item.room}`;
    details.append(name, info);

    const right = document.createElement("div");
    right.className = "class-countdown";
    const status = document.createElement("span");
    const state = statusOf(item, now);
    status.className = `class-status${state === "Completed" ? " done" : ""}`;
    const dayOffset = Math.round(
        (parseDate(item.date) - parseDate(dateKey(now))) / 86400000
    );
    const dayLabel = dayOffset === 1 ? "Tomorrow · " : dayOffset > 1 ? "Upcoming · " : "";
    status.textContent = state === "Starts in" ? `${dayLabel}Starts in` : state;
    right.append(status);

    if (state !== "Completed") {
        const countdown = document.createElement("span");
        countdown.dataset.time = state === "In progress" ? item.end : item.start;
        countdown.dataset.date = item.date;
        countdown.textContent = formatCountdown(classTime(item.date, countdown.dataset.time) - now);
        right.append(countdown);
    }

    row.append(details, right);
    return row;
}

document.querySelector("#previousDay").addEventListener("click", () => {
    selectedDay = new Date(selectedDay.getFullYear(), selectedDay.getMonth(), selectedDay.getDate() - 1);
    classDate.value = dateKey(selectedDay);
    render();
});

document.querySelector("#nextDay").addEventListener("click", () => {
    selectedDay = new Date(selectedDay.getFullYear(), selectedDay.getMonth(), selectedDay.getDate() + 1);
    classDate.value = dateKey(selectedDay);
    render();
});

document.querySelector("#todayButton").addEventListener("click", () => {
    selectedDay = new Date();
    classDate.value = dateKey(selectedDay);
    render();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    setMessage("");
    const data = new FormData(form);
    const newClass = {
        id: `${Date.now()}`,
        subject: data.get("subject").trim(),
        room: data.get("room").trim(),
        date: data.get("date"),
        start: data.get("start"),
        end: data.get("end")
    };

    if (newClass.end <= newClass.start) {
        setMessage("End time must be later than start time.");
        return;
    }
    if (overlaps(classes, newClass)) {
        setMessage("This class overlaps with another class.");
        return;
    }

    classes.push(newClass);
    if (!saveClasses()) {
        classes.pop();
        return;
    }
    selectedDay = parseDate(newClass.date);
    form.reset();
    classDate.value = dateKey(selectedDay);
    setMessage("Class added.", true);
    render();
});

classDate.value = dateKey(selectedDay);
render();
window.setInterval(() => {
    const oldStatuses = [...list.querySelectorAll(".class-row")].map((row) => row.dataset.status);
    const items = classes
        .filter((item) => item.date === dateKey(selectedDay))
        .sort((first, second) => first.start.localeCompare(second.start));
    const now = new Date();
    const statusChanged = items.some((item, index) => oldStatuses[index] !== statusOf(item, now));
    if (statusChanged || oldStatuses.length !== items.length) {
        render();
        return;
    }

    clock.textContent = new Intl.DateTimeFormat(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    }).format(now);
    list.querySelectorAll("[data-time]").forEach((countdown) => {
        countdown.textContent = formatCountdown(classTime(countdown.dataset.date, countdown.dataset.time) - now);
    });
}, 1000);
