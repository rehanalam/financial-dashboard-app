import CreditCard from '@/app/CreditCard';
import Card from '@/components/Card';
import Title from '@/components/Title';
import { Key } from 'react';

import { CREDIT_CARD_CONST } from '../Dashboard/dashboard.const';

const CreditCards = () => {
  return (
    <Card className="min-h-[calc(100vh_-_200px)]">
      <Title size="md">My Cards</Title>
      <div className="mt-8 flex w-full flex-col gap-7 md:flex-row md:gap-7">
        {CREDIT_CARD_CONST.map((card, index: Key | null | undefined) => (
          <CreditCard key={index} {...card} />
        ))}
      </div>
    </Card>
  );
};

export default CreditCards;
