import React from 'react';
import Card from '../components/ui/Card.jsx';
import Table from '../components/ui/Table.jsx';
import Tag from '../components/ui/Tag.jsx';

const Mechanics = () => {
  const mechanics = [
    {
      name: 'Raju',
      role: 'Senior Technician',
      todayJobs: '5',
      speciality: 'Engine & gearbox',
      rating: '4.8',
      status: <Tag color="primary">In Bay 2</Tag>
    },
    {
      name: 'Imran',
      role: 'Technician',
      todayJobs: '4',
      speciality: 'Electricals',
      rating: '4.5',
      status: <Tag color="success">Available</Tag>
    },
    {
      name: 'Sanjay',
      role: 'Junior Technician',
      todayJobs: '3',
      speciality: 'Brakes & suspension',
      rating: '4.2',
      status: <Tag color="warning">On Test Ride</Tag>
    }
  ];

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2>Technicians</h2>
          <p>Balance workload and track performance of your team.</p>
        </div>
        <div className="page-actions">
          <button className="btn btn-outline">Shift Planner</button>
          <button className="btn btn-primary">+ Add Technician</button>
        </div>
      </div>

      <div className="grid grid-2">
        <Card title="Add / Edit Technician">
          <div className="form-grid-2">
            <label className="field">
              <span>Name</span>
              <input placeholder="Technician name" />
            </label>
            <label className="field">
              <span>Primary role</span>
              <select>
                <option>Senior Technician</option>
                <option>Technician</option>
                <option>Helper</option>
              </select>
            </label>
            <label className="field">
              <span>Mobile number</span>
              <input placeholder="Contact number" />
            </label>
            <label className="field">
              <span>Speciality</span>
              <input placeholder="e.g. Engine, electricals, tuning" />
            </label>
          </div>
          <div className="form-actions-right">
            <button className="btn btn-primary">Save Technician</button>
          </div>
        </Card>

        <Card title="Team Overview">
          <Table
            columns={[
              { key: 'name', label: 'Name' },
              { key: 'role', label: 'Role' },
              { key: 'todayJobs', label: 'Jobs Today' },
              { key: 'speciality', label: 'Speciality' },
              { key: 'rating', label: 'Rating' },
              { key: 'status', label: 'Status' }
            ]}
            rows={mechanics}
          />
        </Card>
      </div>
    </div>
  );
};

export default Mechanics;




