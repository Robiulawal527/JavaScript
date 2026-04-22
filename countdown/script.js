// Select DOM elements
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

/**
 * NEW FUNCTION: Persistent Date Logic
 * Checks if a launch date already exists in the browser. 
 * If not, it sets one and saves it.
 */
function getTargetDate() {
    const savedDate = localStorage.getItem('launchDate');
    
    if (savedDate) {
        return new Date(savedDate);
    } else {
        // Set initial date (10 days from now)
        const newTarget = new Date();
        newTarget.setDate(newTarget.getDate() + 10);
        newTarget.setHours(10, 30, 0, 0);
        
        // Save it to localStorage
        localStorage.setItem('launchDate', newTarget);
        return newTarget;
    }
}

const futureDate = getTargetDate();

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function countdown() {
    const currentDate = new Date();
    const totalSeconds = (futureDate - currentDate) / 1000;

    // Handle when the countdown completes
    if (totalSeconds <= 0) {
        clearInterval(countdownInterval);
        const container = document.querySelector('.countdown-container');
        if (container) {
            container.innerHTML = `
                <h1 class="title">We have Launched!</h1>
                <p class="subtitle">Thank you for your patience.</p>
            `;
        }
        return;
    }

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    // Safety check to ensure elements exist before updating
    if (daysEl) daysEl.textContent = formatTime(days);
    if (hoursEl) hoursEl.textContent = formatTime(hours);
    if (minutesEl) minutesEl.textContent = formatTime(minutes);
    if (secondsEl) secondsEl.textContent = formatTime(seconds);
}

/**
 * USEFUL ADDITION: Reset Function
 * Call this from the console or a button to restart the timer
 */
function resetCountdown(days = 10) {
    localStorage.removeItem('launchDate');
    location.reload();
}

// Initial call to prevent 1-second delay on load
countdown();

// Update every second
const countdownInterval = setInterval(countdown, 1000);