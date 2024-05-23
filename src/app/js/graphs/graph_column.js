const colors = ["#20B9AE", "#3E70C9"];

const column_options = {
    colors: colors,
    series: [
        {
            name: "LOJA FÍSICA",
            color: colors[0],
            data:[
                {x: "JAN", y: (100*Math.random()).toFixed(0)},
                {x: "FEV", y: (100*Math.random()).toFixed(0)},
                {x: "MAR", y: (100*Math.random()).toFixed(0)},
                {x: "ABR", y: (100*Math.random()).toFixed(0)},
                {x: "MAI", y: (100*Math.random()).toFixed(0)},
                {x: "JUN", y: (100*Math.random()).toFixed(0)},
                {x: "JUL", y: (100*Math.random()).toFixed(0)},
                {x: "AGO", y: (100*Math.random()).toFixed(0)},
                {x: "SET", y: (100*Math.random()).toFixed(0)},
                {x: "OUT", y: (100*Math.random()).toFixed(0)},
                {x: "NOV", y: (100*Math.random()).toFixed(0)},
                {x: "DEZ", y: (100*Math.random()).toFixed(0)}
            ],
        },
        {
            name: "LOJA ONLINE",
            color: colors[1],
            data:[
                {x: "JAN", y: (100*Math.random()).toFixed(0)},
                {x: "FEV", y: (100*Math.random()).toFixed(0)},
                {x: "MAR", y: (100*Math.random()).toFixed(0)},
                {x: "ABR", y: (100*Math.random()).toFixed(0)},
                {x: "MAI", y: (100*Math.random()).toFixed(0)},
                {x: "JUN", y: (100*Math.random()).toFixed(0)},
                {x: "JUL", y: (100*Math.random()).toFixed(0)},
                {x: "AGO", y: (100*Math.random()).toFixed(0)},
                {x: "SET", y: (100*Math.random()).toFixed(0)},
                {x: "OUT", y: (100*Math.random()).toFixed(0)},
                {x: "NOV", y: (100*Math.random()).toFixed(0)},
                {x: "DEZ", y: (100*Math.random()).toFixed(0)}
            ],
        }
    ],
    chart:{
        type: "bar",
        width: "125%",
        height: "250rem",
        fontFamily: "Inter, sans-serif",
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "35%",
        },
        },
    tooltip:{
        shared: true,
        intersect: false,
        style:{
            fontFamily: "Inter, sans-serif",
        },
    },
    states:{
        hover:{
            filter:{
                type: "darken",
                value: 1,
            },
        },
    },
    stroke: {
        show: true,
        width: 0,
        colors: ["transparent"],
    },
    grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
        top: 0,
    },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    xaxis: {
        floating: false,
        labels: {
            show: true,
            style: {
                fontFamily: "Inter, sans-serif",
                cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
            }
    },
    axisBorder: {
        show: false,
    },
    axisTicks: {
        show: false,
    },
    },
    yaxis: {
        show: false,
    },
    fill: {
        opacity: 1,
    },
}

if(document.getElementById("column-chart") && typeof ApexCharts !== 'undefined') {
    const column_chart = new ApexCharts(document.getElementById("column-chart"), column_options);
    column_chart.render();
}