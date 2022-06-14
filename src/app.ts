export {};

const UIseconds = document.getElementById('seconds') as HTMLElement;
const UIminutes = document.getElementById('minutes') as HTMLElement;
const UIhours = document.getElementById('hours') as HTMLElement;
const UIdays = document.getElementById('days') as HTMLElement;
const daysFlip = document.querySelector('.daysFlip') as HTMLElement;
const hoursFlip = document.querySelector('.hoursFlip') as HTMLElement;
const minutesFlip = document.querySelector('.minutesFlip') as HTMLElement;
const timerDiv = document.querySelector('.timerDiv') as HTMLElement;

type Timer = string;

let seconds: Timer, minutes: Timer, hours: Timer, days: Timer;

const createTimer = () => {
  const today = new Date().getTime();
  const futureDate = new Date('June 30 2022 00:00:00').getTime();

  const distance = futureDate - today;

  days = String(Math.floor(distance / (1000 * 60 * 60 * 24)));
  hours = String(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  seconds = String(Math.floor((distance % (1000 * 60)) / 1000));

  if (seconds.length === 1) {
    seconds = '0' + seconds;
  }

  if (seconds === '00') {
    minutesFlip.classList.add('flipDiv');
  } else {
    minutesFlip.classList.remove('flipDiv');
  }

  if (minutes.length === 1) {
    minutes = '0' + minutes;
  }

  if (minutes === '00') {
    hoursFlip.classList.add('flipDiv');
  } else {
    hoursFlip.classList.remove('flipDiv');
  }

  if (hours.length === 1) {
    hours = '0' + hours;
  }

  if (hours === '00') {
    daysFlip.classList.add('flipDiv');
  } else {
    daysFlip.classList.remove('flipDiv');
  }

  if (days.length === 1) {
    days = '0' + days;
  }

  UIdays.textContent = String(days);
  UIhours.textContent = String(hours);
  UIminutes.textContent = String(minutes);
  UIseconds.textContent = String(seconds);

  if (distance < 0) {
    timerDiv.innerHTML = `
    <h3 class='waitOver'>The Wait is Over!!!</h3=>`;
  }
};

const setTimer = () =>
  setInterval(() => {
    createTimer();
  }, 1000);

setTimer();

clearTimeout(setTimer());
