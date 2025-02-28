import Card from '@/components/Card';
import { Cell, LabelList, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

interface PieData {
  name: string;
  value: number;
  color: string;
}

const data: PieData[] = [
  { name: 'Entertainment', value: 35, color: '#343C6A' },
  { name: 'Investment', value: 25, color: '#396AFF' },
  { name: 'Bill Expense', value: 20, color: '#FC7900' },
  { name: 'Others', value: 30, color: '#232323' },
];

const getNameByValue = (value: number): string => {
  const entry = data.find((item) => item.value === value);
  return entry ? entry.name : '';
};

const ExpenseChart = () => {
  return (
    <Card>
      <div className="relative flex max-h-[280px] items-center justify-center">
        <ResponsiveContainer width="100%" height={380}>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" paddingAngle={2} fill="#8884d8" stroke="#fff">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}

              <LabelList
                dataKey="value"
                position="inside"
                formatter={(value: number) => {
                  const name = getNameByValue(value);
                  return `${value}%\n${name}`;
                }}
                fill="#fff"
                fontSize={9}
                fontWeight="semibold"
              />
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: '#E5E7EB',
                border: 'none',
                borderRadius: '4px',
                color: '#718EBF',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default ExpenseChart;
