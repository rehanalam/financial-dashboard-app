import CardIcon from '@/assets/icons/transaction-card-icon.svg?react';
import MoneyIcon from '@/assets/icons/transaction-money-icon.svg?react';
import PaypalIcon from '@/assets/icons/transaction-paypal-icon.svg?react';

export interface Transaction {
  id: number;
  icon: React.ReactNode;
  title: string;
  date: string;
  amount: number;
}

export const TRANSATION_CONST: Transaction[] = [
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
