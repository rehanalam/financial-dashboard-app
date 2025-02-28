import TaskIcon from '@/assets/icons/task-icon.svg?react';
import Title from '@/components/Title';

import SidebarNav from './SidebarNav';

const Sidebar = () => {
  return (
    <div className="flex w-[250px] flex-col border-r border-gray-300 bg-white">
      <div className="sidebar-header flex min-h-[99px] items-center justify-center border-b border-gray-300 py-6">
        <Title size="md" className="!font-[800]">
          <span className="flex items-center">
            <TaskIcon className="mr-2" /> Soar Task
          </span>
        </Title>
      </div>
      <div className="sidebar-nav">
        <SidebarNav />
      </div>
    </div>
  );
};

export default Sidebar;
