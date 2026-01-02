import React from 'react';

const StatPill = ({ label, value, trend, trendLabel, accent = 'primary' }) => {
  return (
    <div className={`stat-pill stat-pill-${accent}`}>
      <div className="stat-label">{label}</div>
      <div className="stat-main">
        <span className="stat-value">{value}</span>
        {trend !== undefined && (
          <span className={`stat-trend ${trend >= 0 ? 'stat-trend-up' : 'stat-trend-down'}`}>
            {trend >= 0 ? '+' : ''}
            {trend}%
          </span>
        )}
      </div>
      {trendLabel && <div className="stat-caption">{trendLabel}</div>}
    </div>
  );
};

export default StatPill;




