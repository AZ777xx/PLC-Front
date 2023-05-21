function updateCurrentValue() {
    // Generate a random number from 0 to 100
    randomValue = Math.floor(Math.random() * 101);
    document.getElementById("currentValue1").textContent = randomValue;
    randomValue = Math.floor(Math.random() * 101);
    document.getElementById("currentValue2").textContent = randomValue;

}
let rotationAngle = 0;
const rotationStep = 1; // Adjust this value to control the rotation step size
const speedometerElement = document.getElementById("speedometer");

function updateSpeedometer() {
    speedometerElement.innerHTML = "&uarr;";
    speedometerElement.style.transform = `rotate(${rotationAngle}deg)`;

    // Increment the rotation angle
    rotationAngle += rotationStep;

    // Reset the rotation angle to 0 when it reaches 360 degrees
    if (rotationAngle >= 360) {
        rotationAngle = 0;
    }
}
function updateCurrentTime() {
    const currentTimeElement = document.getElementById("current-time");
    const currentTime = new Date().toLocaleTimeString();
    currentTimeElement.textContent = currentTime;
}

// Update current time every second
setInterval(updateCurrentTime, 1000);

// Update currentValue1 every second
setInterval(updateCurrentValue, 1000);
setInterval(updateSpeedometer, 1000 / 60);