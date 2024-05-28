import React from 'react';
import style from './Key.module.css';


// Key Component
// foreach key on the keyboard

// const Key = ({ value, onClick }) => {
//     const displayValue = value === " " ? "Space" : value;
  
//     return (
//       <button className="key" onClick={() => onClick(value)}>
//         {displayValue}
//       </button>
//     );
//   };
  
//   export default Key;




// Key Component
// foreach key on the keyboard
// props : key, value, onClick, boldPressed
const Key = (props) => {
    const displayValue = props.value === " " ? "Space" : props.value;

    const getStyles = () => {
      let styles = {};
      if (props.boldPressed) styles.fontWeight = style.italic;
      if (props.italicPressed) styles.fontStyle = style.italic;
      if (props.underlinePressed) styles.textDecoration = style.underline;
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

  // <button 
  //       className="key" 
  //       onClick={() => onClick(value)}
  //       >
  //       <span style={{ fontWeight: boldPressed ? style.bold : 'normal' }}>
  //         {displayValue}
  //       </span>
  //     </button>