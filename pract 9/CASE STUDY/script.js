const STORAGE_KEY = 'selectedSeminar';
const THEME_KEY = 'themePreference';

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initTableClickEvents();
    renderSavedSchedule();
});

function initTableClickEvents() {
    const topicCells = document.querySelectorAll('.topic-cell');
    topicCells.forEach(cell => {
        cell.addEventListener('click', () => {
            const day = cell.getAttribute('data-day');
            const begin = cell.getAttribute('data-begin');
            const end = cell.getAttribute('data-end');
            const topic = cell.getAttribute('data-topic');

            alert(
                'Seminar Schedule Details:\n' +
                '------------------------------------\n' +
                'Day     : ' + day + '\n' +
                'Time    : ' + begin + ' to ' + end + '\n' +
                'Topic   : ' + topic + '\n' +
                '------------------------------------\n' +
                'Saved to Local Storage!'
            );

            const scheduleData = {
                day: day,
                begin: begin,
                end: end,
                topic: topic,
                savedAt: new Date().toLocaleString()
            };

            localStorage.setItem(STORAGE_KEY, JSON.stringify(scheduleData));

            var viewed = JSON.parse(sessionStorage.getItem('viewedTopics') || '[]');
            if (viewed.indexOf(topic) === -1) viewed.push(topic);
            sessionStorage.setItem('viewedTopics', JSON.stringify(viewed));

            highlightSelectedCell(topic);
            renderSavedSchedule();
        });
    });
}

function renderSavedSchedule() {
    const savedDataRaw = localStorage.getItem(STORAGE_KEY);
    const savedDetailsContainer = document.getElementById('savedDetails');
    const storageBadge = document.getElementById('storageBadge');

    if (!savedDataRaw) {
        savedDetailsContainer.className = 'saved-details empty-state';
        savedDetailsContainer.innerHTML = '<p>No seminar selected yet. Click any seminar above to trigger an alert and save it to Local Storage.</p>';
        storageBadge.className = 'badge';
        storageBadge.textContent = 'No Preference Saved';
        clearHighlight();
        return;
    }

    try {
        const data = JSON.parse(savedDataRaw);

        savedDetailsContainer.className = 'saved-details';
        savedDetailsContainer.innerHTML =
            '<div class="saved-info-grid">' +
            '<div class="saved-info-item"><span class="info-label">Day:</span><span class="info-value">' + data.day + '</span></div>' +
            '<div class="saved-info-item"><span class="info-label">Time Schedule:</span><span class="info-value">' + data.begin + ' - ' + data.end + '</span></div>' +
            '<div class="saved-info-item" style="grid-column: span 2;"><span class="info-label">Topic:</span><span class="info-value">' + data.topic + '</span></div>' +
            '<div class="saved-info-item" style="grid-column: span 2;"><span class="info-label">Saved At:</span><span class="info-value" style="font-size: 13px; color: #64748b;">' + data.savedAt + '</span></div>' +
            '</div>';

        storageBadge.className = 'badge saved';
        storageBadge.textContent = 'Saved in LocalStorage';

        highlightSelectedCell(data.topic);
    } catch (e) {
        console.error('Error parsing stored schedule data:', e);
    }

    var viewed = JSON.parse(sessionStorage.getItem('viewedTopics') || '[]');
    var sessionEl = document.getElementById('sessionViewed');
    if (sessionEl) sessionEl.textContent = viewed.length ? viewed.join(', ') : 'None';
}

function highlightSelectedCell(topicName) {
    clearHighlight();
    const topicCells = document.querySelectorAll('.topic-cell');
    topicCells.forEach(cell => {
        if (cell.getAttribute('data-topic') === topicName) {
            cell.classList.add('active-selected');
        }
    });
}

function clearHighlight() {
    const topicCells = document.querySelectorAll('.topic-cell');
    topicCells.forEach(cell => {
        cell.classList.remove('active-selected');
    });
}

function clearSavedSchedule() {
    const existing = localStorage.getItem(STORAGE_KEY);
    if (existing) {
        localStorage.removeItem(STORAGE_KEY);
        renderSavedSchedule();
        alert('Saved seminar schedule removed from Local Storage.');
    } else {
        alert('No schedule is currently saved in Local Storage.');
    }
}

function reloadFromStorage() {
    renderSavedSchedule();
    alert('Checked and reloaded latest state from Local Storage.');
}

function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
    localStorage.setItem(THEME_KEY, theme);
    sessionStorage.setItem('sessionTheme', theme);
}

function clearThemePreference() {
    localStorage.removeItem(THEME_KEY);
    sessionStorage.removeItem('sessionTheme');
    document.body.classList.remove('dark');
    alert('Theme preference reset to default.');
}

function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
    }
}
