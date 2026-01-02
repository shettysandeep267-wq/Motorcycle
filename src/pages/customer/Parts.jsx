import React, { useState } from 'react';
import { mockParts } from '../../data/mockParts';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

const Parts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(mockParts.map((p) => p.category))];

  const filteredParts = mockParts.filter((part) => {
    const matchesSearch = part.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || part.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (part) => {
    alert(`${part.name} added to cart! (This is a demo)`);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Available Parts</h1>

      {/* Search and Filter */}
      <div className="card mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10"
              placeholder="Search parts..."
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="input-field md:w-48"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Parts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredParts.map((part) => (
          <div key={part.id} className="card hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-800">{part.name}</h3>
                <p className="text-sm text-gray-500">{part.category}</p>
              </div>
              {part.stock <= part.minStock && (
                <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">
                  Low Stock
                </span>
              )}
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Price:</span>
                <span className="font-bold text-primary-600">₹{part.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Stock:</span>
                <span className={`font-semibold ${part.stock <= part.minStock ? 'text-red-600' : 'text-green-600'}`}>
                  {part.stock} units
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Supplier:</span>
                <span className="text-sm text-gray-500">{part.supplier}</span>
              </div>
            </div>

            <button
              onClick={() => handleAddToCart(part)}
              disabled={part.stock === 0}
              className={`w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-lg font-semibold transition-colors ${
                part.stock === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-primary-600 hover:bg-primary-700 text-white'
              }`}
            >
              <FaShoppingCart />
              <span>{part.stock === 0 ? 'Out of Stock' : 'Add to Cart'}</span>
            </button>
          </div>
        ))}
      </div>

      {filteredParts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No parts found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default Parts;

