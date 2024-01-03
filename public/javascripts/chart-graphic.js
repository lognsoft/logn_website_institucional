'use strict';

const ctx = document.getElementById('myChart').getContext('2d');

new Chart(ctx, {
    // type: 'bar',
    data: {
        labels: ['Estágio','Júnior', 'Pleno', 'Sênior', 'Outro'],
        datasets: [
            {
                type: 'bar',
                label: 'Média salarial mensal',
                data: [
                    1.622,
                    3.987,
                    8.023,
                    15.510,
                    16.339
                ],
                borderWidth: 1,
                backgroundColor: [
                    '#089fdd',
                    // "#0867db",
                    // "#0808d8"
                ],
                borderRadius: 15,
            },
        ]
    },
    options:{
        scales: {
            y:{
                beginAtZero: true
            }
        },
    }
    
});

const ancoras = document.querySelectorAll("a[href=\"#pacotes\"]");

ancoras.forEach(ancora => {
    ancora.addEventListener("click", scrollToAnchor, false);
})

function scrollToAnchor(e){
    e.preventDefault();

    scroll({
        top: document.querySelector("#pacotes").offsetTop,
        behavior: 'smooth'
    })
}