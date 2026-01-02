import React, { useState, useEffect } from 'react';
import { FaBox, FaUsers, FaShoppingBag, FaWrench, FaArrowRight } from 'react-icons/fa';
import DashboardCard from '../../components/DashboardCard';
import { mockServices } from '../../data/mockServices';
import { mockParts } from '../../data/mockParts';
import { mockCustomers } from '../../data/mockCustomers';
import { mockOrders } from '../../data/mockOrders';

const AdminDashboard = () => {
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

  const recentOrders = mockOrders.slice(0, 5);
  const recentServices = mockServices.slice(0, 5);

  const getStatusBadge = (status) => {
    const statusClasses = {
      Pending: 'bg-yellow-100 text-yellow-800',
      Processing: 'bg-blue-100 text-blue-800',
      Shipped: 'bg-purple-100 text-purple-800',
      Delivered: 'bg-green-100 text-green-800',
      Cancelled: 'bg-red-100 text-red-800',
      Completed: 'bg-green-100 text-green-800',
      'In Progress': 'bg-yellow-100 text-yellow-800',
    };
    return (
      <span
        className={`px-2 py-1 text-xs font-semibold rounded-full ${
          statusClasses[status] || 'bg-gray-100 text-gray-800'
        }`}
      >
        {status}
      </span>
    );
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your shop today.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          title="Total Products"
          value={stats.totalProducts}
          icon={FaBox}
          color="blue"
          subtitle="In inventory"
        />
        <DashboardCard
          title="Total Customers"
          value={stats.totalCustomers}
          icon={FaUsers}
          color="green"
          subtitle="Registered users"
        />
        <DashboardCard
          title="Total Orders"
          value={stats.totalOrders}
          icon={FaShoppingBag}
          color="purple"
          subtitle="All time"
        />
        <DashboardCard
          title="Active Services"
          value={stats.activeServices}
          icon={FaWrench}
          color="yellow"
          subtitle="In progress"
        />
      </div>

      {/* Recent Orders and Services */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Recent Orders</h2>
            <a
              href="/admin/orders"
              className="text-sm text-blue-600 hover:text-blue-800 flex items-center space-x-1"
            >
              <span>View all</span>
              <FaArrowRight className="text-xs" />
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.orderNumber}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      {order.customerName}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                      ₹{order.totalAmount.toLocaleString('en-IN')}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">{getStatusBadge(order.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Service Requests */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Recent Service Requests</h2>
            <a
              href="/admin/services"
              className="text-sm text-blue-600 hover:text-blue-800 flex items-center space-x-1"
            >
              <span>View all</span>
              <FaArrowRight className="text-xs" />
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service Type
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cost
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentServices.map((service) => (
                  <tr key={service.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                      {service.customerName}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      {service.serviceType}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">{getStatusBadge(service.status)}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                      ₹{service.estimatedCost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
