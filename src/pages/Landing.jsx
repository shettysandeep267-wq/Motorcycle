import React from 'react';
import { Link } from 'react-router-dom';
import { FaMotorcycle, FaShoppingCart, FaWrench, FaBox, FaUsers, FaChartBar, FaTools, FaClipboardList, FaUserCog } from 'react-icons/fa';

const Landing = () => {
  const featuredParts = [
    {
      id: 1,
      name: 'Brake Pads Set',
      price: 1200,
      description: 'High-quality front and rear brake pads for all motorcycle models',
      image: 'https://via.placeholder.com/300x200?text=Brake+Pads'
    },
    {
      id: 2,
      name: 'Engine Oil 10W-40',
      price: 450,
      description: 'Premium synthetic engine oil for optimal performance',
      image: 'https://via.placeholder.com/300x200?text=Engine+Oil'
    },
    {
      id: 3,
      name: 'Chain & Sprocket Kit',
      price: 3500,
      description: 'Complete chain and sprocket set with installation guide',
      image: 'https://via.placeholder.com/300x200?text=Chain+Kit'
    },
    {
      id: 4,
      name: 'Motorcycle Helmet',
      price: 2800,
      description: 'ISI certified full-face helmet with ventilation system',
      image: 'https://via.placeholder.com/300x200?text=Helmet'
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="w-full bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <FaMotorcycle className="text-2xl text-gray-800" />
              <span className="text-xl font-bold text-gray-900">MotoShop</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-700 hover:text-gray-900 font-medium px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Buy Genuine Motorcycle Parts & Manage Services in One Place
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Spare parts sales, service booking, inventory control, and customer tracking — all simplified.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/customer/parts-catalog"
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
            >
              <FaShoppingCart />
              <span>Shop Motorcycle Parts</span>
            </Link>
            <Link
              to="/customer/request-service"
              className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 rounded-lg text-lg border-2 border-gray-300 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
            >
              <FaWrench />
              <span>Book a Service</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Motorcycle Parts Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            Featured Motorcycle Parts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredParts.map((part) => (
              <div
                key={part.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 border border-gray-100"
              >
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <img
                    src={part.image}
                    alt={part.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{part.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{part.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gray-900">₹{part.price}</span>
                  </div>
                  <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                    Add to Cart
                  </button>
                  <Link
                    to={`/customer/parts-catalog/${part.id}`}
                    className="block text-center text-gray-600 hover:text-gray-900 font-medium py-2 text-sm transition-colors duration-200"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <FaWrench className="text-2xl text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bike Servicing</h3>
              <p className="text-gray-600">
                Comprehensive bike servicing including oil change, filter replacement, chain lubrication, and full inspection.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <FaClipboardList className="text-2xl text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Repair Tracking</h3>
              <p className="text-gray-600">
                Real-time tracking of your bike's repair status. Get updates on service progress and completion.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <FaUserCog className="text-2xl text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mechanic Assignment</h3>
              <p className="text-gray-600">
                Expert mechanics assigned based on specialization. Track which mechanic is working on your bike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <FaShoppingCart className="text-2xl text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Online Motorcycle Parts Store</h3>
              <p className="text-gray-600">
                Browse and purchase genuine motorcycle parts online with easy search and category filters.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <FaBox className="text-2xl text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Inventory Management</h3>
              <p className="text-gray-600">
                Automated inventory tracking with low stock alerts and supplier management.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <FaTools className="text-2xl text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Service Request & Tracking</h3>
              <p className="text-gray-600">
                Submit service requests online and track status from booking to completion.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <FaUsers className="text-2xl text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Service History</h3>
              <p className="text-gray-600">
                Complete service history records for all your bikes in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FaMotorcycle className="text-2xl" />
                <span className="text-xl font-bold">MotoShop</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted partner for motorcycle parts and services.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link to="/customer/parts-catalog" className="hover:text-white transition-colors">
                    Parts Catalog
                  </Link>
                </li>
                <li>
                  <Link to="/customer/request-service" className="hover:text-white transition-colors">
                    Book Service
                  </Link>
                </li>
                <li>
                  <Link to="/admin" className="hover:text-white transition-colors">
                    Admin Panel
                  </Link>
                </li>
                <li>
                  <Link to="/customer" className="hover:text-white transition-colors">
                    Customer Panel
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: info@motorshop.com</li>
                <li>Phone: +91 98765 43210</li>
                <li>Address: 123 Service Road, City</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 MotoShop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
