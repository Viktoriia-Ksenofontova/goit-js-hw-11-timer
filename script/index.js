const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  fieldDays: document.querySelector('span[data-value="days"]'),
  fieldHours: document.querySelector('span[data-value="hours"]'),
  fieldMinutes: document.querySelector('span[data-value="mins"]'),
  fieldSeconds: document.querySelector('span[data-value="secs"]'),
}

const timer = {
  isActive: false,
  intervalId: null,

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    const targetDate = new Date('Jan 1, 2021');
    
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = targetDate - currentTime;
      updateTimer(deltaTime);
  }, 1000);
  },
  
  stop() {
    clearInterval(this.intervalId);
    updateTimer(0);
    this.isActive = false;
    this.intervalId = null;
  }
};

refs.startBtn.addEventListener('click', timer.start.bind(timer));

refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

function updateTimer(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.fieldDays.textContent = days;
  refs.fieldHours.textContent = hours;
  refs.fieldMinutes.textContent = mins;
  refs.fieldSeconds.textContent = secs;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

// class CountdownTimer {
//   constructor(selector, targetDate) {
//     this._selector = selector;
//     this._targetDate = targetDate;
//   }
  
// }