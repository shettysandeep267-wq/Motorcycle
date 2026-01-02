import React from 'react';
import Card from '../components/ui/Card.jsx';
import StatPill from '../components/ui/StatPill.jsx';
import Table from '../components/ui/Table.jsx';
import Tag from '../components/ui/Tag.jsx';

const Dashboard = ({ onNavigate }) => {
  const todayJobs = [
    {
      id: 'JOB-1042',
      customer: 'Rahul Sharma',
      bike: 'Yamaha R15',
      service: 'Full Service',
      eta: '3:30 PM',
      status: <Tag color="warning">In Progress</Tag>
    },
    {
      id: 'JOB-1043',
      customer: 'Pooja Verma',
      bike: 'Honda Activa',
      service: 'Oil Change',
      eta: '1:00 PM',
      status: <Tag color="success">Ready</Tag>
    },
    {
      id: 'JOB-1044',
      customer: 'Imran Khan',
      bike: 'Royal Enfield Classic',
      service: 'Engine Work',
      eta: 'Tomorrow',
      status: <Tag color="danger">Delayed</Tag>
    }
  ];

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2>Live Workshop Overview</h2>
          <p>Track jobs, inventory, and revenue at a glance.</p>
        </div>
        <div className="page-actions">
          <button className="btn btn-outline" onClick={() => onNavigate('inventory')}>
            Add New Part
          </button>
          <button className="btn btn-primary" onClick={() => onNavigate('service')}>
            + New Service Job
          </button>
        </div>
      </div>

      <div className="grid grid-4">
        <StatPill
          label="Active Service Jobs"
          value="12"
          trend={18}
          trendLabel="vs. yesterday"
          accent="primary"
        />
        <StatPill
          label="Parts Low in Stock"
          value="7"
          trend={-5}
          trendLabel="restocked this week"
          accent="amber"
        />
        <StatPill
          label="Today’s Revenue"
          value="₹ 38,400"
          trend={24}
          trendLabel="vs. last Monday"
          accent="green"
        />
        <StatPill
          label="Avg. Job Time"
          value="2h 15m"
          trend={-9}
          trendLabel="faster than last week"
          accent="purple"
        />
      </div>

      <div className="grid grid-2">
        <Card
          title="Today’s Service Queue"
          action={
            <button className="link" onClick={() => onNavigate('service')}>
              View all jobs
            </button>
          }
        >
          <Table
            columns={[
              { key: 'id', label: 'Job ID' },
              { key: 'customer', label: 'Customer' },
              { key: 'bike', label: 'Bike' },
              { key: 'service', label: 'Service' },
              { key: 'eta', label: 'ETA' },
              { key: 'status', label: 'Status' }
            ]}
            rows={todayJobs}
          />
        </Card>

        <Card
          title="Quick Shortcuts"
          action={
            <span className="hint-text">
              Tip: Focus on 3 things – jobs, stock, & money. Rest can wait.
            </span>
          }
        >
          <div className="shortcut-grid">
            <button className="shortcut" onClick={() => onNavigate('inventory')}>
              <span className="shortcut-icon">📦</span>
              <span className="shortcut-label">Update Parts Stock</span>
              <span className="shortcut-caption">Scan new parts & update quantities.</span>
            </button>
            <button className="shortcut" onClick={() => onNavigate('customers')}>
              <span className="shortcut-icon">🧑‍🤝‍🧑</span>
              <span className="shortcut-label">Add Returning Customer</span>
              <span className="shortcut-caption">
                Save bikes, history, & preferred reminders.
              </span>
            </button>
            <button className="shortcut" onClick={() => onNavigate('invoices')}>
              <span className="shortcut-icon">🧾</span>
              <span className="shortcut-label">Create Invoice</span>
              <span className="shortcut-caption">Generate GST-ready bill in seconds.</span>
            </button>
            <button className="shortcut" onClick={() => onNavigate('analytics')}>
              <span className="shortcut-icon">📊</span>
              <span className="shortcut-label">View Monthly Report</span>
              <span className="shortcut-caption">See profits, top mechanics & more.</span>
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;




