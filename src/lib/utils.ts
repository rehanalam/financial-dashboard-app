import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const maskCardNumber = (cardNumber: string) => {
  if (cardNumber.length < 12) return cardNumber;

  const masked = cardNumber.slice(0, 4) + ' **** **** ' + cardNumber.slice(-4);

  return masked;
};
