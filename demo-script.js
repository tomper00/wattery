// demo-script.js

document.addEventListener('DOMContentLoaded', function () {
    // Example data
    const roomOutliers = ['Room 101', 'Room 202', 'Room 303'];
    const top10Rooms = ['Room 105', 'Room 110', 'Room 210', 'Room 305', 'Room 405', 'Room 505', 'Room 605', 'Room 705', 'Room 805', 'Room 905'];
    const bottomRooms = ['Room 201', 'Room 301', 'Room 401', 'Room 501', 'Room 601', 'Room 701', 'Room 801', 'Room 901', 'Room 1001', 'Room 1101'];
    const totalSavings = 15; // in percentage
    const dailyWaterCost = 50; // in dollars
    const dailyWaterSavings = 10; // in dollars
    const ytdSavings = 500; // in dollars
    const estimatedDailyUsage = 120; // in liters
    const waterUsageData = [20, 30, 45, 50, 60, 70, 80, 90, 100, 110, 120, 130]; // Example data
    const previousPeriodData = [25, 35, 40, 55, 65, 75, 85, 95, 105, 115, 125, 135]; // Example data

    // Initialize datepicker
    $('.datepicker').datepicker({
        format: 'mm/dd/yyyy',
        startDate: '-3d'
    });

    // Populate Room Outliers
    const roomOutliersList = document.getElementById('room-outliers');
    if (roomOutliersList) {
        roomOutliers.forEach(room => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = room;
            roomOutliersList.appendChild(li);
        });
    }

    // Populate Top 10 Rooms
    const top10RoomsList = document.getElementById('top-10-rooms');
    if (top10RoomsList) {
        top10Rooms.forEach(room => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = room;
            top10RoomsList.appendChild(li);
        });
    }

    // Populate Bottom Rooms
    const bottomRoomsList = document.getElementById('bottom-rooms');
    if (bottomRoomsList) {
        bottomRooms.forEach(room => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = room;
            bottomRoomsList.appendChild(li);
        });
    }

    // Update Total Savings
    const totalSavingsElement = document.querySelector('.card-title');
    if (totalSavingsElement) {
        totalSavingsElement.innerHTML = `${totalSavings}% <small class="text-muted">compared to initial usage</small>`;
    }

    // Update Daily Water Cost
    const dailyWaterCostElement = document.querySelectorAll('.card-title')[1];
    if (dailyWaterCostElement) {
        dailyWaterCostElement.innerHTML = `$${dailyWaterCost} <small class="text-muted">today</small>`;
    }

    // Update Daily Water Savings
    const dailyWaterSavingsElement = document.querySelectorAll('.card-title')[2];
    if (dailyWaterSavingsElement) {
        dailyWaterSavingsElement.innerHTML = `$${dailyWaterSavings} <small class="text-muted">today</small>`;
    }

    // Update Year to Date Savings
    const ytdSavingsElement = document.querySelectorAll('.card-title')[3];
    if (ytdSavingsElement) {
        ytdSavingsElement.innerHTML = `$${ytdSavings} <small class="text-muted">YTD</small>`;
    }

    // Update Estimated Daily Usage
    const estimatedDailyUsageElement = document.querySelectorAll('.card-title')[4];
    if (estimatedDailyUsageElement) {
        estimatedDailyUsageElement.innerHTML = `${estimatedDailyUsage} <small class="text-muted">liters</small>`;
    }

    // Render Water Usage Over Time Chart
    const ctx = document.getElementById('waterUsageChart');
    if (ctx) {
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
    }

    // Render Water Usage Comparison Chart
    const comparisonCtx = document.getElementById('waterUsageComparisonChart');
    if (comparisonCtx) {
        new Chart(comparisonCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Current Period',
                        data: waterUsageData,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 2,
                        fill: false
                    },
                    {
                        label: 'Previous Period',
                        data: previousPeriodData,
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 2,
                        fill: false
                    }
                ]
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
    }
});