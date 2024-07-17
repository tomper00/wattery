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
    const estimatedDailyUsage = 11220; // in liters
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
const top10RoomsList = document.getElementById('top-rooms');
if (top10RoomsList) {
    top10Rooms.slice(0, 10).forEach((room, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `<strong>${index + 1}</strong>. ${room.room} - ${room.usage} liters`;
        top10RoomsList.appendChild(li);
    });
}

// Populate Bottom Rooms
const bottomRoomsList = document.getElementById('bottom-rooms');
if (bottomRoomsList) {
    bottomRooms.slice(0, 10).forEach((room, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `<strong>${index + 1}</strong>. ${room.room} - ${room.usage} liters`;
        bottomRoomsList.appendChild(li);
    });
}

// Show more functionality
document.getElementById('showMoreTopRooms').addEventListener('click', () => {
    top10RoomsList.innerHTML = '';
    top10Rooms.forEach((room, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `<strong>${index + 1}</strong>. ${room.room} - ${room.usage} liters`;
        top10RoomsList.appendChild(li);
    });
});

document.getElementById('showMoreBottomRooms').addEventListener('click', () => {
    bottomRoomsList.innerHTML = '';
    bottomRooms.forEach((room, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `<strong>${index + 1}</strong>. ${room.room} - ${room.usage} liters`;
        bottomRoomsList.appendChild(li);
    });
});

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

    // Create gradient for charts
    function createGradient(ctx, color1, color2) {
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);
        return gradient;
    }

    // Render Chart for Compared to Avg Day
    const comparedToAvgDayCtx = document.getElementById('comparedToAvgDayChart').getContext('2d');
    new Chart(comparedToAvgDayCtx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Compared to Avg Day',
                data: [10, 20, 15, 25, 20, 30, 40],
                backgroundColor: createGradient(comparedToAvgDayCtx, '#90FEB4', '#49A2E5'),
                borderColor: '#49A2E5',
                borderWidth: 2,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Day'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Savings (%)'
                    }
                }
            }
        }
    });

    // Render Chart for Daily Water Cost
    const dailyWaterCostCtx = document.getElementById('dailyWaterCostChart').getContext('2d');
    new Chart(dailyWaterCostCtx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Daily Water Cost',
                data: [50, 40, 45, 35, 30, 25, 20],
                backgroundColor: createGradient(dailyWaterCostCtx, '#F365F9', '#5E48EC'),
                borderColor: '#5E48EC',
                borderWidth: 2,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Day'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Cost (USD)'
                    }
                }
            }
        }
    });

    // Render Chart for Daily Water Savings
    const dailyWaterSavingsCtx = document.getElementById('dailyWaterSavingsChart').getContext('2d');
    new Chart(dailyWaterSavingsCtx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Daily Water Savings',
                data: [5, 10, 8, 12, 15, 18, 20],
                backgroundColor: createGradient(dailyWaterSavingsCtx, '#90FEB4', '#49A2E5'),
                borderColor: '#49A2E5',
                borderWidth: 2,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Day'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Savings (USD)'
                    }
                }
            }
        }
    });

    // Render Chart for Year to Date Savings
    const ytdSavingsCtx = document.getElementById('ytdSavingsChart').getContext('2d');
    new Chart(ytdSavingsCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Year to Date Savings',
                data: [20, 30, 45, 50, 60, 70, 80, 90, 100, 110, 120, 130],
                backgroundColor: createGradient(ytdSavingsCtx, '#F365F9', '#5E48EC'),
                borderColor: '#5E48EC',
                borderWidth: 2,
                fill: true
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
                        text: 'Savings (USD)'
                    }
                }
            }
        }
    });

    // Render Water Usage Comparison Chart
    const comparisonCtx = document.getElementById('waterUsageComparisonChart').getContext('2d');
    new Chart(comparisonCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Current Period',
                    data: waterUsageData,
                    backgroundColor: createGradient(comparisonCtx, '#90FEB4', '#49A2E5'),
                    borderColor: '#49A2E5',
                    borderWidth: 2,
                    fill: true
                },
                {
                    label: 'Previous Period',
                    data: previousPeriodData,
                    backgroundColor: createGradient(comparisonCtx, '#F365F9', '#5E48EC'),
                    borderColor: '#5E48EC',
                    borderWidth: 2,
                    fill: true
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
});