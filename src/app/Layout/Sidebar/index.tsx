import Title from '@/components/Title';

import SidebarNav from './SidebarNav';

const Sidebar = () => {
  return (
    <div className="flex w-[250px] flex-col border-r border-gray-300 bg-white">
      <div className="sidebar-header flex h-[100px] items-center justify-center border-b border-gray-300">
        <Title size="lg" className="font-extrabold">
          Soar Task
        </Title>
      </div>
      <div className="sidebar-nav">
        <SidebarNav />
      </div>
    </div>
  );
};

export default Sidebar;
