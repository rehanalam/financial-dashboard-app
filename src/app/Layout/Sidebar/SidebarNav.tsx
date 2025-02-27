import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@/assets/icons/home-icon.svg?react";
import CreditCardIcon from "@/assets/icons/credit-card-icon.svg?react";
import EconometricsIcon from "@/assets/icons/econometrics-icon.svg?react";
import GlyphIcon from "@/assets/icons/glyph-icon.svg?react";
import LoanIcon from "@/assets/icons/loan-icon.svg?react";
import ServiceIcon from "@/assets/icons/service-icon.svg?react";
import SettingsIcon from "@/assets/icons/settings-solid-icon.svg?react";
import UserIcon from "@/assets/icons/user-icon.svg?react";
import Investments from "@/assets/icons/economic-investment-icon.svg?react";


export const menuItems = [
    { name: "Dashboard", icon: <HomeIcon />, path: "/" },
    { name: "Transactions", icon: <GlyphIcon />, path: "/transactions" },
    { name: "Accounts", icon: <UserIcon />, path: "/accounts" },
    { name: "Investments", icon: <Investments />, path: "/investments" },
    { name: "Credit Cards", icon: <CreditCardIcon />, path: "/credit-cards" },
    { name: "Loans", icon: <LoanIcon />, path: "/loans" },
    { name: "Services", icon: <ServiceIcon />, path: "/services" },
    { name: "My Privileges", icon: <EconometricsIcon />, path: "/my-privileges" },
    { name: "Settings", icon: <SettingsIcon />, path: "/settings" },
];

const SidebarNav = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  // Generate breadcrumb text from current path
  const getBreadcrumb = () => {
    const current = menuItems.find((item) => item.path === location.pathname);
    return current ? current.name : "Home";
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div>
        <nav className="mt-10">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return  <Link
                key={index}
                to={item.path}
                className={`flex items-center space-x-3 text-gray-400 hover:text-primary py-4 px-6 transition duration-200 ${
                    isActive ? "text-primary" : "text-gray-400"
                  }`}
                >
                {item.icon}
                <span className={`ml-4 transition-opacity`}>
                    {item.name}
                </span>
                </Link>
            })}
        </nav>
      </div>

      {/* Mobile Breadcrumb & Sidebar Toggle */}
      <div className="md:hidden bg-gray-900 text-white p-4 flex items-center justify-between">
        <button onClick={toggleMobileMenu} className="text-white">
          {mobileOpen ? 'X' : 'Menu icon'}
        </button>
        <div className="flex items-center text-lg font-medium">
          <span>Home</span>
         open
          <span>{getBreadcrumb()}</span>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex">
          <div className="bg-gray-900 text-white w-64 p-5">
            <button onClick={toggleMobileMenu} className="text-gray-400 mb-4">
             x
            </button>
            <nav>
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={toggleMobileMenu}
                  className="block text-gray-300 hover:text-white p-2 rounded-lg transition duration-200 hover:bg-gray-700"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default SidebarNav;
