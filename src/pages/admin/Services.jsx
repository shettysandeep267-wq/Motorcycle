import React, { useState } from 'react';
import { mockServices } from '../../data/mockServices';
import { mockMechanics } from '../../data/mockServices';

const Services = () => {
  const [services, setServices] = useState(mockServices);

  const handleStatusChange = (id, newStatus) => {
    setServices(
      services.map((s) => (s.id === id ? { ...s, status: newStatus } : s))
    );
  };

  const handleMechanicAssign = (id, mechanicId) => {
    const mechanic = mockMechanics.find((m) => m.id === parseInt(mechanicId));
    setServices(
      services.map((s) =>
        s.id === id
          ? {
              ...s,
              mechanicId: mechanic.id,
              mechanicName: mechanic.name,
            }
          : s
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Services Management</h1>

      <div className="card overflow-x-auto">
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
                Mechanic
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cost
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {services.map((service) => (
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
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {service.mechanicName ? (
                    service.mechanicName
                  ) : (
                    <select
                      value=""
                      onChange={(e) => handleMechanicAssign(service.id, e.target.value)}
                      className="input-field text-sm"
                    >
                      <option value="">Assign Mechanic</option>
                      {mockMechanics.map((m) => (
                        <option key={m.id} value={m.id}>
                          {m.name}
                        </option>
                      ))}
                    </select>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    value={service.status}
                    onChange={(e) => handleStatusChange(service.id, e.target.value)}
                    className={`text-xs font-semibold rounded-full px-3 py-1 border-0 ${
                      service.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : service.status === 'In Progress'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ₹{service.estimatedCost}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {service.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Services;

