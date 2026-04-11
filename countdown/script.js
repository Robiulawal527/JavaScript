const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

// Set the date we're counting down to (10 days from now)
const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 10);
futureDate.setHours(10, 30, 0, 0);

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function countdown() {
    const currentDate = new Date();
    const totalSeconds = (futureDate - currentDate) / 1000;

    // Handle when the countdown completes
    if (totalSeconds < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.countdown-container').innerHTML = `
            <h1 class="title">We have Launched!</h1>
            <p class="subtitle">Thank you for your patience.</p>
        `;
        return;
    }

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.textContent = formatTime(days);
    hoursEl.textContent = formatTime(hours);
    minutesEl.textContent = formatTime(minutes);
    secondsEl.textContent = formatTime(seconds);
}

// Initial call
countdown();

// Update every second
const countdownInterval = setInterval(countdown, 1000);
