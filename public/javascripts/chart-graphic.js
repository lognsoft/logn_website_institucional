'use strict';

const ctx = document.getElementById('myChart');
const data = {
    labels: ['junior', 'Pleno', 'Senior'],
    datasets: [
        {
            label: 'Média mensal',
            data: [3000, 5500, 7049],
            borderWidth: 1,
            backgroundColor: [
                '#089fdd',
                "#0867db",
                "#0808d8"
            ],
            borderRadius: 15,
        }
    ]
}

new Chart(ctx, {
    type: 'bar',
    data: data,
    options:{
        scales: {
            y:{
                beginAtZero: true
            }
        }
    }
    
});