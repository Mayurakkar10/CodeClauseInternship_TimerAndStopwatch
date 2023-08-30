const timerDisplay = document.getElementById("timerDisplay");
const startTimerBtn = document.getElementById("startTimer");
const pauseTimerBtn = document.getElementById("pauseTimer");
const resetTimerBtn = document.getElementById("resetTimer");

const stopwatchDisplay = document.getElementById("stopwatchDisplay");
const startStopwatchBtn = document.getElementById("startStopwatch");
const pauseStopwatchBtn = document.getElementById("pauseStopwatch");
const resetStopwatchBtn = document.getElementById("resetStopwatch");

let timerInterval;
let timerActive = false;
let timerSeconds = 0;

let stopwatchInterval;
let stopwatchActive = false;
let stopwatchSeconds = 0;

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function updateTimerDisplay() {
    timerDisplay.textContent = formatTime(timerSeconds);
}

function updateStopwatchDisplay() {
    stopwatchDisplay.textContent = formatTime(stopwatchSeconds);
}

startTimerBtn.addEventListener("click", () => {
    if (!timerActive) {
        timerInterval = setInterval(() => {
            timerSeconds++;
            updateTimerDisplay();
        }, 1000);
        timerActive = true;
    }
});

pauseTimerBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerActive = false;
});

resetTimerBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerActive = false;
    timerSeconds = 0;
    updateTimerDisplay();
});

startStopwatchBtn.addEventListener("click", () => {
    if (!stopwatchActive) {
        stopwatchInterval = setInterval(() => {
            stopwatchSeconds++;
            updateStopwatchDisplay();
        }, 1000);
        stopwatchActive = true;
    }
});

pauseStopwatchBtn.addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    stopwatchActive = false;
});

resetStopwatchBtn.addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    stopwatchActive = false;
    stopwatchSeconds = 0;
    updateStopwatchDisplay();
});
