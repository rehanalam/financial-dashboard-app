import Avatar from '@/components/Avatar';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import Label from '@/components/Label';
import { fetchProfile, updateProfile } from '@/redux/slices/profileSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import 'react-tabs/style/react-tabs.css';

import { USER_IMAGE_URL } from '../Layout/Header';

interface ProfileFormData {
  name: string;
  username: string;
  email: string;
  password?: string;
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
}

const EditProfile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, status } = useSelector((state: RootState) => state.profile);
  const { register, handleSubmit, reset } = useForm<ProfileFormData>();

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        username: user.name,
        email: user.email,
        dateOfBirth: '1990-01-25',
        presentAddress: 'San Jose, California, USA',
        permanentAddress: 'San Jose, California, USA',
        city: 'San Jose',
        postalCode: '45962',
        country: 'USA',
      });
    }
  }, [user, reset]);

  const onSubmit = (data: ProfileFormData) => {
    dispatch(updateProfile(data));
  };

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error loading profile</div>;

  return (
    <div className="mt-10 flex w-full flex-col items-center gap-10 md:flex-row md:items-start">
      <div>
        <Avatar src={USER_IMAGE_URL} size="2xl" />
      </div>
      <div className="w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            <div>
              <Label>Your Name</Label>
              <Input type="text" {...register('name')} className="w-full" />
            </div>
            <div>
              <Label>User Name</Label>
              <Input type="text" {...register('username')} className="w-full" />
            </div>
            <div>
              <Label>Email</Label>
              <Input type="email" {...register('email')} className="w-full" />
            </div>
            <div>
              <Label>Password</Label>
              <Input type="password" {...register('password')} className="w-full" />
            </div>
            <div>
              <Label>Date of Birth</Label>
              <Input type="date" {...register('dateOfBirth')} className="w-full" />
            </div>
            <div>
              <Label>Present Address</Label>
              <Input type="text" {...register('presentAddress')} className="w-full" />
            </div>
            <div>
              <Label>Permanent Address</Label>
              <Input type="text" {...register('permanentAddress')} className="w-full" />
            </div>
            <div>
              <Label>City</Label>
              <Input type="text" {...register('city')} className="w-full" />
            </div>
            <div>
              <Label>Postal Code</Label>
              <Input type="text" {...register('postalCode')} className="w-full" />
            </div>
            <div>
              <Label>Country</Label>
              <Input type="text" {...register('country')} className="w-full" />
            </div>
          </div>
          <Button type="submit" className="float-right w-full md:w-[190px]" variant="default" size="lg">
            Save
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
