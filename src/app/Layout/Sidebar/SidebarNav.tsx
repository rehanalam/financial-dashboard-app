import CreditCardIcon from '@/assets/icons/credit-card-icon.svg?react';
import EconometricsIcon from '@/assets/icons/econometrics-icon.svg?react';
import Investments from '@/assets/icons/economic-investment-icon.svg?react';
import GlyphIcon from '@/assets/icons/glyph-icon.svg?react';
import HomeIcon from '@/assets/icons/home-icon.svg?react';
import LoanIcon from '@/assets/icons/loan-icon.svg?react';
import ServiceIcon from '@/assets/icons/service-icon.svg?react';
import SettingsIcon from '@/assets/icons/settings-solid-icon.svg?react';
import UserIcon from '@/assets/icons/user-icon.svg?react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './sidebar.css';

export const menuItems = [
  { name: 'Dashboard', icon: HomeIcon, path: '/' },
  { name: 'Transactions', icon: GlyphIcon, path: '/transactions' },
  { name: 'Accounts', icon: UserIcon, path: '/accounts' },
  { name: 'Investments', icon: Investments, path: '/investments' },
  { name: 'Credit Cards', icon: CreditCardIcon, path: '/credit-cards' },
  { name: 'Loans', icon: LoanIcon, path: '/loans' },
  { name: 'Services', icon: ServiceIcon, path: '/services' },
  { name: 'My Privileges', icon: EconometricsIcon, path: '/my-privileges' },
  { name: 'Settings', icon: SettingsIcon, path: '/settings' },
];

const SidebarNav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="sidebar-wrapper">
        <nav className="mt-10">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={index}
                to={item.path}
                className={`nav-item flex items-center space-x-3 px-6 py-4 transition duration-200 ${
                  isActive ? 'active' : ''
                }`}
              >
                <div className={`side-nav-icon ${isActive ? 'active' : ''}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <span className={`side-nav-text ${isActive ? 'active' : ''}`}>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex bg-black md:hidden">
          <div className="w-64 bg-gray-900 p-5 text-white">
            <button onClick={toggleMobileMenu} className="mb-4 text-gray-400">
              x
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
      )}
    </>
  );
};

export default SidebarNav;
