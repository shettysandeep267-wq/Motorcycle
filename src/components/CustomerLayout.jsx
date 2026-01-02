import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const CustomerLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar isAdmin={false} />
      <div className="flex-1 ml-64">
        <Navbar isCustomer={true} />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default CustomerLayout;
