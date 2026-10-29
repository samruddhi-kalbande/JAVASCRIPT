export function dateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

export function parseDate(key) {
    const [year, month, day] = key.split("-").map(Number);
    return new Date(year, month - 1, day);
}

export function classTime(date, time) {
    const result = parseDate(date);
    const [hours, minutes] = time.split(":").map(Number);
    result.setHours(hours, minutes, 0, 0);
    return result;
}

export function formatTime(time) {
    const [hours, minutes] = time.split(":").map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit" }).format(date);
}

export function formatCountdown(milliseconds) {
    const seconds = Math.max(0, Math.floor(milliseconds / 1000));
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainder = seconds % 60;
    return hours
        ? `${hours}h ${String(minutes).padStart(2, "0")}m ${String(remainder).padStart(2, "0")}s`
        : `${minutes}m ${String(remainder).padStart(2, "0")}s`;
}

export function statusOf(item, now) {
    const start = classTime(item.date, item.start);
    const end = classTime(item.date, item.end);
    if (now >= end) return "Completed";
    if (now >= start) return "In progress";
    return "Starts in";
}

export function overlaps(classes, candidate) {
    return classes.some((item) => item.date === candidate.date &&
        candidate.start < item.end && candidate.end > item.start);
}
