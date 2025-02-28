import Card from '@/components/Card';
import { BarElement, CategoryScale, Chart as ChartJS, ChartOptions, Legend, LinearScale, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const WeeklyActivityChart = () => {
  const data = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Deposit',
        data: [200, 100, 250, 300, 150, 200, 280], // Sample deposit data
        backgroundColor: 'blue',
        borderRadius: 5, // Rounded corners
      },
      {
        label: 'Withdraw',
        data: [450, 320, 400, 480, 100, 420, 390], // Sample withdrawal data
        backgroundColor: 'black',
        borderRadius: 5,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: '#E5E7EB' },
      },
      x: {
        grid: { display: false },
      },
    },
    plugins: {
      legend: {
        position: 'top' as const, // Explicitly defining the type
        labels: {
          usePointStyle: true,
          boxWidth: 10,
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0,0,0,0.7)',
        titleColor: '#fff',
        bodyColor: '#fff',
        bodyFont: { weight: 'bold' },
        padding: 8,
        cornerRadius: 4,
      },
    },
  };

  return (
    <Card>
      <div className="h-64">
        <Bar data={data} options={options} />
      </div>
    </Card>
  );
};

export default WeeklyActivityChart;
