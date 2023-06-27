let timerInterval;
let minutes = 25;
let seconds = 0;

const timerDisplay = document.getElementById('timerDisplay');
const secondsDisplay = document.getElementById('secondsDisplay');
const startButton = document.getElementById('startBtn');
const resetButton = document.getElementById('resetBtn');

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
  startButton.disabled = true;
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  if (seconds === 0) {
    if (minutes === 0) {
      clearInterval(timerInterval);
      startButton.disabled = false;
      return;
    }
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }

  timerDisplay.textContent = `${padTime(minutes)}:${padTime(seconds)}`;
}

function padTime(time) {
  return time.toString().padStart(2, '0');
}

function resetTimer() {
  clearInterval(timerInterval);
  minutes = 25;
  seconds = 0;
  timerDisplay.textContent = `${padTime(minutes)}:${padTime(seconds)}`;
  startButton.disabled = false;
}

function startSeconds() {
  let currentSeconds = 0;
  setInterval(() => {
    secondsDisplay.textContent = padTime(currentSeconds++);
  }, 1000);
}

startSeconds();