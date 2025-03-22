let startTime;
let running = false;
let interval;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds %= 60;
    minutes %= 60;
    milliseconds %= 1000;

    const hoursStr = String(hours).padStart(2, '0');
    const minutesStr = String(minutes).padStart(2, '0');
    const secondsStr = String(seconds).padStart(2, '0');
    const millisecondsStr = String(milliseconds).padStart(3, '0');

    return `${hoursStr}H : ${minutesStr}m : ${secondsStr}s . ${millisecondsStr}ms`; // using text abbreviations
}

function updateDisplay() {
    const currentTime = Date.now();
    const elapsed = currentTime - startTime;
    display.textContent = formatTime(elapsed);
}

startBtn.addEventListener('click', () => {
    if (!running) {
        startTime = Date.now();
        interval = setInterval(updateDisplay, 10);
        running = true;
    }
});

stopBtn.addEventListener('click', () => {
    if (running) {
        clearInterval(interval);
        running = false;
    }
});

resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    running = false;
    display.textContent = '00H : 00m : 00s . 000ms';
});