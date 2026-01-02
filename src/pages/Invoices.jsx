import React from 'react';
import Card from '../components/ui/Card.jsx';
import Table from '../components/ui/Table.jsx';
import Tag from '../components/ui/Tag.jsx';

const Invoices = () => {
  const invoices = [
    {
      number: 'INV-2025-101',
      customer: 'Rahul Sharma',
      amount: '₹ 2,850',
      mode: 'UPI',
      status: <Tag color="success">Paid</Tag>,
      date: '10 Dec 2025'
    },
    {
      number: 'INV-2025-102',
      customer: 'Imran Khan',
      amount: '₹ 7,200',
      mode: 'Cash',
      status: <Tag color="warning">Pending</Tag>,
      date: '10 Dec 2025'
    },
    {
      number: 'INV-2025-099',
      customer: 'Kiran Patel',
      amount: '₹ 1,150',
      mode: 'Card',
      status: <Tag color="success">Paid</Tag>,
      date: '09 Dec 2025'
    }
  ];

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2>Billing & Invoices</h2>
          <p>GST-ready billing for every job, without Excel headache.</p>
        </div>
        <div className="page-actions">
          <button className="btn btn-outline">Export GST Report</button>
          <button className="btn btn-primary">+ New Invoice</button>
        </div>
      </div>

      <div className="grid grid-2">
        <Card title="Create Invoice">
          <div className="form-grid-2">
            <label className="field">
              <span>Customer</span>
              <input placeholder="Name / mobile" />
            </label>
            <label className="field">
              <span>Service job</span>
              <input placeholder="Link job ID (optional)" />
            </label>
            <label className="field">
              <span>Parts total</span>
              <input placeholder="₹ 0.00" />
            </label>
            <label className="field">
              <span>Labour total</span>
              <input placeholder="₹ 0.00" />
            </label>
            <label className="field">
              <span>Tax (GST)</span>
              <select>
                <option>18%</option>
                <option>12%</option>
                <option>5%</option>
              </select>
            </label>
            <label className="field">
              <span>Payment mode</span>
              <select>
                <option>Cash</option>
                <option>UPI</option>
                <option>Card</option>
                <option>Bank transfer</option>
              </select>
            </label>
            <label className="field field-wide">
              <span>Notes on bill</span>
              <textarea rows="2" placeholder="Warranty, parts replaced, etc." />
            </label>
          </div>
          <div className="form-actions-right">
            <button className="btn btn-outline">Save Draft</button>
            <button className="btn btn-primary">Generate Invoice</button>
          </div>
        </Card>

        <Card title="Recent Invoices">
          <Table
            columns={[
              { key: 'number', label: 'Invoice #' },
              { key: 'customer', label: 'Customer' },
              { key: 'amount', label: 'Amount' },
              { key: 'mode', label: 'Mode' },
              { key: 'status', label: 'Status' },
              { key: 'date', label: 'Date' }
            ]}
            rows={invoices}
          />
        </Card>
      </div>
    </div>
  );
};

export default Invoices;




