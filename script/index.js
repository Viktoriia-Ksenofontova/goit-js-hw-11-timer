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
     const targetDate = new Date('Jan 1, 2021');

     if (this.isActive) {
      return;
     }
    else if (targetDate < Date.now()) {
       alert("Время закончилось");
       return;
    }
    
    this.isActive = true;
    
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



// Вариант 2 - Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.

// function CountdownTimer (options) {
// this.selector = options.selector;
// this.targetDate = options.targetDate;

// this.startBtn= document.querySelector('button[data-action="start"]');
// this.stopBtn= document.querySelector('button[data-action="stop"]');
// this.fieldDays= document.querySelector('span[data-value="days"]');
// this.fieldHours= document.querySelector('span[data-value="hours"]');
// this.fieldMinutes= document.querySelector('span[data-value="mins"]');
// this.fieldSeconds= document.querySelector('span[data-value="secs"]');

//   this.pad = function (value) {
//     return String(value).padStart(2, '0');
//   };

//   this.updateTimer = function (time) {
//     const days = Math.floor(time / (1000 * 60 * 60 * 24));
//     const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//     this.fieldDays.textContent = days;
//     this.fieldHours.textContent = hours;
//     this.fieldMinutes.textContent = mins;
//     this.fieldSeconds.textContent = secs;
//   };

// this.isActive = false;
// this.intervalId = null;

// this.start= function() {
//   if (this.isActive) {
//     return;
//   }
//   else if (this.targetDate < Date.now()) {
//     alert("Время закончилось");
//     return;
//   }
    
//   this.isActive = true;
    
//   this.intervalId = setInterval(() => {
//     const currentTime = Date.now();
//     const deltaTime = this.targetDate - currentTime;
       
//     this.updateTimer(deltaTime);
//   }, 1000);
// };
  
//   this.stop = function() {
//     clearInterval(this.intervalId);
//     this.updateTimer(0);
//     this.isActive = false;
//     this.intervalId = null;
// };


// this.startBtn.addEventListener('click', this.start.bind(this));

// this.stopBtn.addEventListener('click', this.stop.bind(this));
// };

// new CountdownTimer({
// selector: '#timer-1',
// targetDate: new Date('Jan 1, 2021'),
// });