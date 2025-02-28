import Card from '@/components/Card';

import { TRANSATION_CONST } from './Transaction.const';

const Transactions = () => {
  return (
    <Card>
      <div className="space-y-5">
        {TRANSATION_CONST.map((tx) => (
          <div key={tx.id} className="flex items-center gap-4">
            <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-gray-100">{tx.icon}</div>
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
  );
};

export default Transactions;
