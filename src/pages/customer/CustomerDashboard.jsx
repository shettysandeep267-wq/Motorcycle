import React, { useState, useEffect } from 'react';
import DashboardCard from '../../components/DashboardCard';
import { FaWrench, FaClock, FaCheckCircle, FaMotorcycle } from 'react-icons/fa';
import { mockServices } from '../../data/mockServices';

const CustomerDashboard = () => {
  const [customerEmail] = useState(localStorage.getItem('customerEmail') || 'Customer');
  const [myServices, setMyServices] = useState([]);

  useEffect(() => {
    // Filter services for current customer (mock - using first customer)
    const filtered = mockServices.filter((s) => s.customerId === 1);
    setMyServices(filtered);
  }, []);

  const pendingServices = myServices.filter((s) => s.status === 'Pending' || s.status === 'In Progress').length;
  const completedServices = myServices.filter((s) => s.status === 'Completed').length;

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome back!</h1>
        <p className="text-gray-600 mt-1">Here's your service overview</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <DashboardCard
          title="Pending Services"
          value={pendingServices}
          icon={FaClock}
          color="yellow"
        />
        <DashboardCard
          title="Completed Services"
          value={completedServices}
          icon={FaCheckCircle}
          color="green"
        />
        <DashboardCard
          title="Total Services"
          value={myServices.length}
          icon={FaWrench}
          color="blue"
        />
      </div>

      {/* Recent Services */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-800 mb-4">My Service History</h2>
        {myServices.length > 0 ? (
          <div className="space-y-4">
            {myServices.map((service) => (
              <div
                key={service.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaMotorcycle className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{service.serviceType}</p>
                    <p className="text-sm text-gray-500">{service.bikeModel}</p>
                    <p className="text-xs text-gray-400 mt-1">{service.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      service.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : service.status === 'In Progress'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {service.status}
                  </span>
                  <p className="text-sm font-semibold text-gray-900 mt-2">
                    ₹{service.estimatedCost}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8">No services found.</p>
        )}
      </div>
    </div>
  );
};

export default CustomerDashboard;

