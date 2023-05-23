// loadContent.js
function loadpage(string) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.content').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', string, true);
    xhr.send();

    // Get all the <link> elements in the document head
    var linkElements = document.head.getElementsByTagName("link");

    // Loop through the linkElements and remove the ones that are not index.css
    for (var i = linkElements.length - 1; i >= 0; i--) {
        var link = linkElements[i];

        if (link.rel === "stylesheet" && !link.href.includes("index.css")) {
            link.parentNode.removeChild(link);
        }
    }
    // Get all script elements on the page
    var scriptElements = document.querySelectorAll('script');
    // Iterate over each script element
    scriptElements.forEach(function(script) {
        // Check if the src attribute is not "index.js"
        if (script.src !== 'index.js') {
            // Remove the script element from its parent node
            script.parentNode.removeChild(script);
        }
    });
    var nohtml_string = string.replace(/\.html$/, "");
    // Create a new script element
    var newScript = document.createElement('script');
    newScript.src = nohtml_string + ".js";

// Append the script element to the <body> tag
    document.body.appendChild(newScript);



    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = nohtml_string + ".css";
    document.head.appendChild(link);
    document.getElementById("subtitle").textContent = nohtml_string
}

window.addEventListener('DOMContentLoaded', function() {
    loadpage("Dashboard.html");
});
