// counter.js
document.addEventListener("DOMContentLoaded", function () {
    const counterElement = document.getElementById("counterdigits");
    let count = 101.0;
    let interval = 3000; // Start with 3 seconds
    let decrement = 50; // Decrease interval by 50ms each step

    function updateCounter() {
        count += 0.1;
        if (count >= 200.0) {
            count = 101.0;
            interval = 300; // Reset interval when restarting
        }
        counterElement.textContent = count.toFixed(1);

        // Decrease the interval to speed up the counter
        if (interval > 100) { // Set a minimum interval limit
            interval -= decrement;
        }

        // Schedule the next update
        setTimeout(updateCounter, interval);
    }

    // Start the counter
    setTimeout(updateCounter, interval);
});