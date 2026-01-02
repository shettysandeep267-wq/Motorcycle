import React from 'react';
import Card from '../components/ui/Card.jsx';
import Table from '../components/ui/Table.jsx';
import Tag from '../components/ui/Tag.jsx';

const ServiceJobs = () => {
  const jobs = [
    {
      jobId: 'JOB-1041',
      customer: 'Ankit Singh',
      bike: 'Bajaj Pulsar 150',
      issue: 'Engine noise',
      mechanic: 'Raju',
      status: <Tag color="warning">Diagnosing</Tag>
    },
    {
      jobId: 'JOB-1042',
      customer: 'Rahul Sharma',
      bike: 'Yamaha R15',
      issue: 'Full service',
      mechanic: 'Imran',
      status: <Tag color="primary">In Bay 2</Tag>
    },
    {
      jobId: 'JOB-1040',
      customer: 'Kiran Patel',
      bike: 'Honda Shine',
      issue: 'Brake issue',
      mechanic: 'Sanjay',
      status: <Tag color="success">Completed</Tag>
    }
  ];

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2>Service Jobs</h2>
          <p>From gate to delivery – track every bike.</p>
        </div>
        <div className="page-actions">
          <button className="btn btn-outline">Create Estimate</button>
          <button className="btn btn-primary">+ New Job</button>
        </div>
      </div>

      <div className="grid grid-2">
        <Card title="New Job Intake">
          <div className="form-grid-2">
            <label className="field">
              <span>Customer name</span>
              <input placeholder="Full name" />
            </label>
            <label className="field">
              <span>Mobile</span>
              <input placeholder="10-digit number" />
            </label>
            <label className="field">
              <span>Bike make & model</span>
              <input placeholder="e.g. Royal Enfield Classic 350" />
            </label>
            <label className="field">
              <span>Registration number</span>
              <input placeholder="MH 12 AB 1234" />
            </label>
            <label className="field field-wide">
              <span>Problem / requested service</span>
              <textarea rows="3" placeholder="Describe issues or services requested" />
            </label>
          </div>
          <div className="form-actions-right">
            <button className="btn btn-outline">Save as Draft</button>
            <button className="btn btn-primary">Create Job Ticket</button>
          </div>
        </Card>

        <Card title="Live Jobs Board">
          <Table
            columns={[
              { key: 'jobId', label: 'Job ID' },
              { key: 'customer', label: 'Customer' },
              { key: 'bike', label: 'Bike' },
              { key: 'issue', label: 'Issue / Service' },
              { key: 'mechanic', label: 'Mechanic' },
              { key: 'status', label: 'Status' }
            ]}
            rows={jobs}
          />
        </Card>
      </div>
    </div>
  );
};

export default ServiceJobs;




