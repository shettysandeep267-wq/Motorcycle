import React from 'react';

const Tag = ({ color = 'default', children }) => {
  return <span className={`tag tag-${color}`}>{children}</span>;
};

export default Tag;




