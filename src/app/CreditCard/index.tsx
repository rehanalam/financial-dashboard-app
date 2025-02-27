import Card from '@/components/Card';
import React from 'react';

import MasterLogoDark from '../../assets/icons/master-cc-dark-icon.svg?react';
import MasterLogoLight from '../../assets/icons/master-cc-light-icon.svg?react';

interface CreditCardProps {
  balance: string;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  theme: 'light' | 'dark';
}

const computeTheme = (theme: string) => theme === 'dark';

const CreditCard: React.FC<CreditCardProps> = ({ balance, cardHolder, validThru, cardNumber, theme }) => {
  const isDarkTheme = computeTheme(theme);
  const themeStyles = isDarkTheme
    ? 'bg-gray-800 text-white bg-cc-gradient'
    : 'bg-white text-blue-800 border border-gray-100';
  const labelStyles = isDarkTheme ? 'text-white' : 'text-blue-400';
  const valueStyles = isDarkTheme ? 'text-white' : 'text-blue-800';

  return (
    <Card className={themeStyles}>
      <div className="font-lato space-y-7">
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
        <div
          className={`bg-cc-gradient-footer -mx-6 flex justify-between px-6 pt-5 ${!isDarkTheme && 'border-t-1 border-gray-100'} `}
        >
          <p className={`text-2xl font-medium ${valueStyles}`}>{cardNumber}</p>
          {isDarkTheme ? <MasterLogoLight /> : <MasterLogoDark />}
        </div>
      </div>
    </Card>
  );
};

export default CreditCard;
