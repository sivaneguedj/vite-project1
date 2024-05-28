import React from 'react';
import style from './Key.module.css';



// Key Component
// foreach key on the keyboard
// props : key, value, onClick
const Key = (props) => {
    const displayValue = props.value === " " ? "Space" : props.value;

    const getStyles = () => {
      let styles = {};
      if (props.shiftPressed && props.value.length === 1) {
        styles.textTransform = 'uppercase';
      }
      return styles;
    };

    return (
      <button 
        className="key" 
        onClick={() => props.onClick(props.value)}
        >
          <span style={getStyles()}>
            {displayValue}
          </span>
          
      </button>
    );
  };
  
  export default Key;
