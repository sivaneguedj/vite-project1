import React from 'react';
import Key from './Key';
import { keyConfigEn, keyConfigHe } from './KeyConfig';



const Keyboard = ({ onInput, onBackspace, shiftPressed, language }) => {
  const keyConfig = language === 'en' ? keyConfigEn : keyConfigHe;
  

  return (
    <div className="keyboard">
      {keyConfig.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key) =>
            key === 'Backspace' ? (
              <Key key={key} value={key} onClick={onBackspace}  />
            ) : (
              <Key
                shiftPressed={shiftPressed}
                key={shiftPressed ? key.toUpperCase() : key.toLowerCase()}
                value={shiftPressed ? key.toUpperCase() : key.toLowerCase()}
                onClick={onInput}
              />
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
