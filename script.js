const timerNumberWrapper = document.querySelector(".timer__number");
const timerStartBtn = document.querySelector("#startBtn");
const timerStopBtn = document.querySelector("#stopBtn");

let timerNumber = 0;
timerNumberWrapper.innerHTML = timerNumber;

function timerCounter() {
  showStopBtn();
  timerNumber++;
  timerNumberWrapper.innerHTML = timerNumber;
}

function showStopBtn() {
  timerStopBtn.classList.remove("hide");
}

function timerStop() {
  clearInterval(timerInterval);
  timerNumber = 0;
  timerNumberWrapper.innerHTML = timerNumber;
  timerStopBtn.classList.add("hide");
  timerStartBtn.removeAttribute("disabled", "disabled");
}

function timerTiming() {
  timerInterval = setInterval(timerCounter, 500);
  timerStopBtn.classList.remove("hide");
}

timerStartBtn.addEventListener("click", () => {
  timerTiming();
  timerStartBtn.setAttribute("disabled", "disabled");
});

timerStopBtn.addEventListener("click", () => {
  timerStop();
});
