import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import {
  FaHome,
  FaBox,
  FaUsers,
  FaShoppingBag,
  FaWrench,
  FaSignOutAlt,
  FaMotorcycle,
} from 'react-icons/fa';

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login', { replace: true });
  };

  const menuItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: FaHome },
    { path: '/admin/products', label: 'Products', icon: FaBox },
    { path: '/admin/customers', label: 'Customers', icon: FaUsers },
    { path: '/admin/orders', label: 'Orders', icon: FaShoppingBag },
    { path: '/admin/services', label: 'Services', icon: FaWrench },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white fixed left-0 top-0 h-screen shadow-2xl border-r border-gray-700">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8 pb-6 border-b border-gray-700">
            <div className="bg-blue-600 p-2 rounded-lg">
              <FaMotorcycle className="text-xl" />
            </div>
            <div>
              <h2 className="text-lg font-bold">MotoShop</h2>
              <p className="text-xs text-gray-400">Admin Panel</p>
            </div>
          </div>

          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`
                  }
                >
                  <Icon className="text-lg" />
                  <span className="font-medium">{item.label}</span>
                </NavLink>
              );
            })}
          </nav>

          <div className="mt-8 pt-6 border-t border-gray-700">
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-red-600 hover:text-white transition-all duration-200"
            >
              <FaSignOutAlt className="text-lg" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
          <div className="px-6 py-4">
            <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
          </div>
        </div>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

