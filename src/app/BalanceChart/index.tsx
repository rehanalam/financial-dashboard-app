import Card from '@/components/Card';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { month: 'Jul', balance: 150 },
  { month: 'Aug', balance: 300 },
  { month: 'Sep', balance: 250 },
  { month: 'Oct', balance: 700 },
  { month: 'Nov', balance: 200 },
  { month: 'Dec', balance: 600 },
  { month: 'Jan', balance: 550 },
];

const BalanceHistoryChart = () => {
  return (
    <Card className="min-h-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(45, 96, 255, 0.25)" />
              <stop offset="100%" stopColor="rgba(45, 96, 255, 0)" />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />

          <XAxis dataKey="month" tick={{ fill: '#718EBF' }} axisLine={false} />

          <YAxis tick={{ fill: '#718EBF' }} axisLine={false} />

          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0,0,0,0.7)',
              border: 'none',
              borderRadius: '4px',
              color: '#fff',
            }}
          />

          <Area
            type="monotone"
            dataKey="balance"
            stroke="#1814F3"
            strokeWidth={2}
            fill="url(#balanceGradient)"
            fillOpacity={1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default BalanceHistoryChart;
