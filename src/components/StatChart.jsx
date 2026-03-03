import { Radar } from "react-chartjs-2";
import { Chart, RadialLinearScale, Tooltip, Legend, LineElement, PointElement, Filler } from 'chart.js';

Chart.register(RadialLinearScale, Tooltip, Legend, LineElement, PointElement, Filler);

const getThemeColor = (variableName) => {
  // This looks at the :root or body to find the current value of the CSS variable
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
};

function replaceStatNames(str, obj) {
  for (const x in obj) {
    str = str.replace(new RegExp(x, 'g'), obj[x]);
  }
  return str;
};

function StatChart({ currentPokemon, theme, primaryType }) {
  const statLabels = [];
  const baseStat = [];
  currentPokemon.stats.forEach(stat => {
    let statName = replaceStatNames(stat.name, { "hp": "HP", "special-attack": "sp. Atk", "special-defense": "sp. Def" })
    statName = statName[0].toUpperCase() + statName.slice(1)
    statLabels.push(statName);
    baseStat.push(stat.value);
  });

  const statSum = baseStat.reduce((partialSum, a) => partialSum + a, 0);

  const statData = {
    labels: statLabels,
    datasets: [{
      label: `Base Stat Total: ${statSum}`,
      data: baseStat,
      fill: true,
      backgroundColor: getThemeColor(`--radar-${primaryType}`),
      borderColor: getThemeColor(`--type-${primaryType}`),
      pointBackgroundColor: getThemeColor(`--type-${primaryType}`),
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: getThemeColor(`--type-${primaryType}`)
    }]
  }

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 255,
          stepSize: 51,
          count: 4,
          display: false
        },
        pointLabels: {
          color: getThemeColor('--font-color'),
          font: {
            family: 'Oswald',
            size: 14
          }
        },
        grid: {
          color: getThemeColor('--shadow'),
        },
        angleLines: {
          color: getThemeColor('--shadow'),
        },
        suggestedMin: 0,
        suggestedMax: 255,
      },
    },
    elements: {
      line: {
        borderWidth: 3,
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: getThemeColor('--font-color'),
          font: {
            family: 'Oswald',
            size: 14
          }
        }
      },
      tooltip: {
        enabled: true,
      },
    },
    hover: {
      mode: 'none',
    },
    interaction: {
      mode: 'none',
    },
    animation: {
      duration: 500,
      easing: 'easeOutQuart'
    }
  };

  const displayPointValuesPlugin = {
    id: 'displayPointValues',
    afterDatasetsDraw(chart) {
      const { ctx } = chart;
      chart.data.datasets.forEach((dataset, datasetIndex) => {
        const meta = chart.getDatasetMeta(datasetIndex);
        meta.data.forEach((point, index) => {
          const value = dataset.data[index];
          ctx.fillStyle = getThemeColor('--font-color');
          ctx.font = '12px Oswald';
          ctx.textAlign = 'center';
          ctx.fillText(value, point.x, point.y - 10);
        });
      });
    },
  };
  Chart.register(displayPointValuesPlugin);

  return (<Radar key={theme} data={statData} options={radarOptions} />);
}

export default StatChart;