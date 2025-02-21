// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners to buttons
    document.getElementById("yes-button").addEventListener("click", function () {
        selectOption("yes");
    });

    document.getElementById("no-button").addEventListener("click", function () {
        selectOption("no");
    });

    // Display the cat.gif initially
    displayCat();
});

// Function to handle button click events
function selectOption(option) {
    // Create an audio object
    const clickSound = new Audio("click-sound.mp3"); // Ensure this file exists
    clickSound.volume = 0.7; // Set volume (optional)

    // Play sound only if it's loaded
    clickSound.oncanplaythrough = function () {
        clickSound.play();
    };

    if (option === "yes") {
        // Flash rainbow colors and then hide question
        flashRainbowColors(function () {
            document.getElementById("question").style.display = "none"; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
        });
    } else if (option === "no") {
        // Change text on the "No" button to "You sure?"
        document.getElementById("no-button").innerText = "You sure?";

        // Increase font size of "Yes" button (with limit)
        var yesButton = document.getElementById("yes-button");
        var currentFontSize = parseFloat(window.getComputedStyle(yesButton).getPropertyValue("font-size"));
        
        if (currentFontSize < 50) { // Prevent it from becoming too big
            yesButton.style.fontSize = (currentFontSize * 1.5) + "px";
        }
    } else {
        alert("Invalid option!");
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#9400d3"];
    var i = 0;
    var interval = setInterval(function () {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 150); // Faster transition

    setTimeout(function () {
        clearInterval(interval);
        document.body.style.backgroundColor = ""; // Reset background color
        if (callback) callback();
    }, 2000);
}

// Function to display the initial cat.gif
function displayCat() {
    var imageContainer = document.getElementById("image-container");
    imageContainer.innerHTML = ""; // Clear previous content

    var catImage = new Image();
    catImage.src = "cat.gif"; // Ensure the file exists
    catImage.alt = "Cat";

    catImage.onload = function () {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    var imageContainer = document.getElementById("image-container");
    imageContainer.innerHTML = ""; // Clear previous content

    var catHeartImage = new Image();
    catHeartImage.src = "cat-heart.gif"; // Ensure the file exists
    catHeartImage.alt = "Cat Heart";

    catHeartImage.onload = function () {
        imageContainer.appendChild(catHeartImage);
        document.getElementById("options").style.display = "none"; // Hide buttons
    };
}
