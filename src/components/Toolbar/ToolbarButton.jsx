import React from 'react';

const ToolbarButton = ({ command, onClick, label }) => {
  return (
    <button className="toolbar-button" onClick={() => onClick(command)}>
      {label}
    </button>
  );
};

export default ToolbarButton;