const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countDown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

//set background year 
const nextYear = () => {
  year.innerText = currentYear + 1;
}
nextYear();

//update countdown time 
const updateCountDown = () => {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;
  const d = Math.floor(diff / 1000 / 3600 / 24);
  const h = Math.floor(diff / 1000 / 3600) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;
  days.innerText = d;
  hours.innerText = h < 10 ? '0' + h : h;
  minutes.innerText = m < 10 ? '0' + m : m;
  seconds.innerText = s < 10 ? '0' + s : s;
};

//show spinner before countDown;
setTimeout(() => {
  loading.remove();
  countDown.style.display = 'flex';
}, 1000)
//run every second
setInterval(updateCountDown, 1000);

