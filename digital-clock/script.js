const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const periodEl = document.getElementById('period');
const dateEl = document.getElementById('date');

function updateClock() {
  const now = new Date();
  
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12;
  h = h ? h : 12; 
  
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  
  hoursEl.textContent = h;
  minutesEl.textContent = m;
  secondsEl.textContent = s;
  periodEl.textContent = ampm;
  
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateEl.textContent = now.toLocaleDateString('en-US', options).toUpperCase();
}

setInterval(updateClock, 1000);
updateClock();
