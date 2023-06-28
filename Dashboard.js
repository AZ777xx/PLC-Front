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


//Seperator motor gauge
var opts_seperator = {
    angle: 0, // The span of the gauge arc
    lineWidth: 0.32, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
        length: 0.51, // // Relative to gauge radius
        strokeWidth: 0.053, // The thickness
        color: '#000000' // Fill color
    },
    limitMax: true,     // If false, max value increases automatically if value > maxValue
    limitMin: true,     // If true, the min value of the gauge will be fixed
    colorStart: "#ff8400",   // Colors
    colorStop: "#ff8400",    // just experiment with them
    strokeColor: "#ff8400",  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    staticLabels: {
        font: "10px sans-serif",  // Specifies font
        labels: [1, 2, 3, 4,5, 6,7,10,20],  // Print labels at these values
        color: "#000000",  // Optional: Label text color
        fractionDigits: 0  // Optional: Numerical precision. 0=round off.
    },



};

var SeperatormotorGauge = document.getElementById("SeperatormotorGauge"); // your canvas element
var Seperatormotor_gauge = new Gauge(SeperatormotorGauge).setOptions(opts_seperator); // create sexy gauge!
Seperatormotor_gauge.maxValue = 20; // set max gauge value
Seperatormotor_gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
Seperatormotor_gauge.animationSpeed = 32; // set animation speed (32 is default value)
Seperatormotor_gauge.set(7); // set actual value

//product pressure gauge
var opts_pressure = JSON.parse(JSON.stringify(opts_seperator));
opts_pressure.staticLabels.labels= [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0,6.0,7.0,10.0] ; // Print labels at these values
opts_pressure.staticLabels.fractionDigits = 1;
opts_pressure.staticZones= [
    {strokeStyle: "#ff8400", min: 0, max: 10.0},
    {strokeStyle: "#30B32D", min: 1.0, max: 3.0}
]
var ProductpressureGauge = document.getElementById("ProductpressureGauge"); // your canvas element
var Productpressure_gauge = new Gauge(ProductpressureGauge).setOptions(opts_pressure);
Productpressure_gauge.maxValue = 10;
Productpressure_gauge.setMinValue(0);
Productpressure_gauge.animationSpeed = 32;
Productpressure_gauge.set(7);

//product temp gauge
var opts_temp = JSON.parse(JSON.stringify(opts_pressure));
opts_temp.staticLabels.labels= [10,20,30,40,50,60,70,80,90,100,110,120] ; // Print labels at these values
opts_temp.staticLabels.fractionDigits = 0;
opts_temp.staticZones= [
    {strokeStyle: "#ff8400", min: 0, max: 120},
    {strokeStyle: "#30B32D", min: 60, max: 105}
]
var ProducttempGauge = document.getElementById("ProducttempGauge"); // your canvas element
var ProducttempGauge_gauge = new Gauge(ProducttempGauge).setOptions(opts_temp);
ProducttempGauge_gauge.maxValue = 120;
ProducttempGauge_gauge.setMinValue(0);
ProducttempGauge_gauge.animationSpeed = 32;
ProducttempGauge_gauge.set(7);

function Seperatormotor() {
    var randomInterval = Math.random() * 2000 + 100; // Generates a random interval between 1000 and 6000 milliseconds
    var randomValue = Math.random() * 20; // Generates a random value between 0 and 20
    Seperatormotor_gauge.set(randomValue);
    var roundedNumber = randomValue.toFixed(2);
    document.getElementById("Seperatormotor_reading").textContent =roundedNumber + " A";
    setTimeout(function() {

        // Call the function again after the random interval
        Seperatormotor();
    }, randomInterval);
}
function Productpressure() {
    var randomInterval = Math.random() * 2000 + 100; // Generates a random interval between 1000 and 6000 milliseconds
    var randomValue = Math.random() * 10; // Generates a random value between 0 and 20
    Productpressure_gauge.set(randomValue);
    var roundedNumber = randomValue.toFixed(2);
    document.getElementById("Productpressure_reading").textContent =roundedNumber + " bar";
    setTimeout(function() {

        // Call the function again after the random interval
        Productpressure();
    }, randomInterval);
}
function Producttemp() {
    var randomInterval = Math.random() * 2000 + 100; // Generates a random interval between 1000 and 6000 milliseconds
    var randomValue = Math.random() * 120; // Generates a random value between 0 and 20
    ProducttempGauge_gauge.set(randomValue);
    var roundedNumber = randomValue.toFixed(2);
    document.getElementById("Producttemp_reading").textContent =roundedNumber + " \u00B0C";
    setTimeout(function() {

        // Call the function again after the random interval
        Producttemp();
    }, randomInterval);
}

// Start the initial call to Seperatormotor
Seperatormotor();
Productpressure();
Producttemp();