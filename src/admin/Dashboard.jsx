import React, { useState, useEffect } from 'react';
import { FaBox, FaUsers, FaShoppingBag, FaWrench } from 'react-icons/fa';
import { mockParts } from '../data/mockParts';
import { mockCustomers } from '../data/mockCustomers';
import { mockOrders } from '../data/mockOrders';
import { mockServices } from '../data/mockServices';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalCustomers: 0,
    totalOrders: 0,
    activeServices: 0,
  });

  useEffect(() => {
    const activeServices = mockServices.filter(
      (s) => s.status === 'Pending' || s.status === 'In Progress'
    ).length;

    setStats({
      totalProducts: mockParts.length,
      totalCustomers: mockCustomers.length,
      totalOrders: mockOrders.length,
      activeServices: activeServices,
    });
  }, []);

  const StatCard = ({ title, value, icon: Icon, color }) => {
    const colorClasses = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      purple: 'bg-purple-500',
      yellow: 'bg-yellow-500',
    };

    return (
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm font-medium">{title}</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          </div>
          <div className={`${colorClasses[color]} p-4 rounded-full`}>
            <Icon className="text-white text-2xl" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your shop today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Products"
          value={stats.totalProducts}
          icon={FaBox}
          color="blue"
        />
        <StatCard
          title="Total Customers"
          value={stats.totalCustomers}
          icon={FaUsers}
          color="green"
        />
        <StatCard
          title="Total Orders"
          value={stats.totalOrders}
          icon={FaShoppingBag}
          color="purple"
        />
        <StatCard
          title="Active Services"
          value={stats.activeServices}
          icon={FaWrench}
          color="yellow"
        />
      </div>
    </div>
  );
};

export default Dashboard;

