// Create an XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Define the URL of the HTML file to load
var url = 'Bars/Titlebar.html';

// Make a GET request to fetch the contents of the file
xhr.open('GET', url, true);

// Set the response type to 'text'
xhr.responseType = 'text';

// Define the callback function to handle the response
xhr.onload = function() {
    if (xhr.status === 200) {
        // Create a new element to hold the loaded content
        var content = document.createElement('div');
        content.innerHTML = xhr.responseText;

        // Get a reference to the <body> element
        var body = document.querySelector('body');

        // Insert the loaded content after the <body> tag
        body.insertAdjacentElement('afterbegin', content);
    }
};
document.addEventListener('DOMContentLoaded', function() {
    loadSidebarContent();

    function loadSidebarContent() {
        // Create an XMLHttpRequest object
        var xhr = new XMLHttpRequest();

        // Define the URL of the HTML file to load
        var url = 'Bars/Sidebar.html';

        // Make a GET request to fetch the contents of the file
        xhr.open('GET', url, true);

        // Set the response type to 'text'
        xhr.responseType = 'text';

        // Define the callback function to handle the response
        xhr.onload = function() {
            if (xhr.status === 200) {
                // Get a reference to the container element with class 'container'
                var container = document.querySelector('.container');

                // Insert the loaded content at the beginning of the container element
                container.insertAdjacentHTML('afterbegin', xhr.responseText);
            }
        };

        // Send the request
        xhr.send();
    }
});
// Send the request
xhr.send();

//Load Bars.css
var cssFile = document.createElement('link');
cssFile.rel = 'stylesheet';
cssFile.href = 'Bars/Bars.css';
document.head.appendChild(cssFile);

//Load Titebar.js
var jsFile = document.createElement('script');
jsFile.src = 'Bars/Titlebar.js';
document.head.appendChild(jsFile);


