import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomerLayout from '../components/CustomerLayout';
import CustomerDashboard from '../pages/customer/CustomerDashboard';
import RequestService from '../pages/customer/RequestService';
import ServiceHistory from '../pages/customer/ServiceHistory';
import Parts from '../pages/customer/Parts';

const CustomerRoutes = () => {
  return (
    <Routes>
      <Route element={<CustomerLayout />}>
        <Route index element={<CustomerDashboard />} />
        <Route path="dashboard" element={<CustomerDashboard />} />
        <Route path="request-service" element={<RequestService />} />
        <Route path="service-history" element={<ServiceHistory />} />
        <Route path="parts" element={<Parts />} />
        <Route path="parts-catalog" element={<Parts />} />
        <Route path="parts-catalog/:id" element={<Parts />} />
      </Route>
    </Routes>
  );
};

export default CustomerRoutes;
