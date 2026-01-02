import React from 'react';
import Card from '../components/ui/Card.jsx';
import Table from '../components/ui/Table.jsx';
import Tag from '../components/ui/Tag.jsx';

const Customers = () => {
  const customers = [
    {
      name: 'Rahul Sharma',
      phone: '98765 43210',
      bikes: 'R15 V3',
      visits: '6',
      lastVisit: '10 Dec 2025',
      tag: <Tag color="success">Loyal</Tag>
    },
    {
      name: 'Pooja Verma',
      phone: '98765 11111',
      bikes: 'Activa 6G',
      visits: '2',
      lastVisit: '21 Nov 2025',
      tag: <Tag color="primary">Service Due</Tag>
    },
    {
      name: 'Imran Khan',
      phone: '98765 99999',
      bikes: 'Classic 350',
      visits: '4',
      lastVisit: '01 Dec 2025',
      tag: <Tag color="amber">Engine Work</Tag>
    }
  ];

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2>Customers & Bikes</h2>
          <p>Build strong relationships with automated reminders.</p>
        </div>
        <div className="page-actions">
          <button className="btn btn-outline">Import from Excel</button>
          <button className="btn btn-primary">+ Add Customer</button>
        </div>
      </div>

      <div className="grid grid-2">
        <Card title="New Customer">
          <div className="form-grid-2">
            <label className="field">
              <span>Full name</span>
              <input placeholder="Customer name" />
            </label>
            <label className="field">
              <span>Mobile number</span>
              <input placeholder="10-digit mobile" />
            </label>
            <label className="field">
              <span>Primary bike model</span>
              <input placeholder="e.g. Pulsar 150" />
            </label>
            <label className="field">
              <span>Registration number</span>
              <input placeholder="MH 12 AB 1234" />
            </label>
            <label className="field field-wide">
              <span>Notes</span>
              <textarea rows="3" placeholder="Preferred oil, complaints, etc." />
            </label>
          </div>
          <div className="form-actions-right">
            <button className="btn btn-primary">Save Customer</button>
          </div>
        </Card>

        <Card title="Customer List">
          <Table
            columns={[
              { key: 'name', label: 'Name' },
              { key: 'phone', label: 'Phone' },
              { key: 'bikes', label: 'Bikes' },
              { key: 'visits', label: 'Visits' },
              { key: 'lastVisit', label: 'Last Visit' },
              { key: 'tag', label: 'Tag' }
            ]}
            rows={customers}
          />
        </Card>
      </div>
    </div>
  );
};

export default Customers;




