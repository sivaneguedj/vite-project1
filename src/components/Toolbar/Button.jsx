import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe,faItalic, faBold, faUnderline, faAlignLeft, faAlignCenter, faAlignRight, faAlignJustify, faFont, faTextHeight, faPalette } from '@fortawesome/free-solid-svg-icons';
import style from './Toolbar.module.css';

function Button({ command, buttonPressed, handleButton }) {
  // Mapping commands to icons
  const commandToIcon = {
    bold: faBold,
    italic: faItalic,
    underline: faUnderline,
    globe: faGlobe,
    palette: faPalette,
    size: faTextHeight,
  };

  // Determine the button content based on the command
    const getContent = () => {
      if (command === "clear" || command === "shift") {
        return command;
      }
      return "";
    };

  return ( 
    <button
      onClick={handleButton}
      className={`${style['toolbar-button']} ${buttonPressed ? style.active : ''}`}
    >
      {getContent() ? getContent() : <FontAwesomeIcon icon={commandToIcon[command]} />}
    </button>
  );
}

export default Button;