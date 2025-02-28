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
  { id: 1, icon: <CardIcon />, title: 'Deposit from my Card', date: '28 Jan 2021', amount: -850 },
  { id: 2, icon: <MoneyIcon />, title: 'Deposit Paypal', date: '25 Jan 2021', amount: 2500 },
  { id: 3, icon: <PaypalIcon />, title: 'Jemi Wilson', date: '21 Jan 2021', amount: 5400 },
  { id: 4, icon: <MoneyIcon />, title: 'Amazon Purchase', date: '20 Jan 2021', amount: -220 },
  { id: 5, icon: <CardIcon />, title: 'Netflix Subscription', date: '18 Jan 2021', amount: -15 },
  { id: 6, icon: <PaypalIcon />, title: 'Apple Refund', date: '15 Jan 2021', amount: 199 },
  { id: 7, icon: <MoneyIcon />, title: 'Grocery Shopping', date: '12 Jan 2021', amount: -90 },
  { id: 8, icon: <CardIcon />, title: 'Spotify Subscription', date: '10 Jan 2021', amount: -12 },
  { id: 9, icon: <PaypalIcon />, title: 'Freelance Payment', date: '7 Jan 2021', amount: 3200 },
  { id: 10, icon: <MoneyIcon />, title: 'Gift Purchase', date: '5 Jan 2021', amount: -450 },
];
