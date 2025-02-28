import Card from '@/components/Card';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const WeeklyActivityChart = () => {
  const data = [
    { day: 'Sat', deposit: 200, withdraw: 450 },
    { day: 'Sun', deposit: 100, withdraw: 320 },
    { day: 'Mon', deposit: 250, withdraw: 400 },
    { day: 'Tue', deposit: 300, withdraw: 480 },
    { day: 'Wed', deposit: 150, withdraw: 100 },
    { day: 'Thu', deposit: 200, withdraw: 420 },
    { day: 'Fri', deposit: 280, withdraw: 390 },
  ];

  return (
    <Card>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <Legend
              wrapperStyle={{ paddingBottom: '22px' }}
              iconType="circle"
              iconSize={10}
              align="right"
              verticalAlign="top"
            />
            <CartesianGrid stroke="#E5E7EB" horizontal={true} vertical={false} />

            <XAxis dataKey="day" tick={{ fill: '#718EBF' }} axisLine={false} tickMargin={15} />
            <YAxis tick={{ fill: '#718EBF' }} axisLine={false} tickMargin={15} />

            <Tooltip
              contentStyle={{
                backgroundColor: '#E5E7EB',
                border: 'none',
                borderRadius: '4px',
                color: '#718EBF',
              }}
            />

            <Bar dataKey="deposit" name="Deposit" fill="#396AFF" radius={[30, 30, 30, 30]} barSize={15} />
            <Bar dataKey="withdraw" name="Withdraw" fill="#232323" radius={[30, 30, 30, 30]} barSize={15} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default WeeklyActivityChart;
