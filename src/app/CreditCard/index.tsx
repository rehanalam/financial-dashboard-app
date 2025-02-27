import Card from '@/components/Card';
import React from 'react';

interface CreditCardProps {
  balance: string;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  theme: 'light' | 'dark';
}

const CreditCard: React.FC<CreditCardProps> = ({ balance, cardHolder, validThru, cardNumber, theme }) => {
  // Theme-specific styles
  const themeStyles =
    theme === 'dark' ? 'bg-gray-800 text-white bg-cc-gradient' : 'bg-white text-blue-800 border border-gray-100';
  const labelStyles = theme === 'dark' ? 'text-white' : 'text-blue-400';
  const valueStyles = theme === 'dark' ? 'text-white' : 'text-blue-800';

  return (
    <Card className={themeStyles}>
      <div className="space-y-7">
        {/* Balance */}
        <div>
          <p className={`text-sm ${labelStyles}`}>Balance</p>
          <p className={`text-xl font-medium ${valueStyles}`}>{balance}</p>
        </div>

        <div className="mb-9 grid grid-cols-2">
          {/* Card Holder */}
          <div>
            <p className={`text-xs font-light ${labelStyles}`}>CARD HOLDER</p>
            <p className={`text-lg font-medium ${valueStyles}`}>{cardHolder}</p>
          </div>

          {/* Valid Thru */}
          <div>
            <p className={`text-xs font-light ${labelStyles}`}>VALID THRU</p>
            <p className={`text-lg font-medium ${valueStyles}`}>{validThru}</p>
          </div>
        </div>

        {/* Card Number */}
        <div className={`bg-cc-gradient-footer -mx-6 px-6 pt-4 ${theme !== 'dark' && 'border-t-1 border-gray-100'} `}>
          <p className={`text-2xl font-medium ${valueStyles}`}>{cardNumber}</p>
        </div>
      </div>
    </Card>
  );
};

export default CreditCard;
