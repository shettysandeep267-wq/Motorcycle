import React, { useState, useEffect } from 'react';
import DashboardCard from '../../components/DashboardCard';
import { FaDollarSign, FaWrench, FaUsers, FaChartLine } from 'react-icons/fa';
import { mockServices } from '../../data/mockServices';
import { mockCustomers } from '../../data/mockCustomers';
import { mockParts } from '../../data/mockParts';

const Reports = () => {
  const [reportData, setReportData] = useState({
    totalRevenue: 0,
    totalServices: 0,
    totalCustomers: 0,
    averageServiceCost: 0,
  });

  useEffect(() => {
    const completed = mockServices.filter((s) => s.status === 'Completed');
    const totalRevenue = completed.reduce((sum, s) => sum + s.estimatedCost, 0);
    const avgCost = completed.length > 0 ? totalRevenue / completed.length : 0;

    setReportData({
      totalRevenue,
      totalServices: mockServices.length,
      totalCustomers: mockCustomers.length,
      averageServiceCost: Math.round(avgCost),
    });
  }, []);

  const serviceTypeCount = mockServices.reduce((acc, service) => {
    acc[service.serviceType] = (acc[service.serviceType] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Reports & Analytics</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          title="Total Revenue"
          value={`₹${reportData.totalRevenue.toLocaleString()}`}
          icon={FaDollarSign}
          color="green"
        />
        <DashboardCard
          title="Total Services"
          value={reportData.totalServices}
          icon={FaWrench}
          color="blue"
        />
        <DashboardCard
          title="Total Customers"
          value={reportData.totalCustomers}
          icon={FaUsers}
          color="primary"
        />
        <DashboardCard
          title="Avg Service Cost"
          value={`₹${reportData.averageServiceCost}`}
          icon={FaChartLine}
          color="yellow"
        />
      </div>

      {/* Service Type Distribution */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Service Type Distribution</h2>
          <div className="space-y-3">
            {Object.entries(serviceTypeCount).map(([type, count]) => (
              <div key={type}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{type}</span>
                  <span className="text-sm text-gray-500">{count} services</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary-600 h-2 rounded-full"
                    style={{
                      width: `${(count / mockServices.length) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Completed Services</h2>
          <div className="space-y-2">
            {mockServices
              .filter((s) => s.status === 'Completed')
              .slice(0, 5)
              .map((service) => (
                <div
                  key={service.id}
                  className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-gray-900">{service.customerName}</p>
                    <p className="text-sm text-gray-500">{service.serviceType}</p>
                  </div>
                  <p className="font-semibold text-primary-600">₹{service.estimatedCost}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;

