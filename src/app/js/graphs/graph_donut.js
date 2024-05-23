const colors = ["#20B9AE", "#3E70C9"];

const donut_options = {
    series: [65, 35],
    colors: colors,
    chart: {
      height: "205rem",
      type: "donut",
    },
    stroke: {
      colors: ["transparent"],
      lineCap: "",
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            //show: true,
            name: {
              show: true,
              fontFamily: "Inter, sans-serif",
              offsetY: 20,
            },
          },
          size: "60%",
        },
      },
    },
    grid: {
      padding: {
        top: 5,
        right: 80,
      },
    },
    labels: ["LOJA FISICA", "LOJA ONLINE"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + "%"
        },
      },
    },
    xaxis: {
      labels: {
        formatter: function (value) {
          return value  + "%"
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
}

if (document.getElementById("donut-chart") && typeof ApexCharts !== 'undefined') {
    const chart = new ApexCharts(document.getElementById("donut-chart"), donut_options);
    chart.render();
}