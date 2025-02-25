import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import { Menu, X, Home, CreditCard, BarChart, Settings, ChevronRight } from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: <></>, path: "/" },
//   { name: "Transactions", icon: <CreditCard size={20} />, path: "/transactions" },
//   { name: "Analytics", icon: <BarChart size={20} />, path: "/analytics" },
//   { name: "Settings", icon: <Settings size={20} />, path: "/settings" },
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
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center space-x-3 text-gray-400 hover:text-gray-800 py-2 px-4 rounded-lg transition duration-200"
            >
              {item.icon}
              <span className={`transition-opacity`}>
                {item.name}
              </span>
            </Link>
          ))}
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
