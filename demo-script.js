// demo-script.js

document.addEventListener('DOMContentLoaded', function () {
    // Example data
    const roomOutliers = ['Room 101', 'Room 202', 'Room 303'];
    { room: 'Room 101', usage: 1300 }
    // Uppdatera top10Rooms och bottomRooms för att inkludera vattenförbrukning
    const top10Rooms = [
        { room: 'Room 105', usage: 150 },
        { room: 'Room 110', usage: 160 },
        { room: 'Room 210', usage: 170 },
        { room: 'Room 305', usage: 180 },
        { room: 'Room 405', usage: 190 },
        { room: 'Room 505', usage: 200 },
        { room: 'Room 605', usage: 210 },
        { room: 'Room 705', usage: 220 },
        { room: 'Room 805', usage: 230 },
        { room: 'Room 905', usage: 240 }
    ];
    
    const bottomRooms = [
        { room: 'Room 1101', usage: 940 },
        { room: 'Room 1001', usage: 836 },
        { room: 'Room 901', usage: 828 },
        { room: 'Room 801', usage: 770 },
        { room: 'Room 701', usage: 556 },
        { room: 'Room 601', usage: 532 },
        { room: 'Room 501', usage: 488 },
        { room: 'Room 401', usage: 489 },
        { room: 'Room 301', usage: 433 },
        { room: 'Room 201', usage: 422 }
    ];
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
const top10RoomsList = document.getElementById('top-10-rooms');
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