import React from "react";

// Add this function to NavFont.jsx
function changeGlobalFontSize(delta) {
  const root = document.documentElement; // Get the <html> element
  const currentFontSize = parseFloat(getComputedStyle(root).fontSize);
  const newFontSize = currentFontSize + delta;

  root.style.fontSize = `${newFontSize}px`;
}

function NavFont() {
  const increaseFontSize = () => {
    changeGlobalFontSize(2); // Increase font size by 2 units for the entire page
  };

  const decreaseFontSize = () => {
    changeGlobalFontSize(-2); // Decrease font size by 2 units for the entire page
  };

  return (
    <div>
      <p>Font</p>
      <button onClick={increaseFontSize}>+</button>
      <button onClick={decreaseFontSize}>-</button>
    </div>
  );
}

export default NavFont;
