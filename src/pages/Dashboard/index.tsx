import BalanceHistoryChart from '@/app/BalanceChart';
import CreditCard from '@/app/CreditCard';
import ExpenseChart from '@/app/ExpenseChart';
import QuickTransfer from '@/app/QuickTransfer';
import Transactions from '@/app/Transactions';
import WeeklyActivityChart from '@/app/WeeklyActivityChart';
import GridSection from '@/components/GridSection';

const users = [
  {
    name: 'Livia Bator',
    role: 'Director',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNlXZlMguDa-0yDfWZbxjbWqSu4TCEK8d-gEDkQWIUK3Ox1Sx2VnDyYy6oKpWjw0ALTXY&usqp=CAU',
  },
  {
    name: 'Workman',
    role: 'Designer',
    url: 'https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?q=80&w=5670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Workman',
    role: 'Developer',
    url: 'https://xsgames.co/randomusers/assets/avatars/male/8.jpg',
  },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* First Row */}
      <div className="grid grid-cols-1 gap-7 md:grid-cols-12">
        <GridSection title="My Cards" colSpan="md:col-span-12 xl:col-span-8 " showSeeAll>
          <div className="flex w-full flex-col gap-7 md:flex-row md:gap-7">
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
        </GridSection>

        <GridSection title="Recent Transaction" colSpan="md:col-span-12 xl:col-span-4">
          <Transactions />
        </GridSection>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 gap-7 md:grid-cols-12">
        <GridSection title="Weekly Activity" colSpan="md:col-span-12 xl:col-span-8">
          <WeeklyActivityChart />
        </GridSection>

        <GridSection title="Expense Statistics" colSpan="md:col-span-12 xl:col-span-4">
          <ExpenseChart />
        </GridSection>
      </div>

      {/* Third Row */}
      <div className="grid grid-cols-1 gap-7 md:grid-cols-10">
        <GridSection title="Quick Transfer" colSpan="md:col-span-12 xl:col-span-4">
          <QuickTransfer users={users} />
        </GridSection>

        <GridSection title="Balance History" colSpan="md:col-span-12 xl:col-span-6">
          <BalanceHistoryChart />
        </GridSection>
      </div>
    </div>
  );
};

export default Dashboard;
