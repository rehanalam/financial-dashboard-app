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

export interface ProfileFormData {
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
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" type="text" {...register('name')} className="w-full" />
            </div>
            <div>
              <Label htmlFor="username">User Name</Label>
              <Input id="username" type="text" {...register('username')} className="w-full" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register('email')} className="w-full" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" {...register('password')} className="w-full" />
            </div>
            <div>
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input id="dateOfBirth" type="date" {...register('dateOfBirth')} className="w-full" />
            </div>
            <div>
              <Label htmlFor="presentAddress">Present Address</Label>
              <Input id="presentAddress" type="text" {...register('presentAddress')} className="w-full" />
            </div>
            <div>
              <Label htmlFor="permanentAddress">Permanent Address</Label>
              <Input id="permanentAddress" type="text" {...register('permanentAddress')} className="w-full" />
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Input id="city" type="text" {...register('city')} className="w-full" />
            </div>
            <div>
              <Label htmlFor="postalCode">Postal Code</Label>
              <Input id="postalCode" type="text" {...register('postalCode')} className="w-full" />
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Input id="country" type="text" {...register('country')} className="w-full" />
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
