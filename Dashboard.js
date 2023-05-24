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
function Statusfeedpump() {
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
            speedometerElementgear = document.getElementById("StatusFeedpump-Gear");
            speedometerElementText = document.getElementById("StatusFeedpump-Text");
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
            speedometerElementText = document.getElementById("StatusFeedpump-Text");
            speedometerElementText.textContent = "Motor: STOP";
        }
    }, 100)

}
function Alarmstatus(){
    var alarm = false
    var randomNumber = Math.floor(Math.random() * 3 * 1000) + 1;
    var i =0
    setInterval(function () {
        if (i >= randomNumber) {
            randomNumber = Math.floor(Math.random() * 3 * 1000) + 1;
            alarm = !alarm;
            i = 0;
        }
        i = i + 10
    }, 10)
    setInterval(function(){
        if(alarm){
            document.getElementById("Alarmstatus-bg").style.backgroundColor = "red"
            document.getElementById("Alarmstatus-label").textContent = "ALARM"
        }
        if(!alarm){
            document.getElementById("Alarmstatus-bg").style.backgroundColor = "green"
            document.getElementById("Alarmstatus-label").textContent = "No alarms"
        }
    },100)
}
function Runninghours(){
    var i = 0
    setInterval(function(){
        i=i+1
        var seperatortime = document.getElementById("Seperatormotor-time").textContent;
        seperatortime = separatortime = seperatortime.replace(/\d[\d\s\S]*$/, '');
        var feedpumptime = seperatortime + i/100 + " h";
        seperatortime = seperatortime + i*2/100 + " h"
        document.getElementById("Seperatormotor-time").textContent = seperatortime;
        document.getElementById("Feedpump-time").textContent = feedpumptime;
    },100)
}


Runninghours()
Alarmstatus()
StatusMotor()
Statusfeedpump()

// Update currentValue1 every second
setInterval(updateCurrentValue, 1000);
setInterval(updateSpeedometer, 1000 / 60);

