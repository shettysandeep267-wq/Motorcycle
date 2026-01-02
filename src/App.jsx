import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Landing from './pages/Landing';
import AdminLogin from './pages/admin/AdminLogin';
import AdminSignup from './pages/admin/AdminSignup';
import AdminDashboard from './pages/admin/AdminDashboard';
import Inventory from './pages/admin/Inventory';
import Services from './pages/admin/Services';
import Customers from './pages/admin/Customers';
import Reports from './pages/admin/Reports';
import CustomerLogin from './pages/customer/CustomerLogin';
import CustomerSignup from './pages/customer/CustomerSignup';
import CustomerRegister from './pages/customer/CustomerRegister';
import CustomerSelection from './pages/customer/CustomerSelection';
import CustomerRoutes from './routes/CustomerRoutes';

const ProtectedRoute = ({ children, isAdmin = false }) => {
  const adminToken = localStorage.getItem('adminToken');
  const customerToken = localStorage.getItem('customerToken');
  if (isAdmin) {
    return adminToken ? children : <Navigate to="/admin/login" replace />;
  } else {
    return customerToken ? children : <Navigate to="/customer/login" replace />;
  }
};

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar isAdmin={true} />
      <div className="flex-1 ml-64">
        <Navbar isAdmin={true} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<CustomerLogin />} />
        <Route path="/signup" element={<CustomerSignup />} />
        <Route path="/login/customer" element={<CustomerLogin />} />
        <Route path="/signup/customer" element={<CustomerSignup />} />
        <Route path="/admin" 
          element={
            <ProtectedRoute isAdmin={true}>
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            </ProtectedRoute>
          } 
        />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/login/admin" element={<AdminLogin />} />
        <Route path="/signup/admin" element={<AdminSignup />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute isAdmin={true}>
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/inventory"
          element={
            <ProtectedRoute isAdmin={true}>
              <AdminLayout>
                <Inventory />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/services"
          element={
            <ProtectedRoute isAdmin={true}>
              <AdminLayout>
                <Services />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/customers"
          element={
            <ProtectedRoute isAdmin={true}>
              <AdminLayout>
                <Customers />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/reports"
          element={
            <ProtectedRoute isAdmin={true}>
              <AdminLayout>
                <Reports />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route path="/customer/select" element={<CustomerSelection />} />
        <Route path="/customer/login" element={<CustomerLogin />} />
        <Route path="/customer/register" element={<CustomerRegister />} />
        <Route
          path="/customer/*"
          element={
            <ProtectedRoute isAdmin={false}>
              <CustomerRoutes />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
