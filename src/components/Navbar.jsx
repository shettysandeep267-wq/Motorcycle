import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaMotorcycle } from 'react-icons/fa';

const Navbar = ({ isAdmin = false, isCustomer = false }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('customerToken');
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <FaMotorcycle className="text-blue-600 text-2xl" />
            <Link to="/" className="text-xl font-bold text-gray-800">
              MotoShop
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            {(isAdmin || isCustomer) && (
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-gray-800 font-medium"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

