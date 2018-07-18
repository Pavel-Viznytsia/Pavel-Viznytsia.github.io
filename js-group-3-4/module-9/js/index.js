'use strict';

const $stopWatch = document.querySelector('.stopwatch');
const $clockface = document.querySelector('.js-time');
const $startBtn = document.querySelector('.js-start');
const $takeLapBtn = document.querySelector('.js-take-lap');
const $resetBtn = document.querySelector('.js-reset');
const $laps = document.querySelector('.js-laps');

class Timer {
  constructor({
    onTick
  }) {
    this.startTime = null;
    this.pauseTime = null;
    this.deltaTime = null;
    this.timerId = null;
    this.isTimerStart = false;
    this.onTick = onTick;
  }
  start() {
    if (!this.isTimerStart) {
      this.isTimerStart = true;
      this.startTime = Date.now();
      this.timerId = setInterval(() => {
        const currentTime = Date.now();
        this.deltaTime = currentTime - this.startTime;

        const time = new Date(this.deltaTime);
        const min = time.getMinutes();
        const sec = time.getSeconds();
        const ms = Number.parseInt(time.getMilliseconds() / 100);
        this.onTick({
          min,
          sec,
          ms
        });
      }, 100)
    }
  }
}

const timer = new Timer({
  onTick: updateClockface,
});

$startBtn.addEventListener('click', timer.start.bind(timer));
// $takeLapBtn.addEventListener('click', timer.takeLap.bind(timer));
// $resetBtn.addEventListener('click', timer.reset.bind(timer));

updateClockface({
  min: 0,
  sec: 0,
  ms: 0
});

function updateClockface({
  min,
  sec,
  ms
}) {
  $clockface.textContent = `${isLessTen(min)}:${isLessTen(sec)}.${ms}`;
}

// function getFormattedTime(time) {
//   let { min, sec, ms } = time;
//   return `${isLessTen(min)}:${isLessTen(sec)}.${Number.parseInt(ms / 100)}`;
// }

function isLessTen(val) {
  return val < 10 ? "0" + val : val;
}

function toggleBtnAppointment() {

}
