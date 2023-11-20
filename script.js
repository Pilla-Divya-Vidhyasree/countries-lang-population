let myChart;
let myFunc = (x,y)=>{
        const languages = x;
        const lang_val = y;
        const ctx = document.getElementById('myChart').getContext('2d');
        if (myChart) {
            myChart.destroy();
        }
        myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: languages,
                datasets: [{
                    backgroundColor: "orange",
                    data: lang_val,
                }],
            },
            options: {
                indexAxis: 'y', // Use 'y' for vertical bars
                scales: {
                    x: {
                        beginAtZero: true,
                        grid:{
                        display:false}
                    },
                    y: {
                        beginAtZero: true,
                        grid:{
                        display:false}
                    },
                },
                plugins: {
                    legend: { display: false },
                    
                    title: {
                        display: true,
                        text: "Language Data",
                    },
                },
            },
        });
    
}
function updateChart(type) {
    if (type === 'population') {
        myFunc(["world", "China", "India", "USA", "Indonesia", "Brazil", "Pakistan", "Nigeria", "Bangladesh", "Russia", "Japan"], [7693165599, 1377422166, 1295210000, 323947000, 258705000, 206135893, 194125062, 186988000, 161006790, 146599183, 126960000]);
    } else if (type === 'languages') {
        myFunc(["English", "French", "Arabic", "Spanish", "Portuguese", "Russian", "Dutch", "German", "Chinese", "Serbian"], [91, 45, 25, 24, 9, 9, 8, 7, 5, 4]);
    }
}