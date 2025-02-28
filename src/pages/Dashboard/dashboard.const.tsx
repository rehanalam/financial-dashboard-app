export interface User {
  name: string;
  role: string;
  url: string;
}

export interface CreditCardProps {
  balance: string;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  theme: 'dark' | 'light';
}

export const USERS_CONST: User[] = [
  {
    name: 'Livia Bator',
    role: 'Director',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNlXZlMguDa-0yDfWZbxjbWqSu4TCEK8d-gEDkQWIUK3Ox1Sx2VnDyYy6oKpWjw0ALTXY&usqp=CAU',
  },
  {
    name: 'Workman',
    role: 'Designer',
    url: 'https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?q=80&w=5670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Workman',
    role: 'Developer',
    url: 'https://xsgames.co/randomusers/assets/avatars/male/8.jpg',
  },
];

export const CREDI_CARD_CONST: CreditCardProps[] = [
  {
    balance: '$5,756',
    cardHolder: 'Eddy Cusuma',
    validThru: '12/22',
    cardNumber: '3778 **** **** 1234',
    theme: 'dark',
  },
  {
    balance: '$5,756',
    cardHolder: 'Eddy Cusuma',
    validThru: '12/22',
    cardNumber: '3778 **** **** 1234',
    theme: 'light',
  },
];
