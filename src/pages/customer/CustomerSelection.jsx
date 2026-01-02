import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaWrench, FaShoppingCart, FaMotorcycle } from 'react-icons/fa';

const CustomerSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FaMotorcycle className="text-4xl text-gray-800" />
            <span className="text-3xl font-bold text-gray-900">MotoShop</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What would you like to do today?
          </h1>
          <p className="text-xl text-gray-600">
            Choose a service to continue
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Motorcycle Servicing */}
          <div
            onClick={() => navigate('/customer/request-service')}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-100"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                <FaWrench className="text-3xl text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Motorcycle Servicing
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Book repair or maintenance services and track service status.
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                Book a Service
              </button>
            </div>
          </div>

          {/* Card 2: Buy Motorcycle Parts */}
          <div
            onClick={() => navigate('/customer/parts-catalog')}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-100"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                <FaShoppingCart className="text-3xl text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Buy Motorcycle Parts
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Browse genuine spare parts, add to cart, and place orders online.
              </p>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                Shop Parts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSelection;

