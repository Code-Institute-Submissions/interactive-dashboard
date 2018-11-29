
const CHART = document.getElementById("eurUsd");
Chart.defaults.scale.ticks.beginAtZero = true;

let lineChart = new Chart(CHART, {
            type: 'line',
            data: {
                labels: [1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
                datasets: [
                    {
                        label: "U.S. Dollars per Euro ex/rate",
                        data: [1.0653, 0.9232, 0.8952, 0.9454, 1.1321, 1.2438, 1.2449, 1.2563, 1.3711, 1.4726, 1.3935, 1.3261, 1.3931, 1.2859, 1.3281, 1.3297, 1.1096, 1.1072, 1.1301, 1.1863],
                        fill: false,
                        borderColor: '#D8D8D8'
                    },
                    {
                        label: "U.S. Dollars per Australian Dollar ex/rate",
                        data: [0.6454, 0.5815, 0.5169, 0.5437, 0.6524, 0.7365, 0.7627, 0.7535, 0.8391, 0.8537, 0.7927, 0.92, 1.0332, 1.0359, 0.9683, 0.9034, 0.7522, 0.7445, 0.7671, 0.7511],
                        fill: false,
                        borderColor: '#00FF00'
                    },
                    {
                        label: "U.S. Dollars per GBP Pound ex/rate",
                        data: [1.6172, 1.5156, 1.4396, 1.5025, 1.6347, 1.833, 1.8204, 1.8434, 2.002, 1.8545, 1.5661, 1.5452, 1.6043, 1.5853, 1.5642, 1.6484, 1.5284, 1.3555, 1.289, 1.3431],
                        fill: false,
                        borderColor: '#FF0000'
                    },
                    {
                        label: "U.S. Dollars per New Zealand Dollar ex/rate",
                        data: [0.5292, 0.4568, 0.4202, 0.4645, 0.5822, 0.6643, 0.7049, 0.6492, 0.7365, 0.7151, 0.6358, 0.7216, 0.792, 0.8105, 0.8204, 0.8313, 0.7001, 0.6976, 0.7111, 0.694],
                        fill: false,
                        borderColor: '#58FAF4'
                    }]
            }
});