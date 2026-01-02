import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaWrench, FaCog, FaOilCan, FaStopCircle, FaLink, FaBatteryHalf, FaTire, FaBolt, FaCompress, FaSearch, FaCheck } from 'react-icons/fa';

const RequestService = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    motorcycleBrand: '',
    motorcycleModel: '',
    serviceDate: '',
    timeSlot: '',
    pickupRequired: false,
    additionalNotes: '',
  });

  const services = [
    {
      id: 1,
      name: 'General Service',
      icon: FaWrench,
      description: 'Complete bike checkup including oil, filters, and basic maintenance',
      price: 800,
    },
    {
      id: 2,
      name: 'Oil Change',
      icon: FaOilCan,
      description: 'Engine oil replacement with quality lubricants',
      price: 500,
    },
    {
      id: 3,
      name: 'Engine Repair',
      icon: FaCog,
      description: 'Engine diagnostics, tuning, and repair services',
      price: 2500,
    },
    {
      id: 4,
      name: 'Brake Service',
      icon: FaStopCircle,
      description: 'Brake pad replacement and brake fluid top-up',
      price: 1200,
    },
    {
      id: 5,
      name: 'Chain & Sprocket Adjustment',
      icon: FaLink,
      description: 'Chain cleaning, lubrication, and sprocket alignment',
      price: 600,
    },
    {
      id: 6,
      name: 'Battery Replacement',
      icon: FaBatteryHalf,
      description: 'Battery testing and replacement with warranty',
      price: 2800,
    },
    {
      id: 7,
      name: 'Tyre Replacement',
      icon: FaTire,
      description: 'Tyre replacement with balancing and alignment',
      price: 3000,
    },
    {
      id: 8,
      name: 'Electrical Repair',
      icon: FaBolt,
      description: 'Wiring, fuse, and electrical system diagnostics',
      price: 1000,
    },
    {
      id: 9,
      name: 'Suspension Service',
      icon: FaCompress,
      description: 'Front and rear suspension servicing and repair',
      price: 1800,
    },
    {
      id: 10,
      name: 'Full Bike Inspection',
      icon: FaSearch,
      description: 'Comprehensive bike inspection and health check',
      price: 1200,
    },
  ];

  const handleSelectService = (service) => {
    setSelectedService(service);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/customer/service-history');
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Book Motorcycle Service</h1>
        <p className="text-xl text-gray-600">Select a service and schedule your bike servicing</p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            const isSelected = selectedService?.id === service.id;
            return (
              <div
                key={service.id}
                onClick={() => handleSelectService(service)}
                className={`bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 cursor-pointer ${
                  isSelected ? 'border-blue-600 bg-blue-50' : 'border-gray-100'
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                    isSelected ? 'bg-blue-600' : 'bg-blue-100'
                  }`}>
                    <Icon className={`text-2xl ${isSelected ? 'text-white' : 'text-blue-600'}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 min-h-[3rem]">{service.description}</p>
                  <div className="w-full mb-4">
                    <span className="text-2xl font-bold text-gray-900">₹{service.price}</span>
                    <span className="text-sm text-gray-500 ml-1">estimated</span>
                  </div>
                  <button
                    className={`w-full font-semibold py-2 px-4 rounded-lg transition-colors duration-200 ${
                      isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    {isSelected ? (
                      <span className="flex items-center justify-center space-x-2">
                        <FaCheck />
                        <span>Selected</span>
                      </span>
                    ) : (
                      'Select Service'
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedService && (
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Booking Details</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Selected Service
              </label>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-300">
                {(() => {
                  const Icon = selectedService.icon;
                  return <Icon className="text-2xl text-blue-600" />;
                })()}
                <div>
                  <p className="font-semibold text-gray-900">{selectedService.name}</p>
                  <p className="text-sm text-gray-600">{selectedService.description}</p>
                  <p className="text-lg font-bold text-gray-900 mt-1">₹{selectedService.price}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Motorcycle Brand
                </label>
                <input
                  type="text"
                  name="motorcycleBrand"
                  value={formData.motorcycleBrand}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Royal Enfield"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Motorcycle Model
                </label>
                <input
                  type="text"
                  name="motorcycleModel"
                  value={formData.motorcycleModel}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Classic 350"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Date
                </label>
                <input
                  type="date"
                  name="serviceDate"
                  value={formData.serviceDate}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time Slot
                </label>
                <select
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select time slot</option>
                  <option value="09:00 AM - 11:00 AM">09:00 AM - 11:00 AM</option>
                  <option value="11:00 AM - 01:00 PM">11:00 AM - 01:00 PM</option>
                  <option value="01:00 PM - 03:00 PM">01:00 PM - 03:00 PM</option>
                  <option value="03:00 PM - 05:00 PM">03:00 PM - 05:00 PM</option>
                  <option value="05:00 PM - 07:00 PM">05:00 PM - 07:00 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="pickupRequired"
                  checked={formData.pickupRequired}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">Pickup Required</span>
              </label>
              <p className="text-xs text-gray-500 mt-1 ml-8">We will arrange pickup and delivery of your motorcycle</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Any specific issues or requirements..."
              />
            </div>

            <div className="flex justify-end space-x-4 pt-4">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition-colors duration-200"
              >
                Change Service
              </button>
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      )}

      {!selectedService && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-blue-800 font-medium">Please select a service to continue with booking</p>
        </div>
      )}
    </div>
  );
};

export default RequestService;
