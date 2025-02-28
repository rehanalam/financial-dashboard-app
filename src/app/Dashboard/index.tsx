import Title from '@/components/Title';

import BalanceHistoryChart from '../BanalanceChart';
import CreditCard from '../CreditCard';
import ExpenseChart from '../ExpenseChart';
import QuickTransfer from '../QuickTransfer';
import Transactions from '../Transactions';
import WeeklyActivityChart from '../WeeklyActivityChart';

const Dashboard = () => {
  const users = [
    {
      name: 'Livia Bator',
      role: 'Director',
      url: 'https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?q=80&w=5670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Workman',
      role: 'Designer',
      url: 'https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?q=80&w=5670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Workman',
      role: 'Designer',
      url: 'https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?q=80&w=5670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-12 gap-7">
        <div className="col-span-8 flex flex-col space-y-5">
          <div className="flex items-center justify-between">
            <Title size="sm">My Cards</Title>
            <Title size="sm" className="text-right !text-lg">
              See All
            </Title>
          </div>
          <div className="flex w-full gap-7">
            <CreditCard
              balance="$5,756"
              cardHolder="Eddy Cusuma"
              validThru="12/22"
              cardNumber="3778 **** **** 1234"
              theme="dark"
            />
            <CreditCard
              balance="$5,756"
              cardHolder="Eddy Cusuma"
              validThru="12/22"
              cardNumber="3778 **** **** 1234"
              theme="light"
            />
          </div>
        </div>
        <div className="col-span-4">
          <Transactions />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-7">
        <div className="col-span-8 flex flex-col space-y-5">
          <div className="flex items-center justify-between">
            <Title size="sm">Weekly Activity</Title>
          </div>
          <div className="flex w-full gap-7">
            <WeeklyActivityChart />
          </div>
        </div>
        <div className="col-span-4 flex flex-col space-y-5">
          <div className="flex items-center justify-between">
            <Title size="sm">Expense Statistics</Title>
          </div>
          <div className="flex w-full gap-7">
            <ExpenseChart />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-7">
        <div className="col-span-4 flex flex-col space-y-5">
          <div className="flex items-center justify-between">
            <Title size="sm">Recent Transaction</Title>
          </div>
          <div className="flex w-full gap-7">
            <QuickTransfer users={users} />
          </div>
        </div>
        <div className="col-span-6 flex flex-col space-y-5">
          <div className="flex items-center justify-between">
            <Title size="sm">Balance History</Title>
          </div>
          <div className="flex w-full gap-7">
            <BalanceHistoryChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
