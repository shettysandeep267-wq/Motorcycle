import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { mockCustomers } from '../data/mockCustomers';
import { mockOrders } from '../data/mockOrders';

const Customers = () => {
  const [customers] = useState(mockCustomers);
  const [searchTerm, setSearchTerm] = useState('');

  const getCustomerOrders = (customerId) => {
    return mockOrders.filter((order) => order.customerId === customerId);
  };

  const getCustomerStatus = (customer) => {
    const recentOrder = getCustomerOrders(customer.id)
      .sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate))[0];
    if (!recentOrder) return 'New';
    const daysSinceLastOrder = Math.floor(
      (new Date() - new Date(recentOrder.orderDate)) / (1000 * 60 * 60 * 24)
    );
    if (daysSinceLastOrder < 30) return 'Active';
    if (daysSinceLastOrder < 90) return 'Inactive';
    return 'Dormant';
  };

  const getStatusBadge = (status) => {
    const statusClasses = {
      Active: 'bg-green-100 text-green-800',
      Inactive: 'bg-yellow-100 text-yellow-800',
      Dormant: 'bg-gray-100 text-gray-800',
      New: 'bg-blue-100 text-blue-800',
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

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm)
  );

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Customer Management</h1>
        <p className="text-gray-600">Manage and view customer information</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search customers by name, email, or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Orders
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCustomers.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                    No customers found
                  </td>
                </tr>
              ) : (
                filteredCustomers.map((customer) => {
                  const totalOrders = getCustomerOrders(customer.id).length;
                  const status = getCustomerStatus(customer);
                  return (
                    <tr key={customer.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {customer.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {customer.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {customer.phone}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {totalOrders}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(status)}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customers;

