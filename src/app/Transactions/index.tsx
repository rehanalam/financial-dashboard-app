import CardIcon from '@/assets/icons/transaction-card-icon.svg?react';
import MoneyIcon from '@/assets/icons/transaction-money-icon.svg?react';
import PaypalIcon from '@/assets/icons/transaction-paypal-icon.svg?react';
import Card from '@/components/Card';
import Title from '@/components/Title';
import React from 'react';

interface Transaction {
  id: number;
  icon: React.ReactNode;
  title: string;
  date: string;
  amount: number;
}

const transactions: Transaction[] = [
  {
    id: 1,
    icon: <CardIcon />,
    title: 'Deposit from my Card',
    date: '28 January 2021',
    amount: -850,
  },
  {
    id: 2,
    icon: <MoneyIcon />,
    title: 'Deposit Paypal',
    date: '25 January 2021',
    amount: 2500,
  },
  {
    id: 3,
    icon: <PaypalIcon />,
    title: 'Jemi Wilson',
    date: '21 January 2021',
    amount: 5400,
  },
];

const Transactions = () => {
  return (
    <div className="flex flex-col gap-5">
      <Title size="sm">Recent Transaction</Title>
      <Card>
        <div className="space-y-5">
          {transactions.map((tx) => (
            <div key={tx.id} className="flex items-center gap-4">
              <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-gray-100">
                {tx.icon}
              </div>
              <div className="flex-1">
                <p className="text-primary mb-2 text-sm font-medium">{tx.title}</p>
                <p className="text-xs font-light tracking-wider text-blue-400">{tx.date}</p>
              </div>
              <p className={`text-sm font-medium ${tx.amount < 0 ? 'text-red-700' : 'text-green-700'}`}>
                {tx.amount < 0 ? `-$${Math.abs(tx.amount)}` : `+$${tx.amount.toLocaleString()}`}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Transactions;
