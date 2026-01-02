import React, { useState, useEffect } from 'react';
import { FaDollarSign, FaExclamationTriangle, FaClock, FaCheckCircle } from 'react-icons/fa';
import DashboardCard from '../../components/DashboardCard';
import { mockServices } from '../../data/mockServices';
import { mockParts } from '../../data/mockParts';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalSales: 0,
    lowStockParts: 0,
    pendingServices: 0,
    completedServices: 0,
  });

  useEffect(() => {
    // Calculate stats from mock data
    const completed = mockServices.filter((s) => s.status === 'Completed');
    const pending = mockServices.filter((s) => s.status === 'Pending' || s.status === 'In Progress');
    const lowStock = mockParts.filter((p) => p.stock <= p.minStock);
    const totalSales = completed.reduce((sum, s) => sum + s.estimatedCost, 0);

    setStats({
      totalSales,
      lowStockParts: lowStock.length,
      pendingServices: pending.length,
      completedServices: completed.length,
    });
  }, []);

  const recentServices = mockServices.slice(0, 5);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          title="Total Sales"
          value={`₹${stats.totalSales.toLocaleString()}`}
          icon={FaDollarSign}
          color="green"
          subtitle="This month"
        />
        <DashboardCard
          title="Low Stock Parts"
          value={stats.lowStockParts}
          icon={FaExclamationTriangle}
          color="red"
          subtitle="Need restocking"
        />
        <DashboardCard
          title="Pending Services"
          value={stats.pendingServices}
          icon={FaClock}
          color="yellow"
          subtitle="Awaiting completion"
        />
        <DashboardCard
          title="Completed Services"
          value={stats.completedServices}
          icon={FaCheckCircle}
          color="blue"
          subtitle="This month"
        />
      </div>

      {/* Recent Services */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Services</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bike Model
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cost
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentServices.map((service) => (
                <tr key={service.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {service.customerName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {service.bikeModel}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {service.serviceType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        service.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : service.status === 'In Progress'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {service.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ₹{service.estimatedCost}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

