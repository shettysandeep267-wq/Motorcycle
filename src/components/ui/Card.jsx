import React from 'react';

const Card = ({ title, action, children, footer }) => {
  return (
    <section className="card">
      {(title || action) && (
        <header className="card-header">
          <h2 className="card-title">{title}</h2>
          {action && <div className="card-action">{action}</div>}
        </header>
      )}
      <div className="card-body">{children}</div>
      {footer && <footer className="card-footer">{footer}</footer>}
    </section>
  );
};

export default Card;




