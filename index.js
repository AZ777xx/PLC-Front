
function updateCurrentTime() {
    const currentTimeElement = document.getElementById("current-time");
    const currentTime = new Date().toLocaleTimeString();
    currentTimeElement.textContent = currentTime;
}

// Update current time every second
setInterval(updateCurrentTime, 1000);
