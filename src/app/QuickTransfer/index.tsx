import SendMessageIcon from '@/assets/icons/send-message-icon.svg?react';
import Avatar from '@/components/Avatar';
import { Button } from '@/components/Button';
import Card from '@/components/Card';
import { Input } from '@/components/Input';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface User {
  name: string;
  role: string;
  url: string;
}

interface QuickTransferProps {
  users: User[];
}

interface TransferForm {
  amount: string;
}

const QuickTransfer = ({ users }: QuickTransferProps) => {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TransferForm>({ mode: 'onChange' });

  const onSubmit = (data: TransferForm) => {
    console.log(data);
    if (!isValid) return;
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

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

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-8 grid grid-cols-3 items-center justify-between">
          <label className="col-span-1 mb-1 block text-base font-light text-blue-400">Write Amount</label>
          <div className="col-span-2 flex justify-end">
            <Input
              {...register('amount', {
                required: 'Amount is required',
                pattern: { value: /^\d+(\.\d{1,2})?$/, message: 'Enter a valid amount' },
                validate: (value) => parseFloat(value) > 0 || 'Amount must be greater than 0',
              })}
              className="mb-0 max-w-[200px] rounded-[40px] border-0 bg-gray-200"
              placeholder="Enter amount"
            />
            <Button type="submit" variant="default" className="-ml-8 rounded-[40px]" size="lg">
              Send <SendMessageIcon />
            </Button>
          </div>
        </div>
        <div className="mr-4 flex justify-end">
          {errors.amount && <p className="mt-2 text-xs text-red-500">{errors.amount.message}</p>}
          {success && isValid && <p className="mt-3 text-xs text-green-500">Transfer successful!</p>}
        </div>
      </form>
    </Card>
  );
};

export default QuickTransfer;
