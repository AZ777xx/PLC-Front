function updateCurrentTime() {
    const currentTimeElement = document.getElementById("current-time");
    const currentTime = new Date().toLocaleTimeString();
    currentTimeElement.textContent = currentTime;
}

function updateSubtitle() {
    // Get the current HTML file name
    var fileName = window.location.pathname.split("/").pop();
    fileName = fileName.replace(".html", "");
    fileName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
    if (fileName == "Index" ){fileName = "Dashboard"};

    // Find the element with the class "subtitle"
    var subtitleElement = document.querySelector(".subtitle");

    // Change the text to the current HTML file name
    subtitleElement.textContent = fileName;
}

// Update current time every second
setInterval(updateCurrentTime, 1000);
updateSubtitle();
