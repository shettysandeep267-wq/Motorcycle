import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaBox,
  FaWrench,
  FaUsers,
  FaChartBar,
  FaMotorcycle,
} from 'react-icons/fa';

const Sidebar = ({ isAdmin = false }) => {
  const adminMenuItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: FaHome },
    { path: '/admin/inventory', label: 'Inventory', icon: FaBox },
    { path: '/admin/services', label: 'Services', icon: FaWrench },
    { path: '/admin/customers', label: 'Customers', icon: FaUsers },
    { path: '/admin/reports', label: 'Reports', icon: FaChartBar },
  ];

  const customerMenuItems = [
    { path: '/customer/dashboard', label: 'Dashboard', icon: FaHome },
    { path: '/customer/request-service', label: 'Request Service', icon: FaWrench },
    { path: '/customer/service-history', label: 'Service History', icon: FaChartBar },
    { path: '/customer/parts', label: 'Parts', icon: FaBox },
  ];

  const menuItems = isAdmin ? adminMenuItems : customerMenuItems;

  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen fixed left-0 top-0 pt-16">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-8">
          <FaMotorcycle className="text-2xl text-blue-400" />
          <h2 className="text-xl font-bold">{isAdmin ? 'Admin Panel' : 'My Account'}</h2>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`
                }
              >
                <Icon className="text-lg" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
