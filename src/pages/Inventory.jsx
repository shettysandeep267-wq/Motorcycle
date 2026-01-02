import React from 'react';
import Card from '../components/ui/Card.jsx';
import Table from '../components/ui/Table.jsx';
import Tag from '../components/ui/Tag.jsx';

const Inventory = () => {
  const parts = [
    {
      code: 'P-00123',
      name: 'Front Brake Pad',
      brand: 'Brembo',
      bike: 'Universal',
      stock: '8',
      status: <Tag color="warning">Low</Tag>,
      mrp: '₹ 1,200',
      sell: '₹ 950'
    },
    {
      code: 'P-00451',
      name: 'Engine Oil 10W40',
      brand: 'Castrol',
      bike: 'Universal',
      stock: '32',
      status: <Tag color="success">In Stock</Tag>,
      mrp: '₹ 650',
      sell: '₹ 520'
    },
    {
      code: 'P-00789',
      name: 'Clutch Cable',
      brand: 'Hero',
      bike: 'Splendor',
      stock: '0',
      status: <Tag color="danger">Out</Tag>,
      mrp: '₹ 220',
      sell: '₹ 180'
    }
  ];

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2>Parts Inventory</h2>
          <p>Keep every nut, bolt, and oil can under control.</p>
        </div>
        <div className="page-actions">
          <button className="btn btn-outline">+ New Brand</button>
          <button className="btn btn-primary">+ Add Part</button>
        </div>
      </div>

      <div className="inventory-layout">
        <Card title="Filters">
          <div className="form-grid-3">
            <label className="field">
              <span>Search part</span>
              <input placeholder="Name / code / brand" />
            </label>
            <label className="field">
              <span>Bike model</span>
              <select>
                <option>All models</option>
                <option>Splendor</option>
                <option>Activa</option>
                <option>R15</option>
              </select>
            </label>
            <label className="field">
              <span>Stock status</span>
              <select>
                <option>All</option>
                <option>Low</option>
                <option>Out of stock</option>
              </select>
            </label>
          </div>
        </Card>

        <Card
          title="Live Stock"
          action={<span className="hint-text">Hint: Sort by “Low” first every morning.</span>}
        >
          <Table
            columns={[
              { key: 'code', label: 'Code' },
              { key: 'name', label: 'Part' },
              { key: 'brand', label: 'Brand' },
              { key: 'bike', label: 'Bike' },
              { key: 'stock', label: 'Qty' },
              { key: 'status', label: 'Status' },
              { key: 'mrp', label: 'MRP' },
              { key: 'sell', label: 'Sell Price' }
            ]}
            rows={parts}
          />
        </Card>
      </div>
    </div>
  );
};

export default Inventory;




