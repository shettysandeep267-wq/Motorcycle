import React from 'react';
import Card from '../components/ui/Card.jsx';

const Settings = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2>Workshop Settings</h2>
          <p>Configure timings, pricing, notifications, and more.</p>
        </div>
      </div>

      <div className="grid grid-2">
        <Card title="Workshop Details">
          <div className="form-grid-2">
            <label className="field">
              <span>Workshop name</span>
              <input defaultValue="Sandeep Moto Garage" />
            </label>
            <label className="field">
              <span>Owner name</span>
              <input placeholder="Owner" />
            </label>
            <label className="field field-wide">
              <span>Address</span>
              <textarea rows="2" placeholder="Full workshop address" />
            </label>
            <label className="field">
              <span>Opening time</span>
              <input type="time" defaultValue="09:30" />
            </label>
            <label className="field">
              <span>Closing time</span>
              <input type="time" defaultValue="20:00" />
            </label>
          </div>
          <div className="form-actions-right">
            <button className="btn btn-primary">Save Settings</button>
          </div>
        </Card>

        <Card title="Service & Notification Preferences">
          <div className="form-grid-2">
            <label className="field field-checkbox">
              <input type="checkbox" defaultChecked />
              <span>WhatsApp reminder 1 day before service due</span>
            </label>
            <label className="field field-checkbox">
              <input type="checkbox" defaultChecked />
              <span>SMS when bike is ready for delivery</span>
            </label>
            <label className="field field-checkbox">
              <input type="checkbox" />
              <span>Daily summary on owner’s WhatsApp</span>
            </label>
            <label className="field">
              <span>Default GST %</span>
              <select defaultValue="18">
                <option value="18">18%</option>
                <option value="12">12%</option>
                <option value="5">5%</option>
              </select>
            </label>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;




