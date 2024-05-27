import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBold, faItalic, faUnderline, faAlignLeft, faAlignCenter, faAlignRight, faAlignJustify, faFont, faTextHeight, faPalette } from '@fortawesome/free-solid-svg-icons';



const Toolbar = ({ onCommand, onLanguageChange, boldPressed , italicPressed, underlinePressed}) => {
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

      <button onClick={() => onCommand('clear')} className="toolbar-button">
        Clear
      </button>

      <button onClick={onLanguageChange}>
        <FontAwesomeIcon icon={faGlobe} />
      </button>

      <button onClick={() => onCommand('shift')} className="toolbar-button">
        Shift
      </button>

      <button
        onClick={() => onCommand('bold')}
        className={`toolbar-button ${boldPressed ? 'active' : ''}`}
      >
        <FontAwesomeIcon icon={faBold} />
      </button>

      <button onClick={() => onCommand('italic')} 
      className={`toolbar-button ${italicPressed ? 'active' : ''}`}
      >
        <FontAwesomeIcon icon={faItalic} />
      </button>

      <button onClick={() => onCommand('underline')}
      className={`toolbar-button ${underlinePressed ? 'active' : ''}`}
      >
        <FontAwesomeIcon icon={faUnderline} />
      </button>


      <select onChange={(e) => onCommand('fontName', e.target.value)}>
        <option value="">Font Name</option>
        <option value="Arial">Arial</option>
        <option value="Serif">Serif</option>
        <option value="David">David</option>
        <option value="Times New Roman">Times New Roman</option>
      </select>

      
      <select onChange={(e) => onCommand('size', e.target.value)}>
      <FontAwesomeIcon icon={faTextHeight} />
        <option value="">Font Size</option>
        <option value="12">12</option>
        <option value="14">14</option>
        <option value="16">16</option>
        <option value="20">20</option>
      </select>
        
      

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