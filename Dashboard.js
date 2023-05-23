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




function StatusMotor() {
    var rotationAnglegear = 0;
    var working = false
    var randomNumber = Math.floor(Math.random() * 3 * 1000) + 1;
    var i = 0;
    setInterval(function () {
        if (i >= randomNumber) {
            randomNumber = Math.floor(Math.random() * 3 * 1000) + 1;
            working = !working;
            i = 0;
        }
        i = i + 10
    }, 10)

    setInterval(function () {
        if (working) {
                speedometerElementgear = document.getElementById("StatusMotor-Gear");
                speedometerElementText = document.getElementById("StatusMotor-Text");
                speedometerElementText.textContent = "Motor: START";
                speedometerElementgear.style.transform = `rotate(${rotationAnglegear}deg)`;

                rotationAnglegear += 2;

                if (rotationAnglegear >= 360) {
                    rotationAnglegear = 0;
                }
                i = i + 10;
                setTimeout(function () {
                }, 10);

        }
    }, 10)
    setInterval(function () {
        if (!working) {
            speedometerElementText = document.getElementById("StatusMotor-Text");
            speedometerElementText.textContent = "Motor: STOP";
        }
    }, 100)

}




StatusMotor()

// Update currentValue1 every second
setInterval(updateCurrentValue, 1000);
setInterval(updateSpeedometer, 1000 / 60);

