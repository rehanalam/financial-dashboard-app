import NotificationsIcon from '@/assets/icons/notifications-outlined-icon.svg?react';
import SettingsIcon from '@/assets/icons/settings-outlined-icon.svg?react';
import Avatar from '@/components/Avatar';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import Title from '@/components/Title';
import { Link } from 'react-router-dom';

import MobileNav from '../Sidebar/mobileNav';

export const USER_IMAGE_URL =
  'https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?q=80&w=5670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const Header = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between border-b border-gray-300 bg-white px-10 py-6 md:flex-row">
      <div className="flex w-full items-center justify-between">
        <>
          <MobileNav />
          <Title size="lg">Overview</Title>
        </>

        <div className="right flex items-center gap-8">
          <Input
            className="mb-0 hidden min-w-64 rounded-[40px] border-0 bg-gray-200 md:flex"
            placeholder="Search for something"
          />
          <Link to="/settings">
            <Button variant="secondary" size="icon" className="hidden md:flex">
              <SettingsIcon />
            </Button>
          </Link>
          <Button variant="secondary" size="icon" className="hidden md:flex">
            <NotificationsIcon />
          </Button>
          <Avatar src={USER_IMAGE_URL} size="lg" />
        </div>
      </div>
      <div className="mt-5 flex w-full md:hidden">
        <Input className="mb-0 min-w-64 rounded-[40px] border-0 bg-gray-200" placeholder="Search for something" />
      </div>
    </div>
  );
};

export default Header;
