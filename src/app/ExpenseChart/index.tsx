import Card from '@/components/Card';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { ChartData, ChartOptions } from 'chart.js';
import React from 'react';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data: ChartData<'pie'> = {
  labels: ['Entertainment', 'Investment', 'Bill Expense', 'Others'],
  datasets: [
    {
      data: [30, 20, 15, 35],
      backgroundColor: ['#343C6A', '#396AFF', '#FC7900', '#232323'],
      borderWidth: 2,
      borderColor: '#fff',
    },
  ],
};

const options: ChartOptions<'pie'> = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
};

const ExpenseChart: React.FC = () => {
  return (
    <Card>
      <div className="relative flex max-h-[250px] items-center justify-center">
        <Pie data={data} options={options} />
      </div>
    </Card>
  );
};

export default ExpenseChart;
