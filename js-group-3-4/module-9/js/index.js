'use strict';

const $stopWatch = document.querySelector('.stopwatch');
const $clockface = document.querySelector('.js-time');
const $startBtn = document.querySelector('.js-start');
const $takeLapBtn = document.querySelector('.js-take-lap');
const $resetBtn = document.querySelector('.js-reset');
const $laps = document.querySelector('.js-laps');

class Timer {
  constructor({
    onTick,
    toggleBtn
  }) {
    this.startTime = null;
    this.pauseTime = null;
    this.deltaTime = 0;
    this.timerId = null;
    this.isTimerActive = false;
    this.onTick = onTick;
    this.toggleBtn = toggleBtn;
  }

  start() {
    if (this.isTimerActive) {
      this.stop();
    } else {
      this.isTimerActive = true;
      this.toggleBtn(this.isTimerActive);
      this.startTime = Date.now() - timer.deltaTime;
      this.timerId = setInterval(() => {
        this.calcTime();
      }, 100);
    }
  }

  stop() {
    clearTimeout(this.timerId);
    this.isTimerActive = false;
    this.toggleBtn(this.isTimerActive);
  }

  reset() {
    clearTimeout(this.timerId);
    this.onTick({
      min: 0,
      sec: 0,
      ms: 0
    });
    this.isTimerActive = false;
    this.toggleBtn(this.isTimerActive);
    this.deltaTime = 0;
  }

  calcTime() {
    const currentTime = Date.now();
    this.deltaTime = currentTime - this.startTime;
    const time = new Date(this.deltaTime);
    const min = time.getMinutes();
    const sec = time.getSeconds();
    const ms = Number.parseInt(time.getMilliseconds() / 100);
    this.onTick({
      min,
      sec,
      ms,
    });
  }
}

const timer = new Timer({
  onTick: updateClockface,
  toggleBtn: toggleBtn,
});

$startBtn.addEventListener('click', timer.start.bind(timer));
// $takeLapBtn.addEventListener('click', timer.takeLap.bind(timer));
$resetBtn.addEventListener('click', timer.reset.bind(timer));

// updateClockface({
//   min: 0,
//   sec: 0,
//   ms: 0
// });

function updateClockface({
  min,
  sec,
  ms
}) {
  $clockface.textContent = `${isLessTen(min)}:${isLessTen(sec)}.${ms}`;
}

function isLessTen(val) {
  return val < 10 ? '0' + val : val;
}

function toggleBtn(isActive) {
  console.log("isActive ", isActive);
  $startBtn.classList.toggle('active');
  $startBtn.textContent = isActive === false ? 'Start' : 'Stop';
}
