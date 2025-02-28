import MenuIcon from '@/assets/icons/menu-icon.svg?react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { menuItems } from './SidebarNav';

const MobileNav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);
  return (
    <>
      <button className="lg:hidden" onClick={toggleMobileMenu}>
        <MenuIcon />
      </button>

      <div
        className={`fixed inset-0 z-50 flex transform transition-transform ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}
      >
        <div className="w-64 bg-white p-5 text-white">
          <button onClick={toggleMobileMenu} className="mb-4 text-gray-400">
            ✕
          </button>
          <nav>
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={index}
                  to={item.path}
                  onClick={toggleMobileMenu}
                  className={`flex items-center space-x-3 p-2 transition duration-200 ${
                    isActive ? 'text-primary' : 'text-gray-400'
                  }`}
                >
                  <item.icon className={`h-6 w-6 transition-colors ${isActive ? 'fill-primary' : 'fill-gray-400'}`} />
                  <span
                    className={`flex items-center space-x-3 p-2 transition duration-200 ${
                      isActive ? 'text-primary' : 'text-gray-400'
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
