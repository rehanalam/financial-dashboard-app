import Avatar from '@/components/Avatar';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import Label from '@/components/Label';
import { fetchProfile, updateProfile } from '@/redux/slices/profileSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { USER_IMAGE_URL } from '../Layout/Header';

export interface ProfileFormData {
  name: string;
  username: string;
  email: string;
  password: string;
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
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ProfileFormData>({ mode: 'onChange' });

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      reset({
        username: user.name,
        email: user.email,
        password: 'Qwerty@123',
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
    if (!isValid) return;
    dispatch(updateProfile(data));
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
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
              <Input id="name" type="text" {...register('name', { required: 'Name is required' })} className="w-full" />
              {errors.name && <p className="mt-2 text-xs text-red-500">{errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="username">User Name</Label>
              <Input
                id="username"
                type="text"
                {...register('username', { required: 'Username is required' })}
                className="w-full"
              />
              {errors.username && <p className="mt-2 text-xs text-red-500">{errors.username.message}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email format' },
                })}
                className="w-full"
              />
              {errors.email && <p className="mt-2 text-xs text-red-500">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: { value: 8, message: 'Password must be at least 8 characters' },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                    message: 'Must include an uppercase letter, a number, and a special character',
                  },
                })}
                className="w-full"
              />
              {errors.password && <p className="mt-2 text-xs text-red-500">{errors.password.message}</p>}
            </div>
            <div>
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                {...register('dateOfBirth', { required: 'Date of Birth is required' })}
                className="w-full"
              />
              {errors.dateOfBirth && <p className="mt-2 text-xs text-red-500">{errors.dateOfBirth.message}</p>}
            </div>
            <div>
              <Label htmlFor="presentAddress">Present Address</Label>
              <Input
                id="presentAddress"
                type="text"
                {...register('presentAddress', { required: 'Present Address is required' })}
                className="w-full"
              />
              {errors.presentAddress && <p className="mt-2 text-xs text-red-500">{errors.presentAddress.message}</p>}
            </div>
            <div>
              <Label htmlFor="permanentAddress">Permanent Address</Label>
              <Input
                id="permanentAddress"
                type="text"
                {...register('permanentAddress', { required: 'Permanent Address is required' })}
                className="w-full"
              />
              {errors.permanentAddress && (
                <p className="mt-2 text-xs text-red-500">{errors.permanentAddress.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Input id="city" type="text" {...register('city', { required: 'City is required' })} className="w-full" />
              {errors.city && <p className="mt-2 text-xs text-red-500">{errors.city.message}</p>}
            </div>
            <div>
              <Label htmlFor="postalCode">Postal Code</Label>
              <Input
                id="postalCode"
                type="text"
                {...register('postalCode', {
                  required: 'Postal Code is required',
                  pattern: { value: /^\d+$/, message: 'Postal Code must be a number' },
                })}
                className="w-full"
              />
              {errors.postalCode && <p className="mt-2 text-xs text-red-500">{errors.postalCode.message}</p>}
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                type="text"
                {...register('country', { required: 'Country is required' })}
                className="w-full"
              />
              {errors.country && <p className="mt-2 text-xs text-red-500">{errors.country.message}</p>}
            </div>
          </div>

          <Button type="submit" className="float-right w-full md:w-[190px]" variant="default" size="lg">
            Save
          </Button>

          {success && isValid && <p className="mt-3 text-green-500">Profile updated successfully!</p>}
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
