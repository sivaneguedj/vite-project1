import React from 'react';

// Key Component
// foreach key on the keyboard

const Key = ({ value, onClick }) => {
    const displayValue = value === " " ? "Space" : value;
  
    return (
      <button className="key" onClick={() => onClick(value)}>
        {displayValue}
      </button>
    );
  };
  
  export default Key;