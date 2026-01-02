import React from 'react';
import { PiBellBold, PiMagnifyingGlassBold, PiUserCircleBold } from 'react-icons/pi';

const Topbar = () => {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <h1 className="topbar-title">Motorcycle Parts & Service Manager</h1>
        <p className="topbar-subtitle">Control your entire workshop from one clean dashboard.</p>
      </div>

      <div className="topbar-right">
        <div className="topbar-search">
          <PiMagnifyingGlassBold />
          <input placeholder="Search jobs, customers, parts..." />
        </div>

        <button className="icon-button">
          <PiBellBold />
          <span className="badge-dot" />
        </button>

        <div className="user-pill">
          <PiUserCircleBold className="user-avatar" />
          <div>
            <div className="user-name">Sandeep Garage</div>
            <div className="user-role">Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;




