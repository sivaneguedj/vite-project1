import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';
import Select from './Select';
import { faGlobe, faPalette } from '@fortawesome/free-solid-svg-icons';



const Toolbar = ({ onCommand, onLanguageChange, boldPressed , italicPressed, underlinePressed, onClear, onShift, onUndo}) => {
  const [colorDropdownVisible, setColorDropdownVisible] = useState(false);

  const toggleColorDropdown = () => {
    setColorDropdownVisible(!colorDropdownVisible);
  };

  const handleColorChange = (color) => {
    onCommand('foreColor', color);
    setColorDropdownVisible(false);
  };

  return (
    <div className="toolbar">

      <Button 
      className="toolbar-button"
        command ='clear' 
        buttonPressed={false} 
        handleButton={() => onCommand('clear')}
      ></Button>

      <Button 
        command ='shift' 
        buttonPressed={false} 
        handleButton={() => onCommand('shift')}
      ></Button>


      <Button command='undo' 
        buttonPressed={false} 
        handleButton={() => onCommand('undo')} 
         />


      <Button command ='bold' buttonPressed={boldPressed} handleButton={() => onCommand('bold')}/>
      <Button command ='italic' buttonPressed={italicPressed} handleButton={() => onCommand('italic')}/>
      <Button command ='underline' buttonPressed={underlinePressed} handleButton={() => onCommand('underline')}/>

      <Select command='fontName' handleButton={onCommand} type='fontName' />
      <Select command='size' handleButton={onCommand} type='fontSize' /> 

      <button onClick={onLanguageChange}>
        <FontAwesomeIcon icon={faGlobe} />
      </button>        
      

      <button onClick={toggleColorDropdown}>
        <FontAwesomeIcon icon={faPalette} />
      </button>
      {colorDropdownVisible && (
        <div className="color-dropdown">
          <button onClick={() => handleColorChange('blue')} style={{ backgroundColor: 'blue' }}></button>
          <button onClick={() => handleColorChange('black')} style={{ backgroundColor: 'black' }}></button>
          <button onClick={() => handleColorChange('red')} style={{ backgroundColor: 'red' }}></button>
          <button onClick={() => handleColorChange('green')} style={{ backgroundColor: 'green' }}></button>
          <button onClick={() => handleColorChange('yellow')} style={{ backgroundColor: 'yellow' }}></button>
        </div>
      )}
    </div>
  );
};

export default Toolbar;