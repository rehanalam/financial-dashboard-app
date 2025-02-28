import TaskIcon from '@/assets/icons/task-icon.svg?react';
import Title from '@/components/Title';
import { Link } from 'react-router-dom';

import SidebarNav from './SidebarNav';

const Sidebar = () => {
  return (
    <>
      <div className="hidden w-[250px] flex-col border-r border-gray-300 bg-white lg:flex">
        <div className="sidebar-header flex min-h-[99px] items-center justify-center border-b border-gray-300 py-6">
          <Title size="md" className="!font-[800]">
            <Link to="/">
              <span className="flex items-center">
                <TaskIcon className="mr-2" /> Soar Task
              </span>
            </Link>
          </Title>
        </div>
        <div className="sidebar-nav">
          <SidebarNav />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
