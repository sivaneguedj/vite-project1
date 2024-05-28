import React from "react";

function Select({ command, handleButton, type }) {
  

  // Options for font names
  const fontNameOptions = (
    <>
      <option value="">Font Name</option>
      <option value="Arial">Arial</option>
      <option value="Serif">Serif</option>
      <option value="David">David</option>
      <option value="Calibri">Calibri</option>
      <option value="Courier New">Courier New</option>
      <option value="Times New Roman">Times New Roman</option>
    </>
  );

  // Options for font sizes
  const fontSizeOptions = (
    <>
      <option value="">Font Size</option>
      <option value="12">12</option>
      <option value="14">14</option>
      <option value="16">16</option>
      <option value="20">20</option>
      <option value="24">24</option>
      <option value="28">28</option>
    </>
  );

  return (
    <select onChange={(e) => handleButton(command, e.target.value)}>
            {type === 'fontName' ? fontNameOptions : fontSizeOptions}
        </select>
  );
}

export default Select;