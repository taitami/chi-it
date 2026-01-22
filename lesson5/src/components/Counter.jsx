import React, { useState } from 'react'; //lesson5

const Counter = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);

  return (
    <div className="counter">
      <h3>counter</h3>
      <p>value: <strong>{count}</strong></p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;