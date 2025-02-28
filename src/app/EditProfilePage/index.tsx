import Card from '@/components/Card';
import { fetchProfile, updateProfile } from '@/redux/slices/profileSlice';
import { AppDispatch, RootState } from '@/redux/store';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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

const EditProfilePage: React.FC = () => {
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
    <Card>
      <Tabs>
        <TabList className="flex space-x-4 border-b">
          <Tab className="cursor-pointer px-4 py-2">Edit Profile</Tab>
          <Tab className="cursor-pointer px-4 py-2">Preferences</Tab>
          <Tab className="cursor-pointer px-4 py-2">Security</Tab>
        </TabList>

        <TabPanel>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input type="text" {...register('name')} className="mt-1 block w-full rounded-md border p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">User Name</label>
                <input type="text" {...register('username')} className="mt-1 block w-full rounded-md border p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" {...register('email')} className="mt-1 block w-full rounded-md border p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" {...register('password')} className="mt-1 block w-full rounded-md border p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input type="date" {...register('dateOfBirth')} className="mt-1 block w-full rounded-md border p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Present Address</label>
                <input
                  type="text"
                  {...register('presentAddress')}
                  className="mt-1 block w-full rounded-md border p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Permanent Address</label>
                <input
                  type="text"
                  {...register('permanentAddress')}
                  className="mt-1 block w-full rounded-md border p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input type="text" {...register('city')} className="mt-1 block w-full rounded-md border p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Postal Code</label>
                <input type="text" {...register('postalCode')} className="mt-1 block w-full rounded-md border p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Country</label>
                <input type="text" {...register('country')} className="mt-1 block w-full rounded-md border p-2" />
              </div>
            </div>
            <button type="submit" className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              Save
            </button>
          </form>
        </TabPanel>

        <TabPanel>
          <div>Preferences Content</div>
        </TabPanel>

        <TabPanel>
          <div>Security Content</div>
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default EditProfilePage;
