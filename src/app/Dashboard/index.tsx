import Title from '@/components/Title';

import CreditCard from '../CreditCard';
import Transactions from '../Transactions';

const Dashboard = () => {
  return (
    <>
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
    </>
  );
};

export default Dashboard;
