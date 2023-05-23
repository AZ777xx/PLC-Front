function updateCurrentValue() {
    // Generate a random number from 0 to 100
    randomValue = Math.floor(Math.random() * 101);
    document.getElementById("currentValue1").textContent = randomValue;
    randomValue = Math.floor(Math.random() * 101);
    document.getElementById("currentValue2").textContent = randomValue;

}
let rotationAngle = 0;
const rotationStep = 1; // Adjust this value to control the rotation step size

function updateSpeedometer() {
    speedometerElement = document.getElementById("speedometer");
    speedometerElement.innerHTML = "&uarr;";
    speedometerElement.style.transform = `rotate(${rotationAngle}deg)`;

    // Increment the rotation angle
    rotationAngle += rotationStep;

    // Reset the rotation angle to 0 when it reaches 360 degrees
    if (rotationAngle >= 360) {
        rotationAngle = 0;
    }
}

// Get the gear label element

var rotationAnglegear = 0;


function updateGear() {
    speedometerElementgear = document.getElementById("StatusMotor-Gear");
    speedometerElementgear.style.transform = `rotate(${rotationAnglegear}deg)`;

    rotationAnglegear += 2;

    if (rotationAnglegear >= 360) {
        rotationAnglegear = 0;
    }
}

setInterval(updateGear, 10);

// Update currentValue1 every second
setInterval(updateCurrentValue, 1000);
setInterval(updateSpeedometer, 1000 / 60);

