const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['7800X3D', '7950X3D', '7700X', '7900X', '7700', '5800X3D'],
        datasets: [{
            label: '1080P RTX 4090 FPS',
            backgroundColor: ['#403741', '#403741', '#403741', '#403741', '#403741', '#403741'],
            data: [187.3, 177.6, 163.7, 160.9, 160.4, 146.7],
            borderWidth: 1,
        }, {
            label: '4K RTX 4090 FPS',
            backgroundColor: ['#E4E3E7', '#E4E3E7', '#E4E3E7', '#E4E3E7', '#E4E3E7', '#E4E3E7'],
            data: [125.1, 122.8, 119.5, 118.7, 117.9, 117.1],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});