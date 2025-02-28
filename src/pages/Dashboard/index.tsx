import BalanceHistoryChart from '@/app/BalanceChart';
import CreditCard from '@/app/CreditCard';
import ExpenseChart from '@/app/ExpenseChart';
import QuickTransfer from '@/app/QuickTransfer';
import Transactions from '@/app/Transactions';
import WeeklyActivityChart from '@/app/WeeklyActivityChart';
import GridSection from '@/components/GridSection';

import { CREDIT_CARD_CONST, USERS_CONST } from './dashboard.const';

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* First Row */}
      <div className="grid grid-cols-1 gap-7 md:grid-cols-12">
        <GridSection title="My Cards" colSpan="md:col-span-12 xl:col-span-8 " showSeeAll>
          <div className="flex w-full flex-col gap-7 md:flex-row md:gap-7">
            {CREDIT_CARD_CONST.map((card, index) => (
              <CreditCard key={index} {...card} />
            ))}
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
          <QuickTransfer users={USERS_CONST} />
        </GridSection>

        <GridSection title="Balance History" colSpan="md:col-span-12 xl:col-span-6">
          <BalanceHistoryChart />
        </GridSection>
      </div>
    </div>
  );
};

export default Dashboard;
