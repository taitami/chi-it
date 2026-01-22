import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <div className="wrapper">
      <h1>my app</h1>
      <hr />
      <div className="children-container">
        {children}
      </div>
    </div>
  );
};

export default Wrapper;