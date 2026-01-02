import React from 'react';
import Card from '../components/ui/Card.jsx';
import StatPill from '../components/ui/StatPill.jsx';

const Analytics = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2>Reports & Analytics</h2>
          <p>Understand which bikes, services, and days give maximum profit.</p>
        </div>
        <div className="page-actions">
          <button className="btn btn-outline">Export PDF</button>
          <button className="btn btn-primary">This Month</button>
        </div>
      </div>

      <div className="grid grid-4">
        <StatPill
          label="Monthly Revenue"
          value="₹ 6.8L"
          trend={22}
          trendLabel="vs. last month"
          accent="green"
        />
        <StatPill
          label="Avg. Revenue / Job"
          value="₹ 1,450"
          trend={9}
          trendLabel="Improved pricing"
          accent="primary"
        />
        <StatPill
          label="Repeat Customers"
          value="63%"
          trend={11}
          trendLabel="vs. last quarter"
          accent="purple"
        />
        <StatPill
          label="Inventory Turnover"
          value="3.2x"
          trend={5}
          trendLabel="Parts moving faster"
          accent="amber"
        />
      </div>

      <div className="grid grid-2">
        <Card title="Top Earning Services (This Month)">
          <ul className="insight-list">
            <li>
              <span>Full Service Package</span>
              <span className="insight-value">₹ 2.3L</span>
            </li>
            <li>
              <span>Engine Overhaul</span>
              <span className="insight-value">₹ 1.1L</span>
            </li>
            <li>
              <span>Clutch & Gearbox Work</span>
              <span className="insight-value">₹ 90K</span>
            </li>
            <li>
              <span>Brake Service</span>
              <span className="insight-value">₹ 65K</span>
            </li>
          </ul>
        </Card>

        <Card title="Best Performing Technicians">
          <ul className="insight-list">
            <li>
              <span>Raju · Senior Technician</span>
              <span className="insight-pill">4.9 ★ · 64 jobs</span>
            </li>
            <li>
              <span>Imran · Technician</span>
              <span className="insight-pill">4.7 ★ · 52 jobs</span>
            </li>
            <li>
              <span>Sanjay · Junior Technician</span>
              <span className="insight-pill">4.3 ★ · 39 jobs</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;




