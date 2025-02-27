import Card from '@/components/Card';
import { CategoryScale, Chart as ChartJS, LineElement, LinearScale, PointElement, Tooltip } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip);

const BalanceHistoryChart = () => {
  const data = {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [
      {
        label: 'Balance',
        data: [150, 300, 250, 700, 200, 600, 550], // Sample data
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)', // Light fill under the line
        borderWidth: 2,
        fill: true,
        tension: 0.4, // Curved line
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: '#E5E7EB' }, // Light grid color
      },
      x: {
        grid: { display: false },
      },
    },
    plugins: {
      tooltip: { enabled: true },
    },
  };

  return (
    <Card>
      <div className="h-52">
        <Line data={data} options={options} />
      </div>
    </Card>
  );
};

export default BalanceHistoryChart;
