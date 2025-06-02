
const radarChart = {
  render: function (data, config, element) {
    element.innerHTML = `<canvas id="radarCanvas"></canvas>`;
    const ctx = document.getElementById("radarCanvas").getContext("2d");

    const labels = data.fields.dimensions.map((d, i) =>
      data.rows.map((r) => r[i])
    ).flat();

    const values = data.fields.metrics.map((m, i) =>
      data.rows.map((r) => r[i + data.fields.dimensions.length])
    ).flat();

    new Chart(ctx, {
      type: "radar",
      data: {
        labels: labels,
        datasets: [{
          label: "Datos",
          data: values,
          fill: true,
          backgroundColor: "rgba(255, 255, 0, 0.1)",
          borderColor: "yellow",
          pointBackgroundColor: "yellow",
          pointBorderColor: "white",
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: "white"
            }
          },
          tooltip: {
            backgroundColor: "black",
            titleColor: "yellow",
            bodyColor: "white"
          }
        },
        scales: {
          r: {
            angleLines: {
              color: "yellow"
            },
            grid: {
              color: "yellow"
            },
            pointLabels: {
              color: "yellow"
            },
            ticks: {
              color: "white",
              backdropColor: "black"
            }
          }
        }
      }
    });
  }
};

dscc.subscribeToData(radarChart.render);
