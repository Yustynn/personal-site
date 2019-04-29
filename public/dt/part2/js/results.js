const ENCOUNTER_MAP = {
    'treasure': 10,
    'neutral': 0,
    'monster': -10,
}

function computeResults() {
    const results = []
    for (let logs of histories) {
        results.push(
            logs.reduce((a, b) => a + ENCOUNTER_MAP[b[2]], 0)
        );
    }

    return results
}
const epsilonResults = [
    [0.0, [50, 150, 140, 140, 130], 'red'],
    [0.2, [70, 40, 100, -30, 30], 'blue'],
    [0.4, [-50, 0, -10, 60, 50], 'purple'],
    [0.6, [-40, -30, -20, 60, 10], 'yellow'],
    [0.8, [0, -40, -30, 10, -10], 'pink'],
    [1.0, [-30, -50, -20, 0, -10], 'orange']
]

function loadResults() {
    document.querySelector('#main').innerHTML = '<h4>' +
        'Comparison of your playthrough with those of Epsilon-Greedy Reinforcement Learning Agents!' +
        '</h4>' +
        '<canvas id="canvas"></canvas>'
    loadChart();
}

function loadChart() {
    const results = computeResults()
    const datasets = [];

    for (let [epsilon, results, color] of epsilonResults) {
        datasets.push({
            label: `Epsilon = ${epsilon}`,
            borderColor: color,
            borderWidth: 1,
            backgroundColor: color,
            borderDash: [5, 5],
            lineTension: 0, // straight line
            data: results,
            fill: false
        });
    }

    var config = {
        type: 'line',
        data: {
            labels: [1, 2, 3, 4, 5],
            datasets: [
                ...datasets,
                {
                    label: 'Your Playthrough',
                    backgroundColor: 'green',
                    borderColor: 'green',
                    lineTension: 0, // straight line
                    data: results,
                    fill: false,
                }
            ]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Playthrough'
                    },
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 6
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Reward'
                    }
                }]
            }
        }
    };

    const ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = new Chart(ctx, config);

}