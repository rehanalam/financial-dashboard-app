import SendMessageIcon from '@/assets/icons/send-message-icon.svg?react';
import Avatar from '@/components/Avatar';
import { Button } from '@/components/Button';
import Card from '@/components/Card';
import { Input } from '@/components/Input';
import React from 'react';

interface User {
  name: string;
  role: string;
  url: string;
}

interface QuickTransferProps {
  users: User[];
}

const QuickTransfer: React.FC<QuickTransferProps> = ({ users }) => {
  return (
    <Card className="min-h-[280px] py-8">
      <div className="mb-7 flex space-x-7">
        {users.map((user, index) => (
          <div key={index} className="flex flex-col items-center">
            <Avatar src={user.url} size="xl" />
            <p className="text-primary mt-4 mb-1 text-sm font-medium">{user.name}</p>
            <p className="text-xs text-blue-400">{user.role}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-3 items-center justify-between">
        <label className="col-span-1 mb-1 block text-base font-light text-blue-400">Write Amount</label>
        <div className="col-span-2 flex">
          <Input
            defaultValue="525.50"
            className="mb-0 rounded-[40px] border-0 bg-gray-200"
            placeholder="Search for something"
          />
          <Button variant="default" className="-ml-8 rounded-[40px]" size="lg">
            Send <SendMessageIcon />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default QuickTransfer;
