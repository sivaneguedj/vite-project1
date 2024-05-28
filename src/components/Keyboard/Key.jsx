import React from 'react';
import style from './Key.module.css';



// Key Component
// foreach key on the keyboard
// props : key, value, onClick
const Key = (props) => {
    const displayValue = props.value === " " ? "Space" : props.value;


    return (
      <button 
        className="key" 
        onClick={() => props.onClick(props.value)}

        >
          <span>
            {displayValue}
          </span>
          
      </button>
    );
  };
  
  export default Key;
