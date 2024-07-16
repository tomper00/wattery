// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Example data
    const roomOutliers = ['Room 101', 'Room 202', 'Room 303'];
    const top10Rooms = ['Room 105', 'Room 110', 'Room 210', 'Room 305', 'Room 405', 'Room 505', 'Room 605', 'Room 705', 'Room 805', 'Room 905'];
    const totalSavings = 15; // in percentage
    const waterUsageData = [20, 30, 45, 50, 60, 70, 80, 90, 100, 110, 120, 130]; // Example data

    // Populate Room Outliers
    const roomOutliersList = document.getElementById('room-outliers');
    roomOutliers.forEach(room => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = room;
        roomOutliersList.appendChild(li);
    });

    // Populate Top 10 Rooms
    const top10RoomsList = document.getElementById('top-10-rooms');
    top10Rooms.forEach(room => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = room;
        top10RoomsList.appendChild(li);
    });

    // Update Total Savings
    document.querySelector('.card-title').innerHTML = `${totalSavings}% <small class="text-muted">compared to initial usage</small>`;

    // Render Water Usage Over Time Chart
    const ctx = document.getElementById('waterUsageChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Water Usage (liters)',
                data: waterUsageData,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Month'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Water Usage (liters)'
                    }
                }
            }
        }
    });
});