let timerInterval;
let remainingTime = 0;

const timerDisplay = document.getElementById('timer-display');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');
const setTimeButton = document.getElementById('set-time-button');


function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}


function updateDisplay() {
    timerDisplay.textContent = formatTime(remainingTime);
}


function startTimer() {
    if (timerInterval) return;
    timerInterval = setInterval(() => {
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            return;
        }
        remainingTime--;
        updateDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}


function resetTimer() {
    stopTimer();
    remainingTime = 0;
    updateDisplay();
}

function setTime() {
    const timeInput = prompt("Enter time in seconds:");
    const time = parseInt(timeInput, 10);
    if (!isNaN(time) && time >= 0) {
        remainingTime = time;
        updateDisplay();
    }
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
setTimeButton.addEventListener('click', setTime);