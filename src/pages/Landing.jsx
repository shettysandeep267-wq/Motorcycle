import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaMotorcycle, 
  FaShoppingCart, 
  FaWrench, 
  FaBox, 
  FaUsers, 
  FaTools, 
  FaClipboardList, 
  FaUserCog, 
  FaCartPlus,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';

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
      <nav className="w-full bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200 sticky top-0 z-50 transition-shadow duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <FaMotorcycle className="text-2xl text-gray-800 group-hover:text-gray-900 transition-colors duration-200" />
              <span className="text-xl font-bold text-gray-900 tracking-tight">MotoShop</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-700 hover:text-gray-900 font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-50"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Motorcycle Parts & Services Shop Management System
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Spare parts sales, service booking, inventory control, and customer tracking — all simplified in one powerful platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/customer/parts-catalog"
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 transform hover:scale-105"
            >
              <FaShoppingCart className="text-lg" />
              <span>Shop Motorcycle Parts</span>
            </Link>
            <Link
              to="/customer/request-service"
              className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 rounded-lg text-lg border-2 border-gray-300 hover:border-gray-400 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 transform hover:scale-105"
            >
              <FaWrench className="text-lg" />
              <span>Book a Service</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Motorcycle Parts Section */}
      <section className="bg-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Featured Motorcycle Parts
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Premium quality parts for your motorcycle
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredParts.map((part) => (
              <div
                key={part.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2 group"
              >
                <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={part.image}
                    alt={part.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{part.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">{part.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gray-900">₹{part.price.toLocaleString('en-IN')}</span>
                  </div>
                  <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg group/btn">
                    <FaCartPlus className="text-sm group-hover/btn:scale-110 transition-transform" />
                    <span>Add to Cart</span>
                  </button>
                  <Link
                    to={`/customer/parts-catalog/${part.id}`}
                    className="block text-center text-gray-600 hover:text-gray-900 font-medium py-2 text-sm transition-colors duration-200 mt-2"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive motorcycle service solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 lg:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <FaWrench className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bike Servicing</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive bike servicing including oil change, filter replacement, chain lubrication, and full inspection.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 lg:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-green-50 to-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <FaClipboardList className="text-2xl text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Repair Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Real-time tracking of your bike's repair status. Get updates on service progress and completion.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 lg:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <FaUserCog className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mechanic Assignment</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert mechanics assigned based on specialization. Track which mechanic is working on your bike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Key Features
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to manage your motorcycle needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md p-6 lg:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <FaShoppingCart className="text-2xl text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Online Motorcycle Parts Store</h3>
              <p className="text-gray-600 leading-relaxed">
                Browse and purchase genuine motorcycle parts online with easy search and category filters.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md p-6 lg:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <FaBox className="text-2xl text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inventory Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Automated inventory tracking with low stock alerts and supplier management.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md p-6 lg:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <FaTools className="text-2xl text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Service Request & Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Submit service requests online and track status from booking to completion.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md p-6 lg:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <FaUsers className="text-2xl text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Service History</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete service history records for all your bikes in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FaMotorcycle className="text-2xl" />
                <span className="text-xl font-bold tracking-tight">MotoShop</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your trusted partner for motorcycle parts and services. Quality parts, expert service, and complete peace of mind.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link to="/customer/parts-catalog" className="hover:text-white transition-colors duration-200 inline-block">
                    Parts Catalog
                  </Link>
                </li>
                <li>
                  <Link to="/customer/request-service" className="hover:text-white transition-colors duration-200 inline-block">
                    Book Service
                  </Link>
                </li>
                <li>
                  <Link to="/admin" className="hover:text-white transition-colors duration-200 inline-block">
                    Admin Panel
                  </Link>
                </li>
                <li>
                  <Link to="/customer" className="hover:text-white transition-colors duration-200 inline-block">
                    Customer Panel
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start space-x-3">
                  <FaEnvelope className="text-gray-500 mt-0.5 flex-shrink-0" />
                  <span>info@motorshop.com</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaPhone className="text-gray-500 mt-0.5 flex-shrink-0" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-gray-500 mt-0.5 flex-shrink-0" />
                  <span>123 Service Road, City</span>
                </li>
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
